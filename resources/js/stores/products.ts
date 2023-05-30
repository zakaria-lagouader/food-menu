import { atom, useAtomValue } from "jotai";

export type TCategory = {
    id: number;
    name: string;
    image: string;
};

export type TProduct = {
    id: number;
    name: string;
    sub_name: string;
    slug: string;
    image: string;
    price: number;
    category: TCategory;
    text: string;
};

export type TCartItem = {
    product: TProduct;
    qty: number;
};

export type TCatProds = {
    [k: string]: TProduct[];
};

export const searchTextAtom = atom("");

export const productsAtom = atom<TProduct[]>([]);

export const filterdProductsAtom = atom((get) => {
    return get(productsAtom).filter((product) =>
        product.name
            .toLocaleLowerCase()
            .includes(get(searchTextAtom).toLocaleLowerCase())
    );
});

export const categoriesAtome = atom<TCategory[]>([]);

export const selectedCategoryAtom = atom<string | null>(null);

export const productsByCategoryAtom = atom((get) => {
    return get(filterdProductsAtom).reduce(
        (groups, item) => ({
            ...groups,
            [item.category.name]: [...(groups[item.category.name] || []), item],
        }),
        {} as TCatProds
    );
});

export function useProduct(id: number) {
    const products = useAtomValue(productsAtom);
    return products.find((p) => p.id === id) ?? null;
}
