import React from "react";
import { ShopIcon } from "../icons";
import { useCart } from "../stores/cart";
import { useProduct } from "../stores/products";
import { useSearchParams } from "../hooks/searchParams";
import { asset } from "../lib/utils";

function ProductModal() {
    const { isInCart, addItemToCart } = useCart();
    const [searchParams, setSearchParams] = useSearchParams();
    const product = useProduct(Number(searchParams.get("product-link")));

    if (!searchParams.has("product-link") || product === null) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[80] flex items-center justify-center p-4">
            <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"
                onClick={() => setSearchParams({})}
            ></div>
            <div className="bg-white w-full max-w-xl rounded-xl md:rounded-2xl overflow-hidden relative">
                <button
                    className="bg-white p-3 absolute top-3 right-3 rounded-lg"
                    onClick={() => setSearchParams({})}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <img
                    src={asset(`storage/${product.image}`)}
                    className="aspect-video w-full object-cover"
                    alt=""
                />
                <div className="p-6 space-y-4">
                    <p className="font-semibold text-xl text-dark-gray">
                        {product.name}
                    </p>
                    <p className="text-sm">{product.text}</p>

                    <div className="flex items-center justify-between !mt-8">
                        <p className="text-dark-gray font-bold text-xl">
                            56.90 Dhs
                        </p>
                        {!isInCart(product) ? (
                            <button
                                className="bg-primary rounded-lg w-10 h-10 text-white grid place-items-center hover:opacity-80 transition"
                                onClick={() => addItemToCart(product)}
                            >
                                <ShopIcon />
                            </button>
                        ) : (
                            <p className="text-sm text-dark-gray">in cart</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
