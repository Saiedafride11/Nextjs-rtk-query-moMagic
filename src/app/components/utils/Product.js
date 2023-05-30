"use client";
import { addToCart } from '@/redux/slice/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

const Product = ({product}) => {
      const {id, title, image, price } = product;
      const carts = useSelector((state) => state.cartReducer.carts);
      const dispatch = useDispatch();

      const handleAddToCart = (product, quantity) => {
            const existing = carts.find(pd => pd.id === id);
            if(existing){
                  toast.error("Sorry, This Product has already been added", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 5000,
                  });
            }
            else{
                  dispatch(addToCart({product, quantity}));
                  toast.success("Product was added successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 5000,
                  });
            }
      }
      return (
            <div className="w-full mt-2 p-3 mr-2 md:mr-0 box-border bg-white border border-slate-200 cursor-pointer transition hover:scale-105 hover:border-0 hover:shadow-lg hover:shadow-gray-300/80">
                  <Link href={`/products/${id}`}>
                        <span className="text-black text-sm block">
                              Bin Bakar Electronics
                        </span>
                        <span className="text-[#034E53] text-base block h-6 line-clamp-1">
                              {title}
                        </span>
                        <div className="mb-2 py-3 flex align-center justify-center h-[150px]">
                              <Image
                                    src={image}
                                    alt="arrivals-image"
                                    width={100}
                                    height={100}
                                    className="w-auto"
                              />
                        </div>
                              
                        <div className="flex flex-row justify-center items-center">
                              <span className="text-[#697475] text-base line-through">
                                    RS {price}
                              </span>
                              {/* Just offer 20% */}
                              <span className="text-[#0AAEB9] text-lg ml-2">
                                    RS { parseFloat( price - (( price * 20 ) / 100)).toFixed(2) }
                              </span>
                        </div>
                  </Link>
                  <button 
                        style={{cursor: carts?.some(cart => cart.id === id) ? "not-allowed" : "pointer"}}
                        className="bg-[#15ADB7] text-sm text-white w-full py-2"
                        onClick={() => handleAddToCart(product, 1)}
                        disabled={carts?.some(cart => cart.id === id) ? true : false}
                  >
                        Add to cart
                  </button>
            </div>
      );
};

export default Product;