async function getProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data.product;
}

export default function Product(){
    const product =  getProducts();
    console.log(product);
    console.log("Hello");
    return (
        <div></div>
    )
}