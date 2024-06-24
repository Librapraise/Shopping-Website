"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CartModal from "./cartModal";
import { useWixContext } from "../hook/useWixClient";
import Cookies from "js-cookie";
//import { useWixContext } from "../hook/useWixClient";



const NavbarIcons = () => {
    
    const router = useRouter();
    //const pathName = usePathname();

    const [ isProfileOpen, setProfileOpen ] = useState(false);
    const [ isCartOpen, setCartOpen ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const wixClient = useWixContext();
    const isLoggedIn = wixClient.auth.loggedIn();

    //const isLoggedIn = false;

    //logged iN
    const handleProfile = () => {

        if(!isLoggedIn) {
            router.push("/login");
        } else {
            setProfileOpen(!isProfileOpen);
        }
    }

    //logged out
    const handleLogOut = async () => {
        setIsLoading(true);
        Cookies.remove("refreshToken");
        const { logoutUrl } = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setProfileOpen(false);
        router.push(logoutUrl);
    }
    
//   //AUTH WITH WIX-MANAGED AUTH

//   const login = async () => {
//     const loginRequestData = wixClient.auth.generateOAuthData(
//       "http://localhost:3000"
//     );

//     console.log(loginRequestData);

//     localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
//     const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
//     window.location.href = authUrl;
//   };

    return (
        <div className="flex gap-4 items-center xl:gap-6 relative">
            <Image 
                src="/profile.png" 
                alt="" 
                width={22} 
                height={22} 
                className="cursor-pointer"
                onClick={handleProfile}
                //onClick={login}
            />
            { isProfileOpen && (
                <div className="absolute px-4 py-2 rounded-md top-10 left-0 text-sm bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/" className="">Profile</Link>
                    <div 
                        className="mt-2 cursor-pointer"
                        onClick={handleLogOut}
                    >
                        { isLoading ? "Logging out" : "Logout" }
                    </div>
                </div>
            )}


            <Image 
                src="/notification.png" 
                alt="" 
                width={22} 
                height={22} 
                className="cursor-pointer"

            />

            <div 
                className=" relative cursor-pointer"
                onClick={() => setCartOpen(!isCartOpen)}
            >
                <Image 
                    src="/cart.png" 
                    alt="" 
                    width={22} 
                    height={22} 
                    className=""
                />
                <div className="absolute rounded-full flex items-center justify-center text-sm bg-lama text-white -top-3 -right-3 w-6 h-6">2</div>
            </div>
            { isCartOpen && (
                <CartModal />   
            )}

        </div>
    );
};

export default NavbarIcons;