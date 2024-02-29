"use client";
import { useEffect, useState } from "react";
import { ProductProps, getProducts } from "@/services/products";
import TableSkeleton from "./components/TableSkeleton";
import TableRow from "./components/TableRow";

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((product) => {
        setProducts(product);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen p-8">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-50 border-b-2">
              <th className="text-left p-4 text-xs text-gray-500 font-semibold">
                Car
              </th>
              <th className="text-left p-4 text-xs text-gray-500 font-semibold">
                Next Reservation
              </th>
              <th className="text-left p-4 text-xs text-gray-500 font-semibold">
                Status
              </th>
              <th className="text-left p-4 text-xs text-gray-500 font-semibold">
                Rating
              </th>
              <th className="text-left p-4 text-xs text-gray-500 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <TableRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
        {isLoading && (
          <div className="">
            <TableSkeleton />
          </div>
        )}
      </div>
    </>
  );
}
