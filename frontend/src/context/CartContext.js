import AsyncStorage from "@react-native-async-storage/async-storage";
import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => { // lowercase 'children'
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        loadCartItem();
    }, []);

    const loadCartItem = async () => {
        let carts = await AsyncStorage.getItem("carts");
        carts = carts ? JSON.parse(carts) : [];
        setCarts(carts);
        totalSum(carts);
    }

    const addToCart = async (item) => {
        const itemExist = carts.findIndex((cart) => cart.id === item.id);
        if (itemExist === -1) {
            const newCartItem = [...carts, item];
            await AsyncStorage.setItem("carts", JSON.stringify(newCartItem));
            setCarts(newCartItem);
            totalSum(newCartItem);
        }
    }

    const deleteItemFromCart = async (item) => {
        const newCartItem = carts.filter((cart) => cart.id !== item.id);
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItem));
        setCarts(newCartItem);
        totalSum(newCartItem);
    }

    const totalSum = (carts) => {
        const totalSum = carts.reduce((amount, item) => amount + item.sale_price, 0);
        setTotalPrice(totalSum);
    }

    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteItemFromCart
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}
