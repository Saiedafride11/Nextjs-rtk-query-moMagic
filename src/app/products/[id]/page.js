"use client";
import Product from "@/app/components/utils/Product";
import { useGetCategoryByNameQuery, useGetProductByIdQuery } from "@/redux/api/productsApi";
import { addToCart } from "@/redux/slice/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import buyNowImage from "../../../assets/order-now-button.gif";

const ProductDetails = ({params}) => {
      const dispatch = useDispatch();
      const [quantity, setQuantity] = useState(1);
      const [relatedProducts, setRelatedProducts] = useState([]);
      const { data:product, isLoading, isError, isFetching } = useGetProductByIdQuery(params.id);
      const { data:categoryProducts, isLoading: isProductsLoading, isError:isProductsError, isFetching:isProductsFetching} = useGetCategoryByNameQuery(product?.category);

      useEffect( () => {
            const newRelatedProducts = categoryProducts?.filter(pd => pd.id != params.id);
            setRelatedProducts(newRelatedProducts);
      }, [categoryProducts, params.id])


      const handleAddToCart = (product, quantity) => {
            dispatch(addToCart({product, quantity}));
            toast.success("Product was added successfully!", {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 5000,
            });
            setQuantity(1);
      }
      return (
            <>    
                  
                  <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                        {     
                              (isLoading | isError | isFetching) ? 
                              <div className="w-full h-screen bg-slate-200 shadow-lg shadow-gray-300/80 p-5">Loading...</div>
                              :
                              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 box-border shadow-lg shadow-gray-300/80">
                                    <div className="p-5">
                                          <div className="h-full flex items-center justify-center">
                                                <Image
                                                      src={product?.image}
                                                      alt="arrivals-image"
                                                      width={200}
                                                      height={240}
                                                />
                                          </div>
                                    </div>
                                    <div className="p-5">
                                          <span className="text-[#034E53] text-base block h-6 line-clamp-1">
                                                {product?.title}
                                          </span>
                                          <div className="flex flex-wrap items-center">
                                                <span className="text-[#697475] text-base line-through">
                                                      RS {product?.price}
                                                </span>
                                                {/* Just offer 20% */}
                                                <span className="text-[#0AAEB9] text-lg ml-2">
                                                      RS { parseFloat( product?.price - (( product?.price * 20 ) / 100)).toFixed(2) }
                                                </span>
                                          </div>
                                          <div className="flex flex-wrap items-center">
                                                <span className="text-[#697475] text-base">
                                                      Categories: 
                                                </span>
                                                <span className="text-[#0AAEB9] text-lg ml-2 capitalize">
                                                      { product?.category }
                                                </span>
                                          </div>
                                          <div className="flex flex-wrap items-center">
                                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)} className="w-10 border-2 border-[#034E53] text-[30px] rounded-sm leading-none">-</button>
                                                <h2 className="p-3 text-[20px]">{quantity}</h2> 
                                                <button onClick={() => setQuantity(quantity + 1)} className="w-10 border-2 border-[#034E53] text-[30px] rounded-sm leading-none">+</button>
                                          </div>
                                          <div className="flex flex-wrap items-center">
                                                <button onClick={() => handleAddToCart(product, quantity)} className="bg-[#15ADB7] text-sm text-white w-40 py-2 mb-5 block rounded-md mr-2">
                                                      Add to cart
                                                </button>
                                                <Link href="/cart">
                                                      <button onClick={() => handleAddToCart(product, quantity)} className="bg-red-600 text-sm text-white w-40 py-2 mb-5 block rounded-md">
                                                            Buy Now
                                                      </button>
                                                </Link>
                                          </div>
                                          <div onClick={() => alert("This functionality coming soon...")} className="box-border shadow-lg shadow-gray-300/80 hover:bg-[#15ADB7] cursor-pointer mb-5">
                                                <Image
                                                      src={buyNowImage}
                                                      alt="button-image"
                                                      width={200}
                                                      height={240}
                                                />
                                          </div>
                                          <span className="text-[#697475] text-sm">
                                                {product?.description} 
                                          </span>
                                    </div>
                              </div>
                        }

                        <div className="flex flex-wrap items-center justify-between mt-16">
                              <h2 className="w-60 text-[30px]">
                                    <span className="text-[#00CAD7]">Related </span>Products
                              </h2>

                              <h3 className="text-[18px] text-[#00CAD7] uppercase ml-0 sm:ml-10">{product?.category ? product?.category : "Loading..."}</h3>
                        </div>
                        <div className="w-full h-auto grid 2xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
                              {     
                                    ( isProductsLoading | isProductsError | isProductsFetching | categoryProducts?.length === 0) ? 
                                    Array.from(Array(6)).map((_, index) => (
                                          <div key={ index }className="w-full h-[292px] bg-slate-200 mt-2 p-3 mr-2 md:mr-0 box-border border border-slate-200"></div>
                                    ))
                                    :
                                    relatedProducts?.map(product => <Product key={product.id} product={product}></Product>)
                              }
                        </div>
                  </div>
            </>
      );
};

export default ProductDetails;
