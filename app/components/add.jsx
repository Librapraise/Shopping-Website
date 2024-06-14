"use client";

import { useState } from "react";



const Add = ({ productId, variantId, stockNumber }) => {


    const [ quantity, setQuantity ] = useState(1);

    //const stock = 4;

    const handleQuantity = (type) => {
        if(type === "decrease" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }

        if(type === "increase" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1);
        }

    }


    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose quantity</h4>
            <div className="flex justify-between">
                {/*left */}
                <div className="flex items-center justify-center gap-4">
                    <div className="bg-gray-100 rounded-3xl px-4 py-2 flex items-center justify-between w-32 ">
                        <button 
                            className="text-xl cursor-pointer" onClick={() => handleQuantity("decrease")}
                        >
                            -
                        </button>
                        {quantity}
                        <button 
                            className="text-xl cursor-pointer"
                            onClick={() => handleQuantity("increase")}
                        >
                            +
                        </button>
                    </div>
                    <div className="text-xs"
                    >
                        Only <span className="text-orange-500">{stockNumber} items</span> left <br/> {"Don't "}Miss it
                    </div>
                </div>

                {/*right */}
                <button 
                    className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama px-4 py-2 hover:bg-lama hover:text-white disabled:bg-pink-200 disabled:text-white disabled:cursor-not-allowed disabled:ring-none"
                    disabled={ quantity > stockNumber }
                    >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Add;