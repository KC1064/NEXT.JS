import Image from "next/image";
import Link from "next/link";


async function getProducts() {
  const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
  const data = await response.json();
  return data.products;  // Assuming the API response has a `products` array.
}

export default function Home() {
  return (
    <div></div>
  )
}

