import { Link, useForm } from "@inertiajs/react";

function Traiteur() {
    const { data, setData, post, processing, errors } = useForm({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        event_type: "",
        autre: "",
        date: "",
        qty: 1,
        notes: "",
        adress: "",
    });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        post("/devis");
    };
    return (
        <div className="bg-white">
            <header className="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
                <Link href="/">
                    <img src="/img/logo.webp" alt="" className="h-12 w-auto" />
                </Link>
            </header>

            <main className="max-w-4xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
                <form onSubmit={handleSubmit}>
                    <div className="mt-6 grid grid-cols-2 gap-3">
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
                                    required
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                                        setData("prenom", e.target.value)
                                    }
                                    required
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Telephone
                        </label>
                        <div className="mt-1">
                            <input
                                value={data.telephone}
                                onChange={(e) =>
                                    setData("telephone", e.target.value)
                                }
                                required
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            htmlFor="adress"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Adress
                        </label>
                        <div className="mt-1">
                            <input
                                value={data.adress}
                                onChange={(e) =>
                                    setData("adress", e.target.value)
                                }
                                required
                                type="text"
                                name="adress"
                                id="adress"
                                autoComplete="tel"
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            htmlFor="event_type"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Type d'evenements
                        </label>
                        <div className="mt-1">
                            <select
                                value={data.event_type}
                                onChange={(e) =>
                                    setData("event_type", e.target.value)
                                }
                                name="event_type"
                                id="event_type"
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            >
                                <option disabled value="">
                                    Select Type
                                </option>
                                <option value="mariage">Mariage</option>
                                <option value="annive">Annive</option>
                                <option value="autre">autre</option>
                            </select>
                        </div>
                    </div>
                    {data.event_type === "autre" && (
                        <div className="mt-6">
                            <div className="">
                                <input
                                    value={data.autre}
                                    onChange={(e) =>
                                        setData("autre", e.target.value)
                                    }
                                    name="autre"
                                    placeholder="Type d'evenment ..."
                                    type="text"
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    )}
                    <div className="mt-6">
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Date
                        </label>
                        <div className="mt-1">
                            <input
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                                required
                                type="date"
                                name="date"
                                id="date"
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            htmlFor="qty"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Quantité
                        </label>
                        <div className="mt-1">
                            <input
                                value={data.qty}
                                onChange={(e) =>
                                    setData("qty", parseInt(e.target.value))
                                }
                                required
                                type="number"
                                name="qty"
                                id="qty"
                                min={0}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
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
                                    setData("notes", e.target.value)
                                }
                                required
                                name="notes"
                                id="notes"
                                rows={3}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="mt-6 w-full bg-primary border border-transparent rounded-md shadow-sm p-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                    >
                        {processing ? "Loading ..." : "Demander un devis"}
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Traiteur;
