import {useState} from "react";

import {data} from "../assets/data";
import BottleCard from "../components/BottleCard";
import {BottleResponseDto} from "../state/bottle/dto/BottleResponseDto";

const Explore = () => {
  const bottle = data.bottle as BottleResponseDto[];
  const [cart, setCart] = useState<string[]>([])
  const filteredItems = bottle.filter(
    (s) => s.price !== null && s.img !== null
  );

  const items = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  return (
    <div className="">
      <div className="w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto ">
        {items.map((bottle, idx) => (
          <BottleCard key={bottle.id} bottle={bottle}  setCard={setCart}/>
        ))}
      </div>
    </div>
  );
};

export default Explore;
