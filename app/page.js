//  "use client";


import Image from "next/image";
import Slider from "./components/slider";
import ProductList from "./components/productLists";
//import { useContext, useEffect } from "react";
import { WixClientContext } from "./context/wixContext";
import { useWixContext } from "./hook/useWixClient";
import { wixClientServer } from "./lib/wixClientServer";
import { Suspense } from "react";
import CategoryList from "./components/CategoryList";


const Home = async() => {

  // const WixClient = useWixContext();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await WixClient.products.queryProducts().find();
  //     console.log(res);
  //   };

  //   getProducts();
  // }, [WixClient]) 


  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  const featuredCategoryId = process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_FEATURED_CATEGORY_ID;


  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList 
            categoryId={featuredCategoryId}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback={"loading..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList 
          categoryId={featuredCategoryId}
        />
      </div>
    </div>
  );
}


export default Home;