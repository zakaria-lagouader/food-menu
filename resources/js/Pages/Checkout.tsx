import { useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import { PageProps } from "@/types";
import { useCart } from "@/stores/cart";
import { TCartItem } from "@/stores/products";
import { FormEventHandler, useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { asset, classNames } from "@/lib/utils";

const deliveryMethods = [
    {
        id: 1,
        title: "Cash On delivery",
        turnaround: "",
        price: "10 DHs",
    },
    {
        id: 2,
        title: "Pick up",
        turnaround: "",
        price: "0 Dhs",
    },
    {
        id: 3,
        title: "Online",
        turnaround: "",
        price: "0 Dhs",
    },
];

export default function Checkout({
    auth,
    cart,
}: PageProps<{ cart: TCartItem[] }>) {
    const shipping_cost = 10;
    const { cartTotalPrice, cartItems, deletCartItem, setCartItems } =
        useCart();
    const { data, setData, post, processing, errors, transform } = useForm({
        nom: auth.user.nom ?? "",
        prenom: auth.user.prenom ?? "",
        email: auth.user.email ?? "",
        adress: auth.user.adress ?? "",
        telephone: auth.user.telephone ?? "",
        notes: "",
        use_whatsapp: false,
        create_account: false,
        delivery_type: "Cash On delivery",
        coupon_code: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        transform((data) => ({
            ...data,
            cart: cartItems,
            total: cartTotalPrice,
        }));

        post("/order/checkout");
    };

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);
    return (
        <AppLayout>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    {/* Errors Card */}
                    {Object.keys(errors).length !== 0 && (
                        <div className="bg-red-50 rounded-lg mb-4">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Errors
                                </h3>
                                <div className="mt-2 max-w-xl text-sm text-gray-700">
                                    <ul className="list-disc pl-4 space-y-1">
                                        {Object.keys(errors).map((key) => (
                                            <li key={key}>{errors[key]}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    <h2 className="sr-only">Checkout</h2>

                    <form
                        onSubmit={handleSubmit}
                        className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
                    >
                        <div>
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Contact information
                                </h2>

                                <div className="mt-4">
                                    <label
                                        htmlFor="email-address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            type="email"
                                            id="email-address"
                                            name="email-address"
                                            autoComplete="email"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            value={data.telephone}
                                            onChange={(e) =>
                                                setData(
                                                    "telephone",
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Shipping information
                                </h2>

                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            First name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                value={data.prenom}
                                                onChange={(e) =>
                                                    setData(
                                                        "prenom",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                id="first-name"
                                                name="first-name"
                                                autoComplete="given-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                value={data.nom}
                                                onChange={(e) =>
                                                    setData(
                                                        "nom",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                id="last-name"
                                                name="last-name"
                                                autoComplete="family-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                value={data.adress}
                                                onChange={(e) =>
                                                    setData(
                                                        "adress",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                name="address"
                                                id="address"
                                                autoComplete="street-address"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="notes"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Notes
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                value={data.notes}
                                                onChange={(e) =>
                                                    setData(
                                                        "notes",
                                                        e.target.value
                                                    )
                                                }
                                                id="notes"
                                                rows={4}
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Options */}
                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Options
                                </h2>

                                <fieldset className="mt-4">
                                    <legend className="sr-only">Options</legend>
                                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                        <div className="flex items-center">
                                            <input
                                                checked={data.use_whatsapp}
                                                onChange={(e) =>
                                                    setData(
                                                        "use_whatsapp",
                                                        e.target.checked
                                                    )
                                                }
                                                id="use_whatsapp"
                                                type="checkbox"
                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                                            />

                                            <label
                                                htmlFor="use_whatsapp"
                                                className="ml-3 block text-sm font-medium text-gray-700"
                                            >
                                                Utiliser Whatsapp ?
                                            </label>
                                        </div>
                                        {!auth.user && (
                                            <div className="flex items-center">
                                                <input
                                                    checked={
                                                        data.create_account
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "create_account",
                                                            e.target.checked
                                                        )
                                                    }
                                                    id="create_account"
                                                    type="checkbox"
                                                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                                                />

                                                <label
                                                    htmlFor="create_account"
                                                    className="ml-3 block text-sm font-medium text-gray-700"
                                                >
                                                    Create Account ?
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </fieldset>
                            </div>
                            {/* Delivery methodes */}
                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <RadioGroup
                                    value={data.delivery_type}
                                    onChange={(value) =>
                                        setData("delivery_type", value)
                                    }
                                >
                                    <RadioGroup.Label className="text-lg font-medium text-gray-900">
                                        Delivery method
                                    </RadioGroup.Label>

                                    <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-4">
                                        {deliveryMethods.map(
                                            (deliveryMethod) => (
                                                <RadioGroup.Option
                                                    key={deliveryMethod.id}
                                                    value={deliveryMethod.title}
                                                    className={({
                                                        checked,
                                                        active,
                                                    }) =>
                                                        classNames(
                                                            checked
                                                                ? "border-transparent"
                                                                : "border-gray-300",
                                                            active
                                                                ? "ring-2 ring-green-500"
                                                                : "",
                                                            "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                                                        )
                                                    }
                                                >
                                                    {({ checked, active }) => (
                                                        <>
                                                            <div className="flex-1 flex">
                                                                <div className="flex flex-col">
                                                                    <RadioGroup.Label
                                                                        as="span"
                                                                        className="block text-sm font-medium text-gray-900"
                                                                    >
                                                                        {
                                                                            deliveryMethod.title
                                                                        }
                                                                    </RadioGroup.Label>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className="mt-1 flex items-center text-sm text-gray-500"
                                                                    >
                                                                        {
                                                                            deliveryMethod.turnaround
                                                                        }
                                                                    </RadioGroup.Description>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className="mt-6 text-sm font-medium text-gray-900"
                                                                    >
                                                                        {
                                                                            deliveryMethod.price
                                                                        }
                                                                    </RadioGroup.Description>
                                                                </div>
                                                            </div>
                                                            {checked ? (
                                                                <CheckCircleIcon
                                                                    className="h-5 w-5 text-green-600"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : null}
                                                            <div
                                                                className={classNames(
                                                                    active
                                                                        ? "border"
                                                                        : "border-2",
                                                                    checked
                                                                        ? "border-green-500"
                                                                        : "border-transparent",
                                                                    "absolute -inset-px rounded-lg pointer-events-none"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            )
                                        )}
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Coupon Section */}
                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Coupon
                                </h2>

                                <div className="mt-4">
                                    <label
                                        htmlFor="coupon"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Coupon Code
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            value={data.coupon_code}
                                            onChange={(e) =>
                                                setData(
                                                    "coupon_code",
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            id="coupon"
                                            name="coupon"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order summary */}
                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">
                                Order summary
                            </h2>

                            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <ul
                                    role="list"
                                    className="divide-y divide-gray-200"
                                >
                                    {cartItems.map((item) => (
                                        <li
                                            key={item.product.id}
                                            className="flex py-6 px-4 sm:px-6"
                                        >
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={asset(
                                                        `storage/${item.product.image}`
                                                    )}
                                                    alt={item.product.name}
                                                    className="w-20 rounded-md aspect-square object-cover"
                                                />
                                            </div>

                                            <div className="ml-6 flex-1 flex flex-col">
                                                <div className="flex">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-sm">
                                                            <a className="font-medium text-gray-700 hover:text-gray-800">
                                                                {
                                                                    item.product
                                                                        .name
                                                                }
                                                            </a>
                                                        </h4>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {
                                                                item.product
                                                                    .sub_name
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="ml-4 flex-shrink-0 flow-root">
                                                        <button
                                                            onClick={() =>
                                                                deletCartItem(
                                                                    item.product
                                                                )
                                                            }
                                                            type="button"
                                                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                                        >
                                                            <span className="sr-only">
                                                                Remove
                                                            </span>
                                                            <TrashIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex-1 pt-2 flex items-end justify-between">
                                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                                        {item.product.price}
                                                    </p>

                                                    <p className="mt-1 text-sm text-gray-700">
                                                        x {item.qty}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">
                                            {cartTotalPrice.toFixed(2)} dhs
                                        </dd>
                                    </div>
                                    {data.delivery_type ==
                                        "Cash On delivery" && (
                                        <div className="flex items-center justify-between">
                                            <dt className="text-sm">
                                                Shipping
                                            </dt>
                                            <dd className="text-sm font-medium text-gray-900">
                                                {shipping_cost} Dhs
                                            </dd>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt className="text-base font-medium">
                                            Total
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            {data.delivery_type ==
                                            "Cash On delivery"
                                                ? (
                                                      cartTotalPrice +
                                                      shipping_cost
                                                  ).toFixed(2)
                                                : cartTotalPrice.toFixed(
                                                      2
                                                  )}{" "}
                                            Dhs
                                        </dd>
                                    </div>
                                </dl>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <button
                                        disabled={processing}
                                        type="submit"
                                        className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 disabled:bg-gray-200 disabled:text-gray-900 disabled:cursor-not-allowed"
                                    >
                                        {processing
                                            ? "Loading ..."
                                            : "Confirm order"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
