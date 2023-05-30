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
};

function Home({ products, categories }: HomeProps) {
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
                <Header />
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
