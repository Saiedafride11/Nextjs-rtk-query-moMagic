'use client';
import { addToCart, clearAllCart, minusToCart, removeToCart } from "@/redux/slice/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
      const dispatch = useDispatch();
      const carts = useSelector((state) => state.cartReducer.carts);
      const [quantity, setQuantity] = useState(1);

        let cartPrice = 0;
        if(!carts){
     
        }
        else{
         for(const product of carts){
             if(!product.quantity){
                 product.quantity = 1;
             }
             cartPrice =  cartPrice + product.price * product.quantity;
         }
      }
      return (
            <>

                  <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                        {
                              carts?.length === 0 ?
                              <div className="w-full h-screen flex items-center justify-center box-border shadow-lg shadow-gray-300/80">
                                    <div>
                                          <span className="text-lg">
                                                There are no items in this cart
                                          </span>
                                          <Link href="/products">
                                                <button className="bg-[#15ADB7] text-sm text-white w-60 py-2 mb-5 block rounded-md">
                                                      Continue Shopping
                                                </button>
                                          </Link>
                                    </div>
                              </div>
                              :
                              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 box-border shadow-lg shadow-gray-300/80">
                                    <div className="p-5">
                                          <div className="flex flex-wrap items-center justify-between border p-2">
                                                <span className="text-xl block">
                                                      Item
                                                </span>
                                                <span className="text-xl block">
                                                      Quantity
                                                </span>
                                          </div>
                                          {
                                                carts?.map(product => (
                                                      <div key={product.id} className="flex flex-wrap items-center justify-between border-b p-2">
                                                            <div className="flex items-center justify-center h-[100px] mr-5">
                                                                  <Image
                                                                        src={product?.image}
                                                                        alt="arrivals-image"
                                                                        width={50}
                                                                        height={50}
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <Link href={`/products/${product?.id}`}>
                                                                        <span className="text-[#0AAEB9] hover:underline hover:decoration-black text-base block h-6 line-clamp-1 w-60 cursor-pointer">
                                                                              {product?.title}
                                                                        </span>
                                                                  </Link>
                                                                  <div className="flex flex-wrap items-center">
                                                                        <span className="text-[#697475] text-base">
                                                                              Categories: 
                                                                        </span>
                                                                        <span className="text-[#0AAEB9] text-sm ml-2 capitalize">
                                                                              { product?.category }
                                                                        </span>
                                                                  </div>
                                                                  <div className="flex flex-wrap items-center">
                                                                        <span className="text-[#697475] text-base">
                                                                              Price: 
                                                                        </span>
                                                                        <span className="text-[#0AAEB9] text-sm mx-2 capitalize">
                                                                              { parseInt(product?.price * product.quantity)}
                                                                        </span>
                                                                        <span className="text-[#697475] text-base">
                                                                              Quantity: 
                                                                        </span>
                                                                        <span className="text-[#0AAEB9] text-sm ml-2 capitalize">
                                                                              { product.quantity}
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                            <div className="flex flex-wrap items-center">
                                                                  <button onClick={() => dispatch(minusToCart({product, quantity}))} className="w-10 border-2 border-[#034E53] text-[30px] rounded-sm leading-none">-</button>
                                                                  <h2 className="p-3 text-[20px]">{product?.quantity}</h2> 
                                                                  <button onClick={() => dispatch(addToCart({product, quantity}))} className="w-10 border-2 border-[#034E53] text-[30px] rounded-sm leading-none">+</button>
                                                                  <button onClick={() => dispatch(removeToCart(product))} className="w-10 border-2 border-red-600 bg-red-600 text-[30px] text-white rounded-sm leading-none ml-5">☓</button>
                                                            </div>
                                                      </div>
                                                ))
                                          }

                                    </div>
                                    <div className="p-5">
                                          <button onClick={() => dispatch(clearAllCart())} className="bg-red-600 text-sm text-white w-60 py-2 mb-5 block rounded-md">
                                                Clear All Cart
                                          </button>
                                          <div className="flex justify-center border py-20">
                                                <div>
                                                      <div className="flex flex-wrap items-center justify-between">
                                                            <span className="text-[#697475] text-base">
                                                                  Price: 
                                                            </span>
                                                            <span className="text-[#0AAEB9] text-2xl ml-2 capitalize">
                                                                  RS { parseInt(cartPrice) }
                                                            </span>
                                                      </div>
                                                      <div className="flex flex-wrap items-center justify-between">
                                                            <span className="text-[#697475] text-base">
                                                                  Discount: 
                                                            </span>
                                                            <span className="text-[#0AAEB9] text-2xl ml-2 capitalize">
                                                                  00
                                                            </span>
                                                      </div>
                                                      <div className="flex flex-wrap items-center justify-between border-b">
                                                            <span className="text-[#697475] text-base">
                                                                  Delivery charges: 
                                                            </span>
                                                            <span className="text-[#0AAEB9] text-2xl ml-2 capitalize">
                                                                  RS 100
                                                            </span>
                                                      </div>
                                                      <div className="flex flex-wrap items-center justify-between mb-3">
                                                            <span className="text-[#697475] text-base">
                                                                  Total: 
                                                            </span>
                                                            <span className="text-[#0AAEB9] text-2xl ml-2 capitalize">
                                                                  RS { parseInt(cartPrice) + 100 }
                                                            </span>
                                                      </div>
                                                      <button className="bg-[#15ADB7] text-sm text-white w-60 py-2 mb-5 block rounded-md" onClick={() => alert("Checkout Coming soon...")}>
                                                            Proceed To Checkout
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        }
                  </div>
            </>
      );
};

export default Cart;