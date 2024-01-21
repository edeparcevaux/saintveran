import { FunctionComponent } from "react";
import { Card, InputNumber } from "antd";
import { BottleResponseDto } from "../state/dto/BottleResponseDto";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";

interface CardBottleProps {
  bottle?: BottleResponseDto;
  onClick?: () => any;
  className?: string;
  title?: string;
}

const CardBottle: FunctionComponent<CardBottleProps> = ({
  bottle,
  onClick,
  className = "",
  title,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(bottle));
    toast.success("Added to cart");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  return (
    <Card onClick={onClick} className={className} title={title}>
      <div>
        <main className="grid place-items-center min-h-[1300px] md:min-h-screen bg-gray-50 dark:bg-[#121212]">
          <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015]  rounded-xl shadow-xl hover:shadow-2xl  w-3/4 md:max-w-2xl">
            <div className="text-gray-500 dark:text-white flex flex-col justify-between">
              <img
                src={bottle.img}
                alt="shoe"
                className="mx-auto md:h-[350px] md:w-[350px] object-cover"
              />
              <div className="">
                <small className="uppercase">Choisir quantité</small>
                <div className="flex flex-wrap md:flex-nowrap gap-1">
                  <InputNumber></InputNumber>
                </div>
              </div>
            </div>
            <main className="text-gray-500 dark:text-white">
              <h3 className="uppercase text-black dark:text-white text-2xl font-semibold">
                {bottle.name}
              </h3>
              <h3 className="text-2xl font-semibold mb-7 dark:text-white">
                {bottle.price} €
              </h3>
              <small className="text-black  dark:text-white text-sm">
                {bottle.description}
              </small>
              <div className="flex gap-0.5 mt-4">
                <button
                  id="addToCartButton"
                  className="bg-[#2a2a2a] hover:bg-black focus:outline-none transition text-white uppercase px-8 py-3"
                  onClick={add}
                >
                  add to cart
                </button>
                <button
                  id="likeButton"
                  className="bg-[#2a2a2a] hover:bg-black focus:outline-none transition text-white uppercase p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-suit-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                  </svg>
                </button>
              </div>
            </main>
          </section>
        </main>
      </div>
    </Card>
  );
};

export default CardBottle;
