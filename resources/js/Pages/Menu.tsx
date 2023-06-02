import { useEffect } from "react";
import CartSection from "../components/CartSection";
import Header from "../components/Header";
import ProductModal from "../components/ProductModal";
import ProductsGroup from "../components/Products";
import { useAtomValue, useSetAtom } from "jotai";
import {
    TCategory,
    TProduct,
    categoriesAtome,
    productsAtom,
    productsByCategoryAtom,
} from "../stores/products";

type HomeProps = {
    products: TProduct[];
    categories: TCategory[];
    restaurants: string;
};

const phones = {
    anoual: "0641516181",
    palmier: "0641516181",
};

const maps = {
    anoual: "https://goo.gl/maps/JLixr6tisrHhe3nB9",
    palmier: "https://goo.gl/maps/nSUaxc2ify9VGZUp7",
};

function Home({ products, categories, restaurants }: HomeProps) {
    const setProducts = useSetAtom(productsAtom);
    const setCategories = useSetAtom(categoriesAtome);
    const productsByCategory = useAtomValue(productsByCategoryAtom);

    useEffect(() => {
        setProducts(products);
        setCategories(categories);
    }, [products]);

    return (
        <div className="w-full h-screen overflow-hidden bg-light-gray">
            <ProductModal />
            <div className="lg:mr-[380px] flex flex-col h-full">
                <Header phone={phones[restaurants]} map={maps[restaurants]} />
                <div className="h-full overflow-y-scroll scroll-smooth">
                    {Object.keys(productsByCategory).map((category) => (
                        <ProductsGroup
                            key={category}
                            category={category}
                            products={productsByCategory[category]}
                        />
                    ))}
                </div>
            </div>
            <CartSection />
        </div>
    );
}

export default Home;
