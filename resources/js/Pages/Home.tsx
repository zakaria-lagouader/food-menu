import { Link } from "@inertiajs/react";

function Home() {
    return (
        <>
            <div className="relative">
                <main className="lg:relative bg-light-gray">
                    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-0 lg:h-screen lg:flex lg:items-center lg:text-left">
                        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                            <img
                                src="/img/logo.webp"
                                alt="Logo"
                                className="h-14 w-auto mb-8 mx-auto lg:mx-0"
                            />
                            <h1 className="text-4xl tracking-tight font-extrabold text-dark-gray sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block">Pizza Au Feu</span>
                                <span className="block text-primary">
                                    De Bois
                                </span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                Livraison Jusqu'à chez vous !!
                            </p>
                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#restaurants"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:opacity-90 md:py-4 md:text-lg md:px-10"
                                    >
                                        Commander
                                    </a>
                                </div>
                                {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 gap-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        Whatsapp
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                    </div>
                </main>
            </div>
            <div
                className="min-h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2"
                id="restaurants"
            >
                <div className="relative flex">
                    <img
                        src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-center py-20">
                        <h2 className="text-lg font-medium text-white text-opacity-75">
                            06 41 51 61 81
                        </h2>
                        <p className="my-2 text-5xl font-bold text-white">
                            Anoual
                        </p>
                        <Link
                            href="/menu/anoual"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Commander
                        </Link>
                    </div>
                </div>
                <div className="relative flex">
                    <img
                        src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-center py-20">
                        <h2 className="text-lg font-medium text-white text-opacity-75">
                            06 41 51 61 81
                        </h2>
                        <p className="my-2 text-5xl font-bold text-white">
                            Plamier
                        </p>
                        <Link
                            href="/menu/palmier"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Commander
                        </Link>
                    </div>
                </div>
                <div className="relative flex w-full lg:col-span-2 lg:w-1/2 lg:mx-auto">
                    <img
                        src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    />
                    <div className="relative w-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-center py-20">
                        {/* <h2 className="text-lg font-medium text-white text-opacity-75">
                            06 41 51 61 81
                        </h2> */}
                        <p className="my-2 text-5xl font-bold text-white">
                            Traiteur
                        </p>
                        <Link
                            href="/traiteur"
                            className="mt-4 font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
                        >
                            Demender un devis
                        </Link>
                    </div>
                </div>
            </div>
            <>
                {/* This example requires Tailwind CSS v2.0+ */}
                <footer className="bg-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-6 md:order-2">
                            <a
                                href="https://web.facebook.com/Cucina.Napoli/"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/cucina.napoli/"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/cucina_napoli"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center text-base text-gray-400">
                                © {new Date().getFullYear()} Cucina Napoli.
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        </>
    );
}

export default Home;
