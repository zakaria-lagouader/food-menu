import { PageProps } from "@/types";

export default function Index({ auth }: PageProps) {
    return <div>Hello {auth.user.name}</div>;
}
