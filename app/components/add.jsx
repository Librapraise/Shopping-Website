"use client";

import { useState } from "react";
import { useWixContext } from "../hook/useWixClient";
import { useCartStore } from "../hook/useCartStore";



const Add = ({ productId, variantId, stockNumber }) => {


    const [ quantity, setQuantity ] = useState(1);

    //const stock = 4;

    const handleQuantity = (type) => {
        if(type === "decrease" && quantity > 1) {
            setQuantity(quantity - 1);
        }

        if(type === "increase" && quantity < stockNumber) {
            setQuantity(quantity + 1);
        }

    }

    const wixClient = useWixContext();
    const { addItem, isLoading } = useCartStore();

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

                    { stockNumber < 1 ? (
                        <div className="text-xs">Product is out of stock</div>
                    ) : (
                        <div className="text-xs">
                            Only <span className="text-orange-500">{stockNumber} items</span> left <br/> {"Don't "}Miss it
                        </div>
                    )}
                </div>

                {/*right */}
                <button 
                    className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama px-4 py-2 hover:bg-lama hover:text-white disabled:bg-pink-200 disabled:text-white disabled:cursor-not-allowed disabled:ring-none"
                    disabled={isLoading}
                    onClick={() => addItem(wixClient, productId, variantId, quantity)}
                    >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Add;