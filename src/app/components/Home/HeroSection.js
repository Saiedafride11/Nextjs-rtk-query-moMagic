import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSection = () => {
      return (
            <section className="hero-section">
                  <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                        <Swiper
                              slidesPerView={1}
                              pagination={{
                                    clickable: true,
                              }}
                              modules={[Pagination]}
                        >
                             {Array.from(Array(3))?.map((_, index) => (
                                    <SwiperSlide key={index}>
                                          <div className="py-[60px]">
                                                <h1 className="text-[50px] text-black leading-none">Shop <span className="text-[#0AAEB9]">Computer <br /> & experience</span></h1>
                                                <p className="text-sm text-black w-full md:w-[420px] my-1">
                                                      You cannot inspect quality into the product; it is already there.
                                                      I am not a product of my circumstances. I am a product of my decisions.
                                                </p>
                                                <button className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white py-2 px-6 rounded">
                                                      View More
                                                </button>
                                          </div>
                                    </SwiperSlide>
                             ))}
                        </Swiper> 
                  </div>
            </section>
      );
};

export default HeroSection;