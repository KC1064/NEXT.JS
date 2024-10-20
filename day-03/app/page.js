"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);

  const fetchData = async()=>{
    const respone = await fetch('https://dummyjson.com/products')
    const data = await respone.json();
    console.log(data);
    setProduct(data.products);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="text-center py-5 px-3">
      <h1>Product List</h1>
      <ul>
        {
          product.map((item,idx)=>{
            return (
              <div className="flex flex-col gap-2 p-1">
              <li className="text-xl text-left border-2 border-white" key={idx}>{item.title}</li>
              <p className="text-sm text-left">{item.description}</p>
              </div>
            )
          })
        }
      </ul>
     
    </div>
  );
}
