import { ProductProps } from "@/services/products";
import Button from "./Button";
import Available from "./Available";

import { FaStar } from "react-icons/fa6";

export default function TableRow({ product }: { product: ProductProps }) {
  const { image, name, next, available, rating } = product;
  return (
    <tr className="border-b-2">
      <td className="flex items-center gap-1">
        <img src={image} width={50} alt="Picture of the author" />
        <p className="p-4"> {name}</p>
      </td>
      <td className=" p-4">{next}</td>
      <td className="p-4">
        <Available status={available} />
      </td>
      <td className="flex items-center p-4">
        {[...Array(rating)].map((_, index) => (
          <FaStar size={20} key={index} />
        ))}
      </td>
      <td className="p-4">
        <Button />
      </td>
    </tr>
  );
}
