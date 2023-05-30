"use client";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import { useEffect, useState } from "react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from "../utils/Product";

const NewArrivals = () => {
      const [widths, setWidths] = useState(1600);
      const { data:products, isLoading, isError, isFetching } = useGetProductsQuery(null);
     
       // responsive swiper
       useEffect(() => {
            function handleResize (){
                  setWidths(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            return () =>{
                  window.removeEventListener("resize", handleResize);
            };
      }, []);
      return (
            <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                  <h2 className="text-[30px]">
                        <span className="text-[#00CAD7]">New  </span>Arrivals
                  </h2>
                  <Swiper 
                        spaceBetween={50}
                        slidesPerView={`${widths < 1500 ? (widths < 1200 ? ( widths < 768 ? ( widths < 420 ? 1 : 2 ) : 3 ) : 4 ) : 6 }`}
                  >
                        {     
                              ( isLoading | isError | isFetching | products?.length === 0) ? 
                              Array.from(Array(6)).map((_, index) => (
                                    <SwiperSlide key={index}>
                                          <div className="w-full h-[300px] bg-slate-200 mt-2 p-3 mr-2 md:mr-0 box-border border border-slate-200"></div>
                                    </SwiperSlide>
                              ))
                              :
                              products?.slice(0, 10)?.map((product) => (
                                    <SwiperSlide key={product?.id}>
                                          <Product product={product}></Product>
                                    </SwiperSlide>
                              ))
                        }
                  </Swiper>
            </div>
      );
};

export default NewArrivals;