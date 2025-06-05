import { createEvent } from "effector";
import {CartDto} from "./dto/cart.dto";

export const setCart = createEvent<CartDto[]>(
    "SET_CART",
);