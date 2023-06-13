import AppLayout from "@/Layouts/AppLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, transform } = useForm({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        transform((data) => ({
            ...data,
            name: `${data.prenom} ${data.nom}`,
        }));

        post("/register");
    };
    return (
        <AppLayout>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/img/logo.webp"
                        alt="Cucina Napoli"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        S'inscrire
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{" "}
                        <Link
                            href="/login"
                            className="font-medium text-green-600 hover:text-green-500"
                        >
                            se connecter à votre compte
                        </Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
                    {/* Errors Card */}
                    {Object.keys(errors).length !== 0 && (
                        <div className="bg-red-50 rounded-lg mb-4">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Erreurs
                                </h3>
                                <div className="mt-2 max-w-xl text-sm text-gray-700">
                                    <ul className="list-disc pl-4 space-y-1">
                                        {Object.keys(errors).map((key) => (
                                            <li key={key}>
                                                {
                                                    errors[
                                                        key as keyof typeof errors
                                                    ]
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="nom"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nom
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            value={data.nom}
                                            onChange={(e) =>
                                                setData("nom", e.target.value)
                                            }
                                            id="nom"
                                            type="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="prenom"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Prenom
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
                                            id="prenom"
                                            type="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Adresse email
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mot de passe
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Confirmation du mot de passe
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        id="password_confirmation"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Se souvenir de moi
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    disabled={processing}
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-200 disabled:text-gray-900 disabled:cursor-not-allowed"
                                >
                                    s'inscrire
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
