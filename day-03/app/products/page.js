import ShowButton from "./ShowPrice";

async function fetchList() {
  const respone = await fetch("https://dummyjson.com/products");
  const data = await respone.json();
  return data.products;
}

export default async function Product() {
  const list = await fetchList();
  return (
    <div className="flex flex-col gap-4 px-8 py-4">
      <h1 className="text-5xl text-center font-semibold">Product List</h1>
      {list.map((item, idx) => {
        return (
          <div key={idx} className="flex gap-8">
            <p>{item.title}</p>
            <ShowButton price={item.price} />
          </div>
        );
      })}
    </div>
  );
}
