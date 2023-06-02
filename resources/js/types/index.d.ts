export interface User {
    id: number;
    name: string;
    nom: string;
    prenom: string;
    adress: string;
    telephone: string;
    points: number;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface Order {
    id: number;
    num: string;
    nom: string;
    prenom: string;
    email: string;
    adress: string;
    telephone: string;
    notes: string;
    delivery_type: string;
    use_whatsapp: number;
    total: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    items: Item[];
}

export interface Item {
    id: number;
    qty: number;
    product_id: number;
    order_id: number;
    created_at: string;
    updated_at: string;
    product: Product;
}

export interface Product {
    id: number;
    name: string;
    sub_name: string;
    slug: string;
    text: string;
    image: string;
    price: string;
    points: number;
    category_id: number;
    created_at: any;
    updated_at: any;
}
