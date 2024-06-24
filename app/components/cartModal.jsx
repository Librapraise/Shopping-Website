"use client";

import Image from "next/image";
import Link from "next/link";
import { useWixContext } from "../hook/useWixClient";


const CartModal = () => {

    const cartItems = true;

    const wixClient = useWixContext();

    //const response = await wixClient.currentCart.addToCurrentCart();


    return (
        <div className="relative">
            <div className="w-max absolute px-4 py-2 rounded-md top-12 right-0 text-sm bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 flex flex-col gap-6">
                { !cartItems ? (
                    <div className="">cart is empty</div>
                ) : (
                <>  
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    {/*List Items*/}
                    <div className="flex flex-row items-center gap-4">
                        <Image 
                            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" 
                            alt="" 
                            width={72} 
                            height={72} 
                            className="object-cover rounded-md"
                        />

                        <div className="flex flex-col justify-between w-full gap-6">
                            {/*TOP*/}
                            <div className="">
                                {/*TITLE*/}
                                <div className="flex items-center justify-between gap-8">
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                </div>

                                {/*DESC*/}
                                <div className="text-sm text-gray-500">
                                    available
                                </div>
                            </div>

                            {/*BOTTOM*/}
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Qty. 2</span>
                                <span className="text-blue-500">remove</span>
                            </div>
                        </div>
                    </div>

                    {/*subBOTTOM*/}
                    <div className="">
                        <div className="flex items-center justify-between gap-8">
                            <span className="">Subtotal</span>
                            <span className="">$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Shipping and taxes calculated at checkout. 
                        </p>

                        <div className="flex items-center justify-between text-sm">
                            <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">
                                View Cart
                            </button>
                            <button className="rounded-md px-4 py-3 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    )
};


export default CartModal;