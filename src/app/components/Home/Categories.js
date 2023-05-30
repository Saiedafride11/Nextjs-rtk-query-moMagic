"use client";
import { useGetCategoriesQuery } from "@/redux/api/productsApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import categoriesImage1 from "../../../assets/categories/01.png";
import categoriesImage2 from "../../../assets/categories/02.png";
import categoriesImage3 from "../../../assets/categories/03.png";
import categoriesImage4 from "../../../assets/categories/04.png";

const Categories = () => {
      const [widths, setWidths] = useState(1600);
      const { data:categories, isLoading, isError, isFetching } = useGetCategoriesQuery(null);

      const categoriesData = [
            { "id": 1, "img": categoriesImage1, "cateName": ( isLoading | isError | isFetching) ? "Loading..." : categories[0] },
            { "id": 2, "img": categoriesImage2, "cateName": ( isLoading | isError | isFetching) ? "Loading..." : categories[1] },
            { "id": 3, "img": categoriesImage3, "cateName": ( isLoading | isError | isFetching) ? "Loading..." : categories[2] },
            { "id": 4, "img": categoriesImage4, "cateName": ( isLoading | isError | isFetching) ? "Loading..." : categories[3] },
      ];
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
            <section className="categories-section">
                  <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto border-b-[.5px] border-gray-300">
                        <Swiper 
                              spaceBetween={50}
                              slidesPerView={`${widths < 1500 ? ( widths < 1200 ? ( widths < 600 ? 1 : 2 ) : 3 ) : 4 }`}
                              navigation={true}
                              modules={[Navigation]}
                              className="mySwiper"
                        >
                             {categoriesData?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                          <div className="relative w-full">
                                                <Image src={item?.img} className="w-full" alt="logo-image" />

                                                <div className="w-[98%] py-2 bg-white drop-shadow-lg absolute top-[70%] left-[-10px]">
                                                      <div className="flex flex-row justify-around items-center">
                                                            <h1 className="text-2xl capitalize">
                                                                  {item.cateName}
                                                            </h1>
                                                            <span className="text-[#14B1F0]">
                                                                  Shop
                                                            </span>
                                                            <span className="absolute top-[-10px] left-0 border-t-[10px] border-t-transparent border-r-[12px] border-r-[#555]"></span>
                                                      </div>
                                                </div>
                                          </div>
                                    </SwiperSlide>
                             ))}
                        </Swiper> 
                  </div>
            </section>
      );
};

export default Categories;