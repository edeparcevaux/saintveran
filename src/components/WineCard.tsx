import toast from "react-hot-toast";
import {Button, Card} from "antd";
import {FunctionComponent, useState} from "react";
import BottleDetailModal from "./views/BottleDetailModal";
import {BottleResponseDto} from "../state/bottle/dto/BottleResponseDto";
import {cartStore} from "../state/cart/CartStore";
import {useUnit} from "effector-react";
import {setCart} from "../state/cart/CartEvent";
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export interface BottleCardProps{
  bottle : BottleResponseDto
}
//Card Item
const WineCard: FunctionComponent<BottleCardProps> = ({ bottle}) => {

  const carts = useUnit(cartStore);
  const img = bottle.img;
  const bottlePrice = bottle.price;
  const casePrice = bottlePrice * 6;
  const desc = bottle.description;
  const id = bottle.id;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [quantity, setQuantity] = useState(1);



  const increment = () => {
    setQuantity(quantity+1)
  }
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };



  const add = () => {
    const existingCart = carts.find(cart => cart.bottle.id === bottle.id);

    if (!existingCart) {
      setCart([...carts, { bottle, numberBottleCase: quantity }]);
    } else {
      const updatedCarts = carts.map(cart =>
          cart.bottle.id === bottle.id
              ? { ...cart, numberBottleCase: cart.numberBottleCase + quantity }
              : cart
      );
      setCart(updatedCarts);
    }

    toast.success("Added to cart");
  };

  return (
      <>
    <Card  className="cardContainer">
        <div className=" flex flex-col gap-6">
          <div onClick={() => setIsOpen(true)} className="coverImage">
            <img
                src={img}
                width={200}
                height={200}
                alt="bottle"
            />
            <Button
                onClick={() => setIsOpen(true)}
                className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse"
            >
              preview
            </Button>
          </div>
          <span className="title">
            {bottle.name}
          </span>
          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
            {desc.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
          <div className="priceBox"
          >
            <span className="bottlePrice">
              {bottlePrice} €
            </span>
            <br/>
            <span className="casePrice">
              par btl | {casePrice.toFixed(2).replace(".", ",")} € / caisse de 6 btl
            </span>
          </div>

          <div className="counterRow">
            <div className="counterBox">
                <Button
                    icon={<MinusOutlined/>}
                    size="small"
                    type="text"
                    onClick={decrement}
                    disabled={quantity === 1}
                />
                <span className="counterQty">{quantity} caisse{quantity > 1 ? "s" : ""}</span>
                <Button
                    icon={<PlusOutlined/>}
                    size="small"
                    type="text"
                    onClick={increment}
                />
              </div>

              <Button icon={<ShoppingCartOutlined/>} className="addToCart" onClick={add}>
                {"Ajouter au panier"}
              </Button>
            </div>
        </div>


    </Card>
        <BottleDetailModal
            bottle={bottle}
            open={isOpen}
            onCancel={() => setIsOpen(false)}
        />
      </>
  );
};

export default WineCard;
