"use client";

import { useGetCategoriesQuery } from "@/redux/api/productsApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import airpod from "../../../assets/airpod.png";
import bigLaptop from "../../../assets/big-laptop.png";
import clock from "../../../assets/clock.png";
import cloth from "../../../assets/cloth.png";
import laptop from "../../../assets/laptop.png";

const BestDeals = () => {
      const { data:categories, isLoading, isError, isFetching } = useGetCategoriesQuery(null);
      const [selectedCategory, setSelectedCategory] = useState("");

      useEffect( () => {
            ( isLoading | isError | isFetching) ? setSelectedCategory("") : setSelectedCategory(categories[0])
      }, [categories])
      return (
            <div className="px-2 md:px-10 lg:px-20 container py-10 md:pb-16 mx-auto">
                  <div className="flex flex-wrap justify-between">
                        <h2 className="w-48 text-[30px]">
                              <span className="text-[#00CAD7]">Best  </span>Deals
                        </h2>

                        <ul className="flex flex-wrap items-center justify-center">
                              {     
                                    ( isLoading | isError | isFetching ) ?
                                    Array.from(Array(4)).map((_, index) => ( 
                                          <li key={index} className="text-[18px] uppercase ml-5 sm:ml-10">Loading...</li>
                                    ))
                                    :
                                    categories?.map((category, i) => (
                                    <li 
                                          key={i}
                                          className={`text-[18px] uppercase ml-5 sm:ml-10 cursor-pointer border-b-2 ${selectedCategory === category ? 'text-[#00CAD7] border-[#00CAD7]' : 'border-transparent'}`}
                                          onClick={ (e) => setSelectedCategory(e.target.textContent)}
                                    >
                                          {category}
                                    </li>
                              ))}
                        </ul>
                  </div>
                  <div className="w-full h-auto grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                        <div>
                              <div className="w-full mt-2 p-3 border border-slate-200 cursor-pointe">
                                    <div className="grid grid-cols-2 gap-2">
                                          <div>
                                                <span className="text-[#000000] text-lg block">
                                                      Nintendo Switch <br />Console
                                                </span>
                                                <span className="text-[#14B1F0] text-2xl block">
                                                      Rs.65,208
                                                </span>
                                                <span className="text-[#000000] text-base block mb-2">
                                                      Rs.<span className="line-through">66,000</span>
                                                </span>
                                                <div className="w-32 px-5 py-3 flex items-center justify-center text-2xl bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
                                                      Save<br />10%
                                                </div>
                                          </div>
                                          <div className="mx-auto">
                                                <h2 className="text-[30px] text-center">
                                                      <span className="text-[#00CAD7]">Special  </span><br />Offer
                                                </h2>
                                                <Image
                                                      src={laptop}
                                                      alt="laptop-image"
                                                      width={200}
                                                      height={240}
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="w-full mt-2 p-3 border border-slate-200 cursor-pointe">
                                    <div className="grid grid-cols-2 gap-2">
                                          <div>
                                                <h2 className="text-[30px]">
                                                      <span className="text-[#C82020]">Special  </span><br />Offer
                                                </h2>
                                                <span className="text-[#000000] text-lg block">
                                                      Nintendo Switch
                                                </span>
                                                <span className="text-[#C82020] text-2xl block">
                                                      Rs.65,208
                                                </span>
                                                <span className="text-[#000000] text-base block">
                                                      Rs.<span className="line-through">66,000</span>
                                                </span>
                                                <span className="text-[#0AAEB9] text-base block">
                                                      Already Sold: 6 
                                                </span>
                                                <span className="text-[#0AAEB9] text-base block">
                                                      Available: 30
                                                </span>
                                          </div>
                                          <div className="mx-auto">
                                                <div className="flex justify-center">
                                                      <span className="w-24 h-24 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1]">
                                                            Save<br />10%
                                                      </span>
                                                </div>
                                                <Image
                                                      src={airpod}
                                                      alt="airpod-image"
                                                      width={200}
                                                      height={240}
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="w-full mt-2 p-3 border border-slate-200 cursor-pointer">
                              <div className="relative">
                                    <h2 className="text-[30px] absolute top-0 z-10">
                                          <span className="text-[#C82020]">Special  </span><br />Offer
                                    </h2>
                                    <Image
                                          src={clock}
                                          alt="clock-image"
                                          width={350}
                                          height={240}
                                          className="absolute top-0 right-[10px] z-0"
                                    />
                                    <div className="w-36 h-36 rounded-full absolute top-0 right-0 flex items-center justify-center text-3xl text-center text-white bg-gradient-to-r from-[#FF512F] to-[#DD2476]">
                                          Save<br />10%
                                    </div>
                              </div>
                              <span className="text-[#000000] text-lg block mt-[438px] max-xl:mt-[430px]">
                                    Nintendo Switch Console
                              </span>
                              <span className="text-[#D22727] text-2xl">
                                    Rs.65,208
                              </span>
                              <span className="text-[#000000] text-base ml-5">
                                    Rs.<span className="line-through">66,000</span>
                              </span>
                              <br />
                              <span className="text-[#0AAEB9] text-base">
                                    Already Sold: 6 
                              </span>
                              <span className="text-[#0AAEB9] text-base ml-20">
                                    Available: 30
                              </span>
                        </div>
                        <div>
                              <div className="w-full mt-2 p-3 border border-slate-200 cursor-pointe">
                                    <div className="grid grid-cols-2 gap-2">
                                          <div>
                                                <span className="text-[#000000] text-lg block">
                                                      Nintendo Switch <br />Console
                                                </span>
                                                <span className="text-[#14B1F0] text-2xl block">
                                                      Rs.65,208
                                                </span>
                                                <span className="text-[#000000] text-base block mb-2">
                                                      Rs.<span className="line-through">66,000</span>
                                                </span>
                                                <div className="w-32 px-5 py-3 flex items-center justify-center text-2xl bg-gradient-to-r from-[#EECFCC] to-[#EECFCC]">
                                                      Save<br />10%
                                                </div>
                                          </div>
                                          <div className="mx-auto">
                                                <h2 className="text-[30px] text-right">
                                                      <span className="text-[#034E53]">Special  </span><br />Offer
                                                </h2>
                                                <Image
                                                      src={cloth}
                                                      alt="cloth-image"
                                                      width={154}
                                                      height={150}
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="w-full mt-2 p-3 border border-slate-200 cursor-pointe">    
                                    <div className="relative">
                                          <h2 className="text-[30px] absolute top-0 z-10">
                                                <span className="text-[#C82020]">Special  </span><br />Offer
                                          </h2>
                                          <Image
                                                src={bigLaptop}
                                                alt="bigLaptop-image"
                                                width={200}
                                                height={240}
                                                className="absolute top-0 lg:left-[100px] right-[100px] z-0"
                                          />
                                          <div className="w-36 h-36 rounded-full absolute top-0 right-0 flex items-center justify-center text-3xl text-center bg-gradient-to-r from-[#F09819] to-[#EDDE5D]">
                                                Save<br />10%
                                          </div>
                                    </div>
                                    <span className="text-[#000000] text-lg block mt-[190px]">
                                          Nintendo Switch Console
                                    </span>
                                    <span className="text-[#B8A023] text-2xl">
                                          Rs.65,208
                                    </span>
                                    <span className="text-[#000000] text-base ml-5">
                                          Rs.<span className="line-through">66,000</span>
                                    </span>
                                    <br />
                                    <span className="text-[#C82020] text-base">
                                          Already Sold: 6 
                                    </span>
                                    <span className="text-[#C82020] text-base ml-20">
                                          Available: 30
                                    </span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BestDeals;