import React from "react";
import { useState } from "react";
import { ShopIcon } from "../icons";
import { useCart } from "../stores/cart";
import { Link } from "@inertiajs/react";
import { asset } from "../lib/utils";

function CounterInput({
    value,
    OnIncrement,
    OnDecrement,
    onDelete,
}: {
    value: number;
    OnIncrement: (inedx: unknown) => void;
    OnDecrement: (inedx: unknown) => void;
    onDelete: (inedx: unknown) => void;
}) {
    return (
        <div className="flex items-center gap-2">
            {value === 1 ? (
                <button
                    className="w-7 h-7 rounded-lg text-white text-xl bg-red-500"
                    onClick={onDelete}
                >
                    &times;
                </button>
            ) : (
                <button
                    className="w-7 h-7 rounded-lg text-white text-xl bg-primary"
                    onClick={OnDecrement}
                >
                    -
                </button>
            )}
            <p className="font-bold text-dark-gray">{value}</p>
            <button
                className="w-7 h-7 rounded-lg text-white text-xl bg-primary"
                onClick={OnIncrement}
            >
                +
            </button>
        </div>
    );
}

function CartSection() {
    const [isOpen, SetIsOpen] = useState(false);
    const {
        cartTotalPrice,
        cartTotalQty,
        cartItems,
        decrementItemQty,
        incrementItemQty,
        deletCartItem,
    } = useCart();
    return (
        <>
            <button
                className="w-14 h-14 rounded-full bg-black text-white cursor-pointer fixed z-[70] bottom-3 right-3 shadow-xl grid lg:hidden place-items-center"
                onClick={() => SetIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                    </svg>
                )}
            </button>
            <div
                className={
                    "shadow-left bg-white p-4 fixed top-0 right-0 h-full w-full lg:w-[380px] z-[60] lg:block" +
                    (!isOpen && " hidden")
                }
            >
                <div className="bg-primary rounded-xl p-3 flex items-center gap-3">
                    <div className="bg-secondary rounded-xl p-5 text-white">
                        <div className="scale-125">
                            <ShopIcon />
                        </div>
                    </div>
                    <div>
                        <p className="font-medium tracking-wider text-white">
                            PANIER
                        </p>
                        <p className="text-lg font-bold text-white">
                            {cartTotalPrice.toFixed(2)} Dhs
                        </p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="w-10 h-10 bg-white rounded-full text-md font-bold text-dark-gray grid place-items-center">
                        {cartTotalQty}
                    </div>
                </div>

                <div className="py-6 overflow-y-scroll h-full max-h-[600px]">
                    <p className="text-dark-gray tracking-widest text-lg font-medium">
                        COMMANDE
                    </p>
                    {cartItems.map((item, i) => (
                        <div
                            key={`cart-item-${i}`}
                            className="flex items-center gap-4 py-4"
                        >
                            <img
                                src={asset(`storage/${item.product.image}`)}
                                alt=""
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <p className="text-xs font-semibold text-dark-gray">
                                    {item.product.name}
                                </p>
                                <p className="text-xs font-semibold mb-1 text-secondary">
                                    {item.product.sub_name}
                                </p>
                                <p className="font-bold text-black">
                                    {item.product.price} Dhs
                                </p>
                            </div>
                            <CounterInput
                                value={item.qty}
                                OnDecrement={() => decrementItemQty(i)}
                                OnIncrement={() => incrementItemQty(i)}
                                onDelete={() => deletCartItem(item.product)}
                            />
                        </div>
                    ))}

                    <div className="py-40"></div>
                </div>

                <div className="absolute left-0 bottom-0 w-full p-4 space-y-2 border-t border-t-light-gray bg-white">
                    <div className="flex items-center justify-between">
                        <span className="text-dark-gray font-medium tracking-widest">
                            SOUS-TOTAL
                        </span>
                        <span className="text-right font-semibold text-md text-black">
                            {cartTotalPrice.toFixed(2)} Dhs
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-dark-gray font-medium tracking-widest">
                            FRAIS DE LIVRAISON
                        </span>
                        <span className="text-right font-semibold text-md text-black">
                            0 Dhs
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-dark-gray font-medium tracking-widest">
                            TOTAL
                        </span>
                        <span className="text-right font-bold text-2xl text-black">
                            {(cartTotalPrice + 0).toFixed(2)} Dhs
                        </span>
                    </div>
                    <Link
                        as="button"
                        href="/checkout"
                        method="post"
                        data={{ cart: cartItems }}
                        className="w-full bg-primary disabled:cursor-not-allowed rounded-lg px-4 py-4 text-center text-white font-semibold text-lg hover:opacity-80 transition"
                        disabled={cartItems.length === 0}
                    >
                        PASSER LA COMMANDE
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CartSection;