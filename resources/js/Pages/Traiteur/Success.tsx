import { Link } from "@inertiajs/react";

function TraiteurSuccess() {
    return (
        <div className="bg-white">
            <header className="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
                <Link href="/">
                    <img src="/img/logo.webp" alt="" className="h-12 w-auto" />
                </Link>
            </header>

            <main className="max-w-4xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14 text-center">
                <p>Votre Devis est envoyée avec success</p>
                <Link
                    href="/"
                    className=" block mt-6 w-full bg-primary border border-transparent rounded-md shadow-sm p-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                >
                    Go Home
                </Link>
            </main>
        </div>
    );
}

export default TraiteurSuccess;
