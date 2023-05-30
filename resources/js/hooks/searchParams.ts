import { atom, useAtom } from "jotai";

const searchParamsAtom = atom<URLSearchParams>(
    new URL(window.location.href).searchParams
);

type TParams = {
    [k: string]: string;
};

export function useSearchParams(): [
    URLSearchParams,
    (params: TParams) => void
] {
    const url = new URL(window.location.href);
    const [sParams, setSParams] = useAtom(searchParamsAtom);

    function setSearchParams(params: TParams) {
        for (const key of url.searchParams.keys()) {
            url.searchParams.delete(key);
        }
        for (const key in params) {
            url.searchParams.set(key, params[key]);
        }
        setSParams(url.searchParams);
        window.history.pushState({}, "", url.toString());
    }
    return [sParams, setSearchParams];
}
