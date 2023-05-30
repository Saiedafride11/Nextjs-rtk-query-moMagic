"use client";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import SocialIcons from "../utils/SocialIcons";

const HeaderBottom = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Easy Monthly Installments", link: "/" },
    { name: "Shop by Brands", link: "/" },
    { name: "Become a Vendor", link: "/" },
  ];
  
  return (
    <div className="bg-[#0E3B3E] shadow-md w-full h-full flex justify-center items-center sticky top-0 desktop-view-header">
      <div className="md:flex flex-wrap items-center justify-between py-4 px-2 md:px-10 lg:px-20 container">
        <div className="flex flex-row">
            <div className="mr-5 flex justify-center items-center flex-row text-[13px] font-light text-white hover:text-gray-100 transition">
                <span className="mr-1 text-[20px]">
                    <HiBars3/>
                </span>
                <span className="ml-2 inline-block text-[15px] ">Browse By Category</span>
            </div>


            <ul
              className="md:flex md:items-center md:pb-0 pb-12 md:static bg-grey text-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9"
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 md:text-xs md:my-0 my-7"
                >
                  <Link
                    href={link.link}
                    className="font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
        {/* social Media Icons */}
        <SocialIcons/>
      </div>
    </div>
  );
};

export default HeaderBottom;
