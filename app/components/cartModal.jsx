"use client";

import Image from "next/image";
import { useCartStore } from "../hook/useCartStore";
import { media as wixMedia } from "@wix/sdk";
import { useWixContext } from "../hook/useWixClient";


const CartModal = () => {

    //Temporary
    //const cartItems = true;

    const wixClient = useWixContext();

    const { cart, removeItem, isLoading } = useCartStore();

    // useEffect(() => {
    //     getCart(wixClient);
    // }, [wixClient, getCart]);

    //const response = await wixClient.currentCart.addToCurrentCart();

    //checkout
    const handleCheckout = async () => {
        try {
          const checkout =
            await wixClient.currentCart.createCheckoutFromCurrentCart({
              channelType: currentCart.ChannelType.WEB,
            });
    
          const { redirectSession } =
            await wixClient.redirects.createRedirectSession({
              ecomCheckout: { checkoutId: checkout.checkoutId },
              callbacks: {
                postFlowUrl: window.location.origin,
                thankYouPageUrl: `${window.location.origin}/success`,
              },
            });
    
          if (redirectSession?.fullUrl) {
            window.location.href = redirectSession.fullUrl;
          }
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div className="relative">
            <div className="w-max absolute px-4 py-2 rounded-md top-12 right-0 text-sm bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 flex flex-col gap-6">
                {!cart.lineItems ? (
                    <div className="">cart is empty</div>
                ) : (
                <>  
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    {/*List Items*/}

                    { cart.lineItems.map(item => (    
                        <div className="flex flex-row items-center gap-4" key={item._id}>
                            {item.image && (<Image 
                                src={wixMedia.getScaledToFillImageUrl(item.image,72,72,{})}
                                alt="" 
                                width={72} 
                                height={72} 
                                className="object-cover rounded-md"
                            />)}

                            <div className="flex flex-col justify-between w-full gap-6">
                                {/*TOP*/}
                                <div className="">
                                    {/*TITLE*/}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">{item.productName?.original}</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                                            {item.quantity && item.quantity > 1 && <div className="text-xs text-green-500">{item.quantity} x </div>}${item.price?.amount}
                                        </div>
                                    </div>

                                    {/*DESC*/}
                                    <div className="text-sm text-gray-500">
                                        {item.availability?.status}
                                    </div>
                                </div>

                                {/*BOTTOM*/}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. {item.quantity}</span>
                                    <span className="text-blue-500"
                                    style={{cursor: isLoading ? "not-allowed" : "pointer"}}
                                    onClick={()=> removeItem(wixClient, item._id)}
                                    >
                                        remove
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                        

                    {/*subBOTTOM*/}
                    <div className="">
                        <div className="flex items-center justify-between gap-8">
                            <span className="">Subtotal</span>
                            <span className="">${cart.subtotal.amount}</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Shipping and taxes calculated at checkout. 
                        </p>

                        <div className="flex items-center justify-between text-sm">
                            <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">
                                View Cart
                            </button>
                            <button className="rounded-md px-4 py-3 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                            disabled={isLoading}
                            onClick={handleCheckout}
                            >
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