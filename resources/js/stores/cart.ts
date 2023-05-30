import { atom, useAtom, useAtomValue } from "jotai";
import { TProduct } from "./products";

type TCartItem = {
    product: TProduct;
    qty: number;
};

const cartAtome = atom<TCartItem[]>([]);
const cartTotalAtome = atom((get) => {
    return get(cartAtome).reduce((prev, current) => {
        return prev + current.product.price * current.qty;
    }, 0);
});

const cartTotalItemsAtome = atom((get) => {
    return get(cartAtome).reduce((prev, current) => {
        return prev + current.qty;
    }, 0);
});

export function useCart(defaultValue?: TCartItem[]) {
    const [cartItems, setCartItems] = useAtom(cartAtome);
    const cartTotalPrice = useAtomValue(cartTotalAtome);
    const cartTotalQty = useAtomValue(cartTotalItemsAtome);

    if (defaultValue !== undefined) {
        setCartItems(defaultValue);
    }

    const incrementItemQty = (index: number) => {
        const updatedItems = [...cartItems];
        updatedItems[index].qty += 1;
        setCartItems(updatedItems);
    };
    const decrementItemQty = (index: number) => {
        if (cartItems[index].qty <= 1) return;
        const updatedItems = [...cartItems];
        updatedItems[index].qty -= 1;
        setCartItems(updatedItems);
    };
    const deletCartItem = (product: TProduct) => {
        const updatedItems = [...cartItems].filter(
            (item) => item.product.id !== product.id
        );
        setCartItems(updatedItems);
    };

    const addItemToCart = (product: TProduct) => {
        const updatedItems = [...cartItems, { product, qty: 1 }];
        setCartItems(updatedItems);
    };

    const isInCart = (product: TProduct) => {
        return cartItems.some((item) => item.product.id === product.id);
    };

    return {
        cartItems,
        deletCartItem,
        incrementItemQty,
        decrementItemQty,
        isInCart,
        addItemToCart,
        cartTotalPrice,
        cartTotalQty,
    };
}
