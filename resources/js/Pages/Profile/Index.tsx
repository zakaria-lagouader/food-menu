import AppLayout from "@/Layouts/AppLayout";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
type Coupon = {
    id: number;
    code: string;
    amount: number;
};
export default function Index({
    auth,
    coupons,
    orders_count,
}: PageProps<{ coupons: Coupon[]; orders_count: number }>) {
    const [value, copy] = useCopyToClipboard();
    return (
        <AppLayout>
            <div className="bg-white">
                <div className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                        <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
                            <div className="flex items-baseline justify-between">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                    Hello {auth.user.prenom} {auth.user.nom}
                                </h1>
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-600">
                                    {auth.user.points} Points
                                </h1>
                            </div>
                            <hr className="my-8" />
                            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 items-start text-center">
                                <div className="h-full p-8 border-b lg:border-b-0 border-b-gray-200 lg:border-r lg:border-r-gray-200 flex flex-col items-center justify-center">
                                    <p className="text-gray-900 font-extrabold text-2xl sm:text-3xl mb-8">
                                        Total Orders: {orders_count}
                                    </p>
                                    <Link
                                        href="/profile/order/history"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        View All Orders
                                    </Link>
                                </div>
                                <div className="h-full p-8 flex flex-col items-center justify-center">
                                    <p className="text-gray-900 font-extrabold text-2xl sm:text-3xl mb-4">
                                        Get Your Coupon Code
                                    </p>
                                    <p className="text-gray-400 text-sm mb-4">
                                        each 100 points equals 10 Dhs
                                    </p>
                                    <Link
                                        method="post"
                                        href="/profile/coupon"
                                        as="button"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        Generate Coupon
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-16 space-y-4">
                                {coupons.map((coupon) => (
                                    <div
                                        key={coupon.id}
                                        className="bg-white px-4 py-5 border border-gray-200 sm:px-6 rounded-lg"
                                    >
                                        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                                            <div className="ml-4 mt-2">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                    Code: {coupon.code}
                                                </h3>
                                                <p className="text-gray-500 font-medium mt-2">
                                                    amount: {coupon.amount} Dhs
                                                </p>
                                            </div>
                                            <div className="ml-4 mt-2 flex-shrink-0">
                                                <button
                                                    disabled={
                                                        value === coupon.code
                                                    }
                                                    onClick={() =>
                                                        copy(coupon.code)
                                                    }
                                                    type="button"
                                                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-200 disabled:text-gray-900 disabled:cursor-not-allowed"
                                                >
                                                    {value === coupon.code
                                                        ? "Copied"
                                                        : "Copy Code"}
                                                </button>
                                            </div>
                                        </div>
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
