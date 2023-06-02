export function asset(path: string) {
    return `${window.location.origin}/${path}`;
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
