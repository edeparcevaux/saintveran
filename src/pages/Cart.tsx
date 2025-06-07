import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import {useUnit} from "effector-react/compat";
import {cartStore} from "../state/cart/CartStore";
import {setCart} from "../state/cart/CartEvent";
import CartCard from "../components/card/CartCard";
import {Button, Divider} from "antd";

const Cart = () => {
  const cart = useUnit(cartStore);
  const bottleCart = cart.map(s => s.bottle)


  const total = cart.reduce(
      (sum, item) => sum + item.bottle.price * item.numberBottleCase * 6,
      0
  );


  
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTotal(
  //       bottleCart.reduce((acc, curr) => acc + curr.retail_price_cents * curr.qty, 0)
  //   );
  // }, [cart]);

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
            <div>
              <div >
                <div >
                  <h1 >
                    Cart is Empty !!
                  </h1>
                </div>
                <div >
                  <button >
                    <Link to="/explore">Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>

            : <>
            <Button type="link">Désélectionner tous les éléments</Button>
          <Divider/>

        {cart.map((cartItem) => (
          <CartCard key={cartItem.bottle.id} item={cartItem}/>
  ))}


  <Divider/>
  <div className="summaryBox">
    <span>Sous-total ({cart.length} articles) :</span>
    <span className="total">{total.toFixed(2).replace(".", ",")} €</span>
  </div>

  <Button type="primary" size="large" className="checkoutBtn">
    Passer la commande
  </Button>
</>
        }</div>)

  
};

export default Cart;
