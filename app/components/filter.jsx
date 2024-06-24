'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation"; 


const Filter = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathName}?${params.toString()}`)
    };

    return (
        <div className="mt-12 flex justify-between">
            {/*right */}
            <div className="flex gap-6 flex-wrap">
                <select 
                    name="type"
                    id=""
                    className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ebeded] outline-none"
                    onChange={handleFilterChange}
                >   
                    <option>Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <input
                    className="text-xs pl-2 py-2 w-24 rounded-2xl ring-1 ring-gray-400 outline-none"
                    type="text"
                    name="min"
                    placeholder="min price"
                    onChange={handleFilterChange}
                />
                <input
                    className="text-xs pl-2 py-2 w-24 rounded-2xl ring-1 ring-gray-400 outline-none"
                    type="text"
                    name="max"
                    placeholder="max price"
                    onChange={handleFilterChange}
                />

                <select 
                    name="type"
                    id=""
                    className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ebeded] outline-none"
                    onChange={handleFilterChange}
                >   
                    <option>Category</option>
                    <option value="new arrival">New Arrival</option>
                    <option value="popular">Popular</option>
                </select>

                <select 
                    name="type"
                    id=""
                    className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ebeded] outline-none"
                >   
                    <option>All Filters</option>
                </select>
            </div>
            {/*right */}
            <div className="">
                <select 
                    name="type"
                    id=""
                    className="px-4 py-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400 outline-none"
                    onChange={handleFilterChange}
                >   
                    <option>Sort By</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;