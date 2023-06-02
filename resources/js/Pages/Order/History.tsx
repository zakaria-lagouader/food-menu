import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { asset, classNames } from "@/lib/utils";
import AppLayout from "@/Layouts/AppLayout";
import { Order, PageProps } from "@/types";

export default function OrdersHistory({
    orders,
}: PageProps<{ orders: Order[] }>) {
    return (
        <AppLayout>
            <div className="bg-white">
                <div className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                        <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                Order history
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Check the status of recent orders, manage
                                returns, and discover similar products.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="sr-only">Recent orders</h2>
                        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                            <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                                {orders.length === 0 && (
                                    <p className="text-center text-gray-400 my-6">
                                        No orders yet!
                                    </p>
                                )}
                                {orders.map((order) => (
                                    <div
                                        key={order.num}
                                        className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
                                    >
                                        <h3 className="sr-only">
                                            Order placed on{" "}
                                            <time dateTime={order.created_at}>
                                                {order.created_at}
                                            </time>
                                        </h3>

                                        <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                                            <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                                                <div>
                                                    <dt className="font-medium text-gray-900">
                                                        Order number
                                                    </dt>
                                                    <dd className="mt-1 text-gray-500">
                                                        {order.num}
                                                    </dd>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <dt className="font-medium text-gray-900">
                                                        Date placed
                                                    </dt>
                                                    <dd className="mt-1 text-gray-500">
                                                        <time
                                                            dateTime={
                                                                order.created_at
                                                            }
                                                        >
                                                            {order.created_at}
                                                        </time>
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="font-medium text-gray-900">
                                                        Total amount
                                                    </dt>
                                                    <dd className="mt-1 font-medium text-gray-900">
                                                        {order.total} Dhs
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                        {/* Products */}
                                        <h4 className="sr-only">Items</h4>
                                        <ul
                                            role="list"
                                            className="divide-y divide-gray-200"
                                        >
                                            {order.items.map(
                                                ({ qty, product }) => (
                                                    <li
                                                        key={product.id}
                                                        className="p-4 sm:p-6"
                                                    >
                                                        <div className="flex items-center sm:items-start">
                                                            <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                                                                <img
                                                                    src={asset(
                                                                        "storage/" +
                                                                            product.image
                                                                    )}
                                                                    alt={
                                                                        product.name
                                                                    }
                                                                    className="w-full h-full object-center object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-1 ml-6 text-sm">
                                                                <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                                                    <h5>
                                                                        {
                                                                            product.name
                                                                        }
                                                                    </h5>
                                                                    <p className="mt-2 sm:mt-0">
                                                                        <span className="text-gray-400 font-normal mr-3">
                                                                            x{" "}
                                                                            {
                                                                                qty
                                                                            }
                                                                        </span>
                                                                        {
                                                                            product.price
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <p className="hidden text-gray-500 sm:block sm:mt-2">
                                                                    {
                                                                        product.text
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
