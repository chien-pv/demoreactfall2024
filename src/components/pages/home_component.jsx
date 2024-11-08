import SearchForm from "../search";
import ItemProduct from "./item_product";
import { useState } from "react";
function Home() {
  let [count, setCount] = useState(0);

  const products = [
    {
      name: "Iphone 11",
      color: "red",
      category: "Apple",
      price: "2000$",
      status: true,
    },
    {
      name: "Iphone 12",
      color: "black",
      category: "Apple",
      price: "2000$",
      status: true,
    },
    {
      name: "Iphone 13",
      color: "orange",
      category: "Apple",
      price: "2000$",
      status: true,
    },
    {
      name: "Iphone 14",
      color: "blue",
      category: "Apple",
      price: "2000$",
      status: true,
    },
  ];

  let datas = products.map((item, index) => {
    return <ItemProduct key={index} {...item} />;
  });

  return (
    <>
      <div className="relative overflow-x-auto">
        <SearchForm />
        <br />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{datas}</tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
