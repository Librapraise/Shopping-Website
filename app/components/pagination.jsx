"use client";


import { useSearchParams, usePathname, useRouter } from "next/navigation";


const Pagination = ({ currentPage, hasPrev, hasNext, }) => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathName}?${params.toString()}`);
    };


    return (
        <div className="mt-12 flex justify-between w-full">
            <button
            className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
            disabled={!hasPrev}
            onClick={() => createPageUrl(currentPage - 1)}
            >
            Previous
            </button>
            <button
            className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
            disabled={!hasNext}
            onClick={() => createPageUrl(currentPage + 1)}
            >
            Next
            </button>
        </div>
    )
}

export default Pagination;