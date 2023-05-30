"use client";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/redux/api/productsApi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCart3, BsHeadphones, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

const HeaderTop = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestBox, setSuggestBox] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const carts = useSelector((state) => state.cartReducer.carts);
  const { data:categories, isLoading, isError, isFetching } = useGetCategoriesQuery(null);
  const { data:products, isLoading: isProductsLoading, isError:isProductsError, isFetching:isProductsFetching } = useGetProductsQuery(null);

  const handleSearchChange = e => {
    const matchedProducts = products?.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchProducts(matchedProducts);
    setSearchText( e.target.value );
    if(e.target.value === '') {
      setSuggestBox(false);
    }
    else{
      setSuggestBox(true);
    }
  }

  return (
    <>
      <section className="bg-[#03484D] w-full h-auto desktop-view-header">
        <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-2 mx-auto flex flex-wrap justify-between items-center">

            <Link href="/">
                  <Image src="/logo.png" width={140} height={100} alt="logo-image" className="cursor-pointer"/>
            </Link>
      
            <div className="flex flex-row items-center">
                  <div className="my-2">
                        <select
                              type="text"
                              name="service"
                              className=" bg-white rounded-l-lg cursor-pointer border border-gray-300 focus:border-[#B6B6B6] text-base capitalize outline-none text-gray-500 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                            <option value="" className="hidden">All categories</option>
                            {
                              ( isLoading | isError | isFetching ) ? <option value="">Loading...</option>
                              :
                              ( categories?.length === 0 ? <option value="">No categories found!</option>
                                :
                                categories?.map((category, i) => <option value={category} key={i} className="capitalize">{category}</option>)
                              )
                            }
                        </select>
                  </div>
                  <form className="w-96 relative">
                      <input
                            value={searchText}
                            onChange={handleSearchChange}
                            type="search"
                            className="h-[47px] py-2 px-4 block w-full bg-white outline-none border-gray-200 text-sm focus:border-[#B6B6B6] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Search for products"
                      />
                      {
                        searchText.length > 0 &&
                        <div className={`${( suggestBox && searchProducts?.length > 0 ) ? 'block' : 'hidden'} w-full bg-white absolute top-[50px] z-40 p-5 box-border shadow-lg shadow-gray-300/80 max-h-96 overflow-y-auto`}>
                              {
                                searchProducts?.map( product => <span key={product?.id} className="h-8 line-clamp-1 text-sm py-2 hover:text-[#0AAEB9] border-b cursor-pointer">{product?.title}</span>)
                              }
                        </div>
                      } 
                  </form>
                  <Link href="/products">
                      <button className="h-[47px] bg-[#B6B6B6] hover:bg-lime-600 transition text-white py-2 px-4 rounded-tr-lg rounded-br-lg">
                            <BsSearch/>
                      </button>
                  </Link>
            </div>
          
            <div className="flex justify-center items-center flex-row">
              <div>
                <span className="text-white text-[9px]">Call Us Now</span>
                <Link href="tel:+880 1534 127413" target="_blank">
                  <div className="flex justify-center items-center flex-row text-[15px] font-light text-white hover:text-gray-100 transition">
                    <span className="mr-1 text-[20px]">
                      <BsHeadphones />
                    </span>
                    <span className="inline-block">+880 1534 127413</span>
                  </div>
                </Link>
                <span className="inline-block text-white text-[13px]">Sign In</span>
              </div>
    
              <span className="mx-5 text-white text-[20px]">
                <FiUser />
              </span>
              <span className="text-white text-[20px]">
                <AiFillHeart />
              </span>
              <Link href="/cart">
                <div className="mx-5 flex justify-center items-center flex-row text-[13px] font-light text-white hover:text-gray-100 transition">
                    <span className="mr-1 text-[20px] relative">
                      <BsCart3 />
                      <span className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-[17px] text-[#FDDE3B]">{carts?.length}</span>
                    </span>
                    <span className="inline-block text-[15px] ">Cart</span>
                </div>
              </Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default HeaderTop;
