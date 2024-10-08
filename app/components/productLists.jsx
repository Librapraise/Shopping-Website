import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "../lib/wixClientServer";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./pagination";

const PRODUCT_PER_PAGE = 4;

const ProductList = async ({ categoryId, limit, searchParams }) => {
  if (!categoryId) {
    return <div>Error: Category ID is required.</div>;
  }

    const wixClient = await wixClientServer();

    const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
       "productType", searchParams?.type? [searchParams.type] : ["physical", "digital"]
     )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
       searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
         : 0
     );
 
   if (searchParams?.sort) {
     const [sortType, sortBy] = searchParams.sort.split(" ");
 
     if (sortType === "asc") {
       productQuery.ascending(sortBy);
     }
     if (sortType === "desc") {
       productQuery.descending(sortBy);
     }
   }
 
   const res = await productQuery.find();

    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
        {res.items.map((product) => (
          <Link
            href={"/" + product.slug}
            className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 trasition-opacity ease-in-out duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>

            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${" "}{product.price?.price}</span>
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section) => section.title === "textDesc"
                    )?.description || ""
                  ),
                }}
              ></div>
            )}

            <button className="px-4 py-2 ring-1 ring-lama text-lama hover:bg-lama hover:text-white rounded-full w-max">
              Add to cart
            </button>
          </Link>
        ))}

        {searchParams?.cat || searchParams?.name ? (
          <Pagination 
            currentPage={res.currentPage || 0}
            hasPrev={res.hasPrev()}
            hasNext={res.hasNext()}
          /> 
        ): null}
      </div>
    );

};

export default ProductList;
