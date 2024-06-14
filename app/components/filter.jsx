


const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            {/*right */}
            <div className="flex gap-6 flex-wrap">
                <select 
                    name="type"
                    id=""
                    className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ebeded] outline-none"
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
                    
                />
                <input
                    className="text-xs pl-2 py-2 w-24 rounded-2xl ring-1 ring-gray-400 outline-none"
                    type="text"
                    name="max"
                    placeholder="max price"

                />
                <select 
                    name="type"
                    id=""
                    className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ebeded] outline-none"
                >   
                    <option>Category</option>
                    <option value="physical">New Arrival</option>
                    <option value="digital">Popular</option>
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