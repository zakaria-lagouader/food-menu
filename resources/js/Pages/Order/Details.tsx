import AppLayout from "@/Layouts/AppLayout";
import { asset } from "@/lib/utils";
import { Order, PageProps } from "@/types";

export default function OrderDetails({ order }: PageProps<{ order: Order }>) {
    return (
        <AppLayout>
            <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
                <div className="max-w-3xl mx-auto">
                    <div className="max-w-xl">
                        <h1 className="text-sm font-semibold uppercase tracking-wide text-green-600">
                            Thank you!
                        </h1>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Elle est en route !
                        </p>
                        <p className="mt-2 text-base text-gray-500">
                            Votre commande #{order.num} a été livrée et vous
                            parviendra bientôt.
                        </p>
                    </div>

                    <section
                        aria-labelledby="order-heading"
                        className="mt-10 border-t border-gray-200"
                    >
                        {order.items.map(({ product, qty }) => (
                            <div
                                key={product.id}
                                className="py-10 border-b border-gray-200 flex space-x-6"
                            >
                                <img
                                    src={asset("storage/" + product.image)}
                                    alt={product.name}
                                    className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                                />
                                <div className="flex-auto flex flex-col">
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            <p>{product.name}</p>
                                        </h4>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {product.text}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex-1 flex items-end">
                                        <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                                            <div className="flex">
                                                <dt className="font-medium text-gray-900">
                                                    Quantité
                                                </dt>
                                                <dd className="ml-2 text-gray-700">
                                                    {qty}
                                                </dd>
                                            </div>
                                            <div className="pl-4 flex sm:pl-6">
                                                <dt className="font-medium text-gray-900">
                                                    Prix
                                                </dt>
                                                <dd className="ml-2 text-gray-700">
                                                    {product.price} Dhs
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="sm:ml-40 sm:pl-6">
                            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                                <div>
                                    <dt className="font-medium text-gray-900">
                                        Adresse
                                    </dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{order.adress}</p>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-gray-900">
                                        Méthode de livraison
                                    </dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{order.delivery_type}</p>
                                    </dd>
                                </div>
                            </dl>
                            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                                <div>
                                    <dt className="font-medium text-gray-900">
                                        Telephone
                                    </dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{order.telephone}</p>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-gray-900">
                                        Notes
                                    </dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{order.notes}</p>
                                    </dd>
                                </div>
                            </dl>

                            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">
                                        Total
                                    </dt>
                                    <dd className="text-gray-900">
                                        {order.total} Dhs
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </section>
                </div>
            </main>
        </AppLayout>
    );
}
