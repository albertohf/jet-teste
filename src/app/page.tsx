"use client";
import { useEffect, useState } from "react";
import { ProductProps, getProducts } from "@/services/products";
import TableSkeleton from "./components/TableSkeleton";
import TableRow from "./components/TableRow";
import { BrowserView, MobileView } from "react-device-detect";
import TableSkeletonMobile from "./components/TableSkeletonMobile";
import TableHead from "./components/TableHead";

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
        <table className="table-auto w-full rounded shadow-lg">
          <TableHead />
          <tbody className="">
            {products.map((product) => (
              <TableRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
        {isLoading && (
          <>
            <BrowserView>
              <TableSkeleton />
            </BrowserView>
            <MobileView>
              <TableSkeletonMobile />
              <TableSkeletonMobile />
            </MobileView>
          </>
        )}
      </div>
    </>
  );
}
