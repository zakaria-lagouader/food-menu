export function asset(path: string) {
    return `${window.location.origin}/${path}`;
}
export function image_path(path: string) {
    return `http://localhost:5000/storage/${path}`;
}
export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
