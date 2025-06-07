import {FunctionComponent, ReactElement, useState} from "react";
import {CartDto} from "../../state/cart/dto/cart.dto";
import {Button, InputNumber} from "antd";
import { DeleteOutlined} from "@ant-design/icons";
import {setCart} from "../../state/cart/CartEvent";
import {useUnit} from "effector-react";
import {cartStore} from "../../state/cart/CartStore";


interface PageLayoutProps {
    item: CartDto;
};

const CartCard: FunctionComponent<PageLayoutProps> = ({item}) => {
    const cart = useUnit(cartStore)
    const bottle = item.bottle
    const [quantity, setQuantity] = useState<number>(item.numberBottleCase)
    const total = bottle.price*6*quantity


    const onDelete = (bottle) => {
        setCart(cart.filter(s => s.bottle.id !== bottle.id))
    }

    const onChange = (numberBottleCase, bottle) => {
        setQuantity(numberBottleCase)
        const existing = cart.find(item => item.bottle.id === bottle.id);

        let updatedCart: CartDto[];

        if (existing) {
            updatedCart = cart.map(item =>
                item.bottle.id === bottle.id
                    ? { ...item, numberBottleCase }
                    : item
            );
        } else {
            updatedCart = [...cart, { bottle, numberBottleCase }];
        }

        setCart(updatedCart);
    }

return(
    <div className="cartItem" key={bottle.id}>
        <img src={bottle.img} alt={bottle.name} width={80} height={100}/>
        <div className="cartDetails">
            <h5 >{bottle.name}</h5>
            <span className="secondary">En stock</span>
            <div className="cartActions">
                <InputNumber min={1} defaultValue={quantity} value={quantity} onChange={(value) => onChange(value, bottle)}/>
                <Button icon={<DeleteOutlined/>} type="link" onClick={() => onDelete(bottle)}>
                    Supprimer
                </Button>
            </div>
        </div>
        <span className="price">{total.toFixed(2).replace(".", ",")} €</span>
    </div>)
};

export default CartCard;


