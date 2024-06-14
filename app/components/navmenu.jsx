"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const navlinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/shop",
    title: "Shop",
  },
  {
    path: "/deals",
    title: "Deals",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/",
    title: "Logout",
  },
  {
    path: "/",
    title: `Cart(1)`,
  },
]

const NavMenu = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex items-center justify-between md:hidden">
          <Link href="/">
            <div className="text-2xl tracking-wide font-bold">LibraShop</div>
          </Link>

          <Image src="/menu.png" alt="nav" width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)}/>
          {
            open && (
                <div className="absolute bg-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center text-white text-xl z-50 gap-8">
                  {navlinks.map((links) => (
                    <Link 
                      href={links.path} 
                      onClick={() => setOpen(!open)}
                    >
                      {links.title}
                    </Link>
                  ))}
                </div>
            )
          }
        </div>
      );
}

export default NavMenu;