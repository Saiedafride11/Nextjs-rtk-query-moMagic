'use client';
import { useGetProductsQuery } from '@/redux/api/productsApi';
import Product from '../components/utils/Product';

const Products = () => {
      const { data:products, isLoading, isError, isFetching } = useGetProductsQuery(null);
      return (
            <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
                  <div className="w-full h-auto grid 2xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
                        {     
                              ( isLoading | isError | isFetching | products?.length === 0) ? 
                              Array.from(Array(30)).map((_, index) => (
                                    <div key={ index }className="w-full h-[292px] bg-slate-200 mt-2 p-3 mr-2 md:mr-0 box-border border border-slate-200"></div>
                              ))
                              :
                              products?.map(product => <Product key={product.id} product={product}></Product>)
                        }
                  </div>
            </div>
      );
};

export default Products;