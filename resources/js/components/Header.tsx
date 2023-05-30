import {
    SearchIcon,
    PhoneIcon,
    LocationIcon,
    ArrowLeftIcon,
    UserIcon,
} from "../icons";
import FilterButtons from "./FilterButtons";
import { Link } from "@inertiajs/react";
import { useAtom } from "jotai";
import { searchTextAtom } from "../stores/products";

function Header() {
    const [search, setSearch] = useAtom(searchTextAtom);
    return (
        <>
            <div className="border-b border-b-light-gray z-50">
                <div className="flex items-center gap-4 bg-white px-6 py-4">
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/img/logo.webp"
                            alt="Logo"
                            className="block w-28"
                        />
                    </Link>
                    <div className="flex-1">
                        <div className="rounded-lg bg-light-primary overflow-hidden w-full items-center hidden lg:flex">
                            <div className="px-3 text-gray-600">
                                <SearchIcon />
                            </div>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Rechercher un plat"
                                className="px-2 py-4 flex-1 placeholder:text-gray-600 text-sm font-semibold bg-light-primary border-0"
                            />
                        </div>
                    </div>
                    <a
                        href="to:124565898"
                        className="flex-shrink-0 border-2 border-primary text-primary rounded-full w-12 h-12 grid place-items-center hover:text-white hover:bg-primary transition"
                    >
                        <PhoneIcon />
                    </a>
                    <a
                        href="#"
                        className="flex-shrink-0 border-2 border-primary text-primary rounded-full w-12 h-12 grid place-items-center hover:text-white hover:bg-primary transition"
                    >
                        <LocationIcon />
                    </a>
                    <Link
                        href="/profile"
                        className="flex-shrink-0 border-2 border-primary text-primary rounded-full w-12 h-12 grid place-items-center hover:text-white hover:bg-primary transition"
                    >
                        <UserIcon />
                    </Link>
                    <Link
                        href="/"
                        className="flex-shrink-0 hidden md:flex text-xs text-white bg-primary rounded-full px-6 py-3 font-semibold items-center gap-2 hover:opacity-80 transition"
                    >
                        <ArrowLeftIcon />
                        <span>Retour a l'acceuil</span>
                    </Link>
                </div>
                <div className="bg-light-primary overflow-hidden w-full items-center flex lg:hidden">
                    <div className="px-3 text-gray-600">
                        <SearchIcon />
                    </div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Rechercher un plat"
                        className="px-2 py-4 flex-1 placeholder:text-gray-600 text-sm font-semibold bg-light-primary border-0"
                    />
                </div>
            </div>
            <FilterButtons />
        </>
    );
}

export default Header;
