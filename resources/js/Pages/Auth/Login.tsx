import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <div className="w-full h-screen grid place-items-center">
            <form onSubmit={handleSubmit}>
                <Stack gap={6} direction="column">
                    <FormControl isRequired>
                        <FormLabel>email</FormLabel>
                        <Input
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                        />
                    </FormControl>
                    <Link href="/register" className="text-blue-500 underline">
                        Or register
                    </Link>
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        type="submit"
                        loadingText="Loading ..."
                        isLoading={processing}
                    >
                        Register
                    </Button>
                </Stack>
            </form>
        </div>
    );
}
