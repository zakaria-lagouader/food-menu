import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    return (
        <div className="w-full h-screen grid place-items-center">
            <Head title="Register" />
            <form onSubmit={handleSubmit}>
                <Stack gap={6} direction="column">
                    <FormControl isRequired>
                        <FormLabel>name</FormLabel>
                        <Input
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </FormControl>
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
                    <FormControl isRequired>
                        <FormLabel>Password Confirmation</FormLabel>
                        <Input
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type="password"
                        />
                    </FormControl>
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
