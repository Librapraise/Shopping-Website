"use client";

//import NavMenu from "./navmenu";
//import NavbarIcons from "./navbaricons";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchbar";
import dynamic from "next/dynamic";

const NavbarIcons = dynamic(() => import ("./navbaricons"), {ssr: false});
const NavMenu = dynamic(() => import ("./navmenu"), {ssr: false});


const Navbar = () => {

    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-64 relative">
            {/*Mobile Screens */}
            <NavMenu/>

            {/*Bigger Screens */}
            <div className="hidden md:flex items-center h-full justify-between gap-8">
                {/*left */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="logo" width={24} height={24} className=""/>
                        <div className="text-2xl tracking-wide font-bold">LibraShop</div>
                    </Link>

                    <div className="hidden xl:flex gap-4">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/deals">Deals</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>


                {/*right */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavbarIcons />
                </div>

            </div>
        
        </div>
      );
}

export default Navbar;