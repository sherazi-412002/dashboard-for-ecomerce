"use client"
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export type Product = {
    _id: number;
    title: string;
    imageUrl: string;
    price: number;
    tags: string[];
    dicountPercentage: number;
    description: string;
    isNew: boolean;
    slug:string
  };

function AllProducts() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const data: Product[] = await client.fetch(`*[_type=="product"]{
                _id,
                title,
                price,
                tags,
                dicountPercentage,
                description,
                isNew,
                "imageUrl": productImage.asset->url
              }`);
          setProducts(data);
        } catch (error) {
          console.error("Sanity fetch error:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
     
      <div className='ml-[300px] grid grid-cols-4 gap-2'>
         {products.map((product:Product)=>(
            <>

              {/* <div className='flex gap-5 mb-20'>
                <Image src={product.imageUrl} alt={product.title} height={1000} width={1000} className='h-10 w-10 rounded-2xl'/>
                {product.title}
                {product.price}
                


              </div> */}
       <div key={product._id}> 

        <div
          className="relative w-[220px] h-[280px]  border border-gray-200 shadow-lg overflow-hidden group"
        >
          {/* Discount or New Tag */}
          {product.price && product.dicountPercentage && (
            <div className="absolute top-[24px] right-[24px] bg-[#E97171] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
              {product.dicountPercentage / product.price <= 0.5 ? '-50%' : '-30%'}
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-[24px] right-[24px] bg-[#2EC1AC] w-[48px] h-[48px] text-white text-sm font-semibold py-[12px] px-2 rounded-[50%]">
              New
            </div>
          )}

          {/* Product Image */}
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={285}
            height={301}
            className="w-full h-28 object-cover"
          /><div className="p-4 flex flex-col">
          <h3 className="text-[24px] font-bold mb-2">{product.title}</h3>
          <p className="text-[16px] text-gray-500 mb-4 line-clamp-1">{product.description}</p>

          {/* Price Section */}
          <div className="flex items-center gap-4">
            <span className="text-[20px] font-semibold text-gray-900">Rp {product.price.toFixed(2)}</span>
            {product.dicountPercentage ? (
              <span className="text-sm text-gray-400 line-through">Rp {product.dicountPercentage.toFixed(2)}</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    </>
    ))}
          
        
      </div>

    </>
  )
}

export default AllProducts