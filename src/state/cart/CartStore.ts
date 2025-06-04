import {createStore} from "effector";
import {CartDto} from "./dto/cart.dto";
import {setCart} from "./CartEvent";

export const cartStore = createStore<CartDto>(
    {
        bottles: [],
    },
);

cartStore.on<CartDto>(
    setCart,(state, payload) => payload,
);
