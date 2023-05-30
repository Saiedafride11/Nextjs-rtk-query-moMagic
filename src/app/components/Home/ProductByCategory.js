"use client";
import { useGetCategoriesQuery, useGetCategoryByNameQuery } from "@/redux/api/productsApi";
import { useEffect, useState } from "react";
import Product from "../utils/Product";

const ProductByCategory = () => {
      const [selectedCategory, setSelectedCategory] = useState("");
      const { data:categories, isLoading, isError, isFetching } = useGetCategoriesQuery(null);
      const { data:categoryProducts, isLoading: isProductsLoading, isError:isProductsError, isFetching:isProductsFetching} = useGetCategoryByNameQuery(selectedCategory);
      
      useEffect( () => {
            ( isLoading | isError | isFetching) ? setSelectedCategory("") : setSelectedCategory(categories[0])
      }, [categories])

      return (
            <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                   <div className="flex flex-wrap justify-between">
                        <h2 className="w-64 text-[30px]">
                              <span className="text-[#00CAD7]">Category  </span>Products
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
                  <div className="w-full h-auto grid 2xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
                        {     
                              ( isProductsLoading | isProductsError | isProductsFetching | categoryProducts?.length === 0) ? 
                              Array.from(Array(6)).map((_, index) => (
                                    <div key={ index }className="w-full h-[292px] bg-slate-200 mt-2 p-3 mr-2 md:mr-0 box-border border border-slate-200"></div>
                              ))
                              :
                              categoryProducts?.map(product => <Product key={product.id} product={product}></Product>)
                        }
                  </div>
            </div>
      );
};

export default ProductByCategory;