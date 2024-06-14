import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
          {/**TOP side */}
          <div className="flex flex-col md:flex-row gap-24 justify-between">

            {/**left  */}
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
              <Link href="/" className="">
                  <div className="text-2xl tracking-wide font-bold">LibraShop</div>
              </Link>
              <p>
                3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
                States
              </p>
              <span className="font-semibold">hello@lama.dev</span>
              <span className="font-semibold">+1 234 567 890</span>
              <div className="flex items-center gap-4">
                <Image src="/facebook.png" alt="" width={16} height={16} />
                <Image src="/instagram.png" alt="" width={16} height={16} />
                <Image src="/youtube.png" alt="" width={16} height={16} />
                <Image src="/pinterest.png" alt="" width={16} height={16} />
                <Image src="/x.png" alt="" width={16} height={16} />
              </div>
            </div>  

            {/**center  */}
            <div className="hidden lg:flex w-1/2 justify-between">

              <div className="flex flex-col justify-between">
                <h1 className="uppercase font-medium text-lg">company</h1>
                <div className="flex flex-col gap-6">
                  <Link href="">About Us</Link>
                  <Link href="">Careers</Link>
                  <Link href="">Affiliates</Link>
                  <Link href="">Blog</Link>
                  <Link href="">Contact Us</Link>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="uppercase font-medium text-lg">shop</h1>
                <div className="flex flex-col gap-6">
                  <Link href="">New Arrivals</Link>
                  <Link href="">Accessories</Link>
                  <Link href="">Men</Link>
                  <Link href="">Women</Link>
                  <Link href="">All Products</Link>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="uppercase font-medium text-lg">help</h1>
                <div className="flex flex-col gap-6">
                  <Link href="">Customer Service</Link>
                  <Link href="">My Account</Link>
                  <Link href="">Find a Store</Link>
                  <Link href="">Legal & Privacy</Link>
                  <Link href="">Gift Card</Link>
                </div>
              </div>

            </div>

            {/**right  */}
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
              <h1 className="uppercase font-medium text-lg">subscribe</h1>
              <p>
                Be the first to get the latest news about trends, promotions, and
                much more!
              </p>
              <div className="flex">
                <input type="text" name="" placeholder="Email address" className="p-4 w-3/4 outline-none" />
                <button className="bg-lama text-white w-1/4 cursor-pointer">JOIN</button>
              </div>
              <h1 className="uppercase font-semibold text-sm">secure payments</h1>
              <div className="flex justify-between gap-1 xl:gap-3">
                <Image src="/discover.png" alt="" width={40} height={20} />
                <Image src="/skrill.png" alt="" width={40} height={20} />
                <Image src="/paypal.png" alt="" width={40} height={20} />
                <Image src="/mastercard.png" alt="" width={40} height={20} />
                <Image src="/visa.png" alt="" width={40} height={20} />
              </div>
            </div>
          </div>


          {/**BOTTOM side */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
            <div className="">© 2024 Libra Shop</div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-center">
                <span className="text-gray-500 mr-4">Language</span>
                <span className="font-medium">Nigeria | English</span>
              </div>

              <div className="text-center">
                <span className="text-gray-500 mr-4">Currency</span>
                <span className="font-medium">₦ NAIRA</span>
              </div>

            </div>
          </div>

        </div>
      );
}

export default Footer;