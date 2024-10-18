import { Children, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => { // lowercase 'children'
    const [carts, setCarts] = useState([1, 2, 3]);

    const value = {
        carts
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}
