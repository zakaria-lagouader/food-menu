import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Home({}: PageProps) {
    return (
        <>
            <Head title="Home" />
            <div className="w-full min-h-screen"></div>
        </>
    );
}
