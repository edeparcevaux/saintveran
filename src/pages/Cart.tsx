import { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkoutCart } from "../redux/slices/CartSlice";

import toast from "react-hot-toast";
import {useUnit} from "effector-react/compat";
import {cartStore} from "../state/cart/CartStore";
import {setCart} from "../state/cart/CartEvent";
import CartCard2 from "../components/card/CartCard2";
import {Button, Divider} from "antd";

const Cart = () => {
  const cart = useUnit(cartStore);
  const bottleCart = cart.map(s => s.bottle)
  const total1 = cart.reduce((sum, item) => sum + item.bottle.price * item.numberBottleCase * 6, 0);

  const [total, setTotal] = useState(0);
  
  const navigate = useNavigate();
  useEffect(() => {
    setTotal(
        bottleCart.reduce((acc, curr) => acc + curr.retail_price_cents * curr.qty, 0)
    );
  }, [cart]);

  const checkout = () => {
    toast.success("Order Placed Successfully");
    localStorage.removeItem("localCart");
    setCart([])
    navigate("/");
  };
  return (
      <div className="cartPage">
        <h2>Votre panier</h2>
        {bottleCart.length === 0 ?
            <div className="min-w-[320px] md:min-w-[1280px] md:max-h-[100px] flex justify-center">
              <div className="flex flex-col justify-around gap-y-4 md:gap-y-10">
                <div className="">
                  <h1 className="text-4xl dark:text-white md:text-6xl font-semibold">
                    Cart is Empty !!
                  </h1>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#2a2a2a] w-[200px] text-white p-4 rounded-md cursor-pointer hover:bg-black">
                    <Link to="/explore">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>

            : <>
            <Button type="link">Désélectionner tous les éléments</Button>
          <Divider/>

        {cart.map((cartItem) => (
          <CartCard2 key={cartItem.bottle.id} item={cartItem}/>
  ))}


  <Divider/>
  <div className="summaryBox">
    <span>Sous-total ({cart.length} articles) :</span>
    <span className="total">{total1.toFixed(2).replace(".", ",")} €</span>
  </div>

  <Button type="primary" size="large" className="checkoutBtn">
    Passer la commande
  </Button>
</>
        }</div>)

  
};

export default Cart;
