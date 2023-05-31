import React from "react";
import { Link } from "@inertiajs/react";
import { TCartItem } from "../stores/products";
import { asset } from "../lib/utils";
import { useCart } from "../stores/cart";
import { useForm } from "@inertiajs/react";
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Stack,
    Text,
    Textarea,
    Button,
    Checkbox,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";

type CheckoutProps = {
    cart: TCartItem[];
};

function CartItems({
    cart,
    formData,
}: {
    formData: {
        nom: string;
        prenom: string;
        email: string;
        adress: string;
        telephone: string;
        notes: string;
        use_whatsapp: boolean;
        create_account: boolean;
        delivery_type: string;
    };
    cart: TCartItem[];
}) {
    const { cartTotalPrice } = useCart(cart);
    return (
        <div className="max-w-lg mx-auto w-full">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cart.map((item) => (
                        <li
                            key={item.product.id}
                            className="py-6 flex space-x-6"
                        >
                            <img
                                src={asset(`storage/${item.product.image}`)}
                                alt={item.product.name}
                                className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
                            />
                            <div className="flex-auto">
                                <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                                    <div className="flex-auto text-sm font-medium space-y-1">
                                        <h3 className="text-gray-900">
                                            {item.product.name}
                                        </h3>
                                        <p className="text-gray-900">
                                            {item.product.price} Dhs
                                        </p>
                                        <p className="hidden text-gray-500 sm:block">
                                            {item.product.sub_name}
                                        </p>
                                        <p className="text-gray-500 sm:block">
                                            x{item.qty}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">
                        {cartTotalPrice.toFixed(2)} Dhs
                    </dd>
                </div>
                {formData.delivery_type === "cash" && (
                    <div className="flex justify-between">
                        <dt>Livraison</dt>
                        <dd className="text-gray-900">10 Dhs</dd>
                    </div>
                )}
                <div className="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base">
                        {formData.delivery_type === "cash"
                            ? (cartTotalPrice + 10).toFixed(2)
                            : cartTotalPrice.toFixed(2)}
                        Dhs
                    </dd>
                </div>
            </dl>
        </div>
    );
}

function CheckoutForm({
    formData,
    cart,
    cartTotalPrice,
}: {
    formData: InertiaFormProps<{
        nom: string;
        prenom: string;
        email: string;
        adress: string;
        telephone: string;
        notes: string;
        use_whatsapp: boolean;
        create_account: boolean;
        delivery_type: string;
    }>;
    cart: TCartItem[];
    cartTotalPrice: number;
}) {
    const { data, setData, post, processing, errors, transform } = formData;
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        transform((data) => ({
            ...data,
            cart,
            total: cartTotalPrice,
        }));

        post("/order/checkout");

        if (data.use_whatsapp) {
            const products = cart
                .map((item) => {
                    return `${item.product.name} x ${item.qty} \n`;
                })
                .join(" ");

            const text = `Bonjour, Je suis ${data.nom}, \nje veux commander : \n${products}, Veuillez livrer ces articles Ã  l'adresse ${data.adress}. \nS'il vous plait de me contacter dans le numero suivant ${data.telephone} pour confirmer la commande. \nNotes : ${data.notes}`;

            const phone = "212664222057";

            const lien = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
                text
            )}`;

            window.open(lien, "_blank")!.focus();
        }
    };
    return (
        <div className="max-w-lg mx-auto w-full">
            <form onSubmit={handleSubmit}>
                <Text fontSize="lg" fontWeight="medium" className="mb-4">
                    Contact information
                </Text>
                <Stack spacing={5} direction="column">
                    <Stack spacing={4} direction="row">
                        <FormControl
                            isInvalid={errors.nom !== undefined}
                            isRequired
                        >
                            <FormLabel fontWeight="normal">Nom</FormLabel>
                            <Input
                                type="text"
                                size="lg"
                                value={data.nom}
                                onChange={(e) => setData("nom", e.target.value)}
                            />
                            {errors.nom && (
                                <FormErrorMessage>
                                    {errors.nom}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isInvalid={errors.prenom !== undefined}
                            isRequired
                        >
                            <FormLabel fontWeight="normal">Prenom</FormLabel>
                            <Input
                                type="text"
                                size="lg"
                                value={data.prenom}
                                onChange={(e) =>
                                    setData("prenom", e.target.value)
                                }
                            />
                            {errors.prenom && (
                                <FormErrorMessage>
                                    {errors.prenom}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    </Stack>
                    <FormControl
                        isInvalid={errors.email !== undefined}
                        isRequired
                    >
                        <FormLabel fontWeight="normal">Email</FormLabel>
                        <Input
                            type="email"
                            size="lg"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        isInvalid={errors.telephone !== undefined}
                        isRequired
                    >
                        <FormLabel fontWeight="normal">Telephone</FormLabel>
                        <Input
                            type="text"
                            size="lg"
                            value={data.telephone}
                            onChange={(e) =>
                                setData("telephone", e.target.value)
                            }
                        />
                        {errors.telephone && (
                            <FormErrorMessage>
                                {errors.telephone}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        isInvalid={errors.adress !== undefined}
                        isRequired
                    >
                        <FormLabel fontWeight="normal">Adresse</FormLabel>
                        <Input
                            type="text"
                            size="lg"
                            value={data.adress}
                            onChange={(e) => setData("adress", e.target.value)}
                        />
                        {errors.adress && (
                            <FormErrorMessage>{errors.adress}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        isInvalid={errors.notes !== undefined}
                        isRequired
                    >
                        <FormLabel fontWeight="normal">Notes</FormLabel>
                        <Textarea
                            size="lg"
                            value={data.notes}
                            onChange={(e) => setData("notes", e.target.value)}
                        />
                        {errors.notes && (
                            <FormErrorMessage>{errors.notes}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl>
                        <Checkbox
                            fontWeight="medium"
                            isChecked={data.create_account}
                            onChange={(e) =>
                                setData("create_account", e.target.checked)
                            }
                        >
                            Create Account ?
                        </Checkbox>
                    </FormControl>
                    <FormControl>
                        <Checkbox
                            fontWeight="medium"
                            isChecked={data.use_whatsapp}
                            onChange={(e) =>
                                setData("use_whatsapp", e.target.checked)
                            }
                        >
                            Commander par Whatsapps
                        </Checkbox>
                    </FormControl>
                    <FormControl as="fieldset">
                        <FormLabel as="legend">Select Delivery Type</FormLabel>
                        <RadioGroup
                            onChange={(v) => setData("delivery_type", v)}
                            value={data.delivery_type}
                        >
                            <Stack direction="row" spacing={4}>
                                <Radio value="pick-up">Pick up</Radio>
                                <Radio value="cash">Cash On Delivery</Radio>
                                <Radio value="online">online</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <Button
                        isLoading={processing}
                        loadingText="Loading"
                        colorScheme="teal"
                        variant="solid"
                        spinnerPlacement="start"
                        size="lg"
                        fontWeight="medium"
                        type="submit"
                    >
                        Commander
                    </Button>
                </Stack>
            </form>
        </div>
    );
}

export default function Checkout({ cart }: CheckoutProps) {
    const { cartTotalPrice } = useCart(cart);
    const formData = useForm({
        nom: "",
        prenom: "",
        email: "",
        adress: "",
        telephone: "",
        notes: "",
        use_whatsapp: false,
        create_account: false,
        delivery_type: "cash",
    });
    return (
        <div className="bg-white">
            <header className="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
                <Link href="/">
                    <img src="/img/logo.webp" alt="" className="h-12 w-auto" />
                </Link>
            </header>

            <main className="max-w-7xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
                <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <CartItems cart={cart} formData={formData.data} />

                    <CheckoutForm
                        formData={formData}
                        cart={cart}
                        cartTotalPrice={cartTotalPrice}
                    />
                </div>
            </main>
        </div>
    );
}
