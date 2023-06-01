import React from "react";
import { ShowIcon, LinkIcon, ShopIcon } from "../icons";
import { TProduct } from "../stores/products";
import { useCart } from "../stores/cart";
import { useSearchParams } from "../hooks/searchParams";
import { asset } from "../lib/utils";

type ProductCardProps = {
    product: TProduct;
};
function ProductCard({ product }: ProductCardProps) {
    const [_, setSearchParams] = useSearchParams();
    const { isInCart, addItemToCart, deletCartItem } = useCart();

    return (
        <div className="rounded-xl overflow-hidden bg-white relative flex-shrink-0 w-72 md:w-full">
            {isInCart(product) && (
                <div className="absolute top-0 left-0 w-full h-full bg-white z-30 flex flex-col items-center justify-between gap-4 p-6">
                    <p className="tracking-widest font-medium text-dark-gray py-6">
                        AJOUTÉ AU PANIER !
                    </p>
                    <img
                        src={asset(`storage/${product.image}`)}
                        alt={product.name}
                        className="w-40 h-40 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-4 w-full">
                        <button
                            className="text-white bg-red-500 w-full rounded-lg py-3 hover:opacity-80 transition"
                            onClick={() => deletCartItem(product)}
                        >
                            &times;
                        </button>
                        <button
                            className="text-white bg-primary w-full rounded-lg py-3 hover:opacity-80 transition"
                            onClick={() =>
                                setSearchParams({
                                    "product-link": `${product.id}`,
                                })
                            }
                        >
                            Voir
                        </button>
                    </div>
                </div>
            )}
            <div
                className="group relative"
                onClick={() =>
                    setSearchParams({ "product-link": `${product.id}` })
                }
            >
                <img
                    src={asset(`storage/${product.image}`)}
                    alt={product.name}
                    className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 place-items-center text-white cursor-pointer hidden group-hover:grid">
                    <ShowIcon />
                </div>
            </div>
            <div className="p-6">
                <p className="text-dark-gray text-xl font-semibold mb-1">
                    {product.name}
                </p>
                <p className="text-secondary text-xs font-semibold mb-6">
                    {product.sub_name}
                </p>

                <div className="flex items-center gap-4">
                    <p className="text-dark-gray font-bold">
                        {product.price} Dhs
                    </p>
                    <div className="flex-1"></div>
                    <button
                        className="bg-light-primary rounded-lg w-10 h-10 text-dark-gray grid place-items-center hover:opacity-80 transition"
                        onClick={() =>
                            setSearchParams({ "product-link": `${product.id}` })
                        }
                    >
                        <LinkIcon />
                    </button>
                    <button
                        className="bg-primary rounded-lg w-10 h-10 text-white grid place-items-center hover:opacity-80 transition"
                        onClick={() => addItemToCart(product)}
                    >
                        <ShopIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

type ProductsGroupProps = {
    category: string;
    products: TProduct[];
};

function ProductsGroup({ category, products }: ProductsGroupProps) {
    return (
        <div className="px-6 py-10" id={category}>
            <div className="flex items-center gap-2 mb-9">
                <h4 className="text-3xl text-dark-gray font-bold">
                    {category}
                </h4>
                <div className="bg-light-primary w-9 h-9 rounded-full grid place-items-center text-dark-green font-bold">
                    {products.length}
                </div>
            </div>
            <div className="flex items-center flex-nowrap overflow-x-scroll md:overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsGroup;
