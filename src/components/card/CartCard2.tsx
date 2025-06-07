import {FunctionComponent, ReactElement} from "react";
import {CartDto} from "../../state/cart/dto/cart.dto";
import {Button, InputNumber} from "antd";
import { DeleteOutlined} from "@ant-design/icons";
import {setCart} from "../../state/cart/CartEvent";
import {useUnit} from "effector-react";
import {cartStore} from "../../state/cart/CartStore";


interface PageLayoutProps {
    item: CartDto;
};

const CartCard2: FunctionComponent<PageLayoutProps> = ({item}) => {
    const cart = useUnit(cartStore)
    const bottle = item.bottle
    const quantity = item.numberBottleCase
    const total = bottle.price*6*quantity


    const onDelete = (bottle) => {
        setCart(cart.filter(s => s.bottle.id !== bottle.id))
    }

    // const onChange = (numberBottleCase1, bottle) => {
    //     const bottleToChange = cart.filter(s => s.bottle.id !== bottle.id)
    //     setCart([...bottleToChange, {bottle: bottle, numberBottleCase: numberBottleCase1}])
    //     console.log(cart)
    // }

return(
    <div className="cartItem" key={bottle.id}>
        <img src={bottle.img} alt={bottle.name} width={80} height={100}/>
        <div className="cartDetails">
            <h5 >{bottle.name}</h5>
            <span className="secondary">En stock</span>
            <div className="cartActions">
                <InputNumber min={1} defaultValue={quantity}/>
                <Button icon={<DeleteOutlined/>} type="link">
                    Supprimer
                </Button>
            </div>
        </div>
        <span className="price">{total.toFixed(2).replace(".", ",")} €</span>
    </div>)
};

export default CartCard2;


