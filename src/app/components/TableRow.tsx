import { ProductProps } from "@/services/products";
import Button from "./Button";
import Available from "./Available";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

import { FaStar } from "react-icons/fa6";

export default function TableRow({ product }: { product: ProductProps }) {
  const { image, name, next, available, rating } = product;
  return (
    <tr className="border-b-2 relative">
      <td className="flex items-center gap-1 sm:p-0">
        <img
          className="mt-2"
          src={image}
          width={isMobile ? 85 : 50}
          height={isMobile ? 85 : 50}
          alt="Picture of the author"
        />
        <BrowserView>
          <p className="p-4"> {name}</p>
        </BrowserView>
      </td>
      <MobileView>
        <td className="flex">
          <p className="p-4"> {name}</p>
        </td>
      </MobileView>
      <td className=" p-4">{isMobile ? "Next reservation: " + next : next}</td>
      <td className="p-4 sm:absolute p-0 left-0 top-0">
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
