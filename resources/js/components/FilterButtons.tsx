import React from "react";
import { useSetAtom, useAtomValue } from "jotai";
import { categoriesAtome, selectedCategoryAtom } from "../stores/products";
import { asset, image_path } from "../lib/utils";
const PizzaIcon = "/img/pizza.svg";

function cls(active: boolean, activeClasses: string, inactiveClasses: string) {
    return active ? activeClasses : inactiveClasses;
}

type FilterButtonProps = {
    image: string;
    text: string;
    filter: string;
    active: boolean;
};

function FilterButton({ image, text, filter, active }: FilterButtonProps) {
    const setSelectedCategory = useSetAtom(selectedCategoryAtom);

    const selectCategory = () => {
        setSelectedCategory(filter);
    };

    return (
        <a
            href={`#${filter}`}
            className={`rounded-full px-6 py-2 flex items-center gap-2 hover:bg-opacity-80 transition flex-shrink-0 ${cls(
                active,
                "bg-primary",
                "bg-light-gray"
            )}`}
            onClick={selectCategory}
        >
            <img src={image} alt="pizza" className="w-5 h-5" />
            <span
                className={cls(
                    active,
                    "font-semibold text-white",
                    "font-medium text-dark-gray"
                )}
            >
                {text}
            </span>
        </a>
    );
}

function FilterButtons() {
    const categories = useAtomValue(categoriesAtome);
    const selectedCategory = useAtomValue(selectedCategoryAtom);
    return (
        <div className="w-full shadow-xl shadow-[#00000006] z-50">
            <div className="px-6 py-4 bg-white flex items-center gap-4 w-full overflow-x-scroll scrollbar-hide">
                {categories.map((category) => (
                    <FilterButton
                        key={category.id}
                        text={category.name}
                        filter={category.name}
                        image={image_path(category.image)}
                        active={category.name === selectedCategory}
                    />
                ))}

                {/* <button
					className="rounded-full px-6 py-2 flex items-center gap-2 hover:bg-opacity-80 transition bg-gray flex-shrink-0"
					onClick={clearFilters}
				>
					<span className="font-medium text-dark-gray">&times; Clear Filters</span>
				</button> */}
            </div>
        </div>
    );
}

export default FilterButtons;
