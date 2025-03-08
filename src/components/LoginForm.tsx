import { useForm } from "react-hook-form";
import { FormInput } from "../types/FormInput";

import useManageUser from "../hooks/useManageUser";

import styles from "../app/login/page.module.css";
import Button from "./ui/Button/Button";

export default function LoginForm() {
    const { register, handleSubmit } = useForm<FormInput>();
    const { signUserIn, isLoading } = useManageUser();

    return (
        <div className={styles.logginWrapper}>
            <form className={styles.loginFormContainer} onSubmit={handleSubmit(signUserIn)}>
                <h1>HELL&apos;S HEROES HQ</h1>
                <h2>Login</h2>
                {isLoading && <div>Loading...</div>}
                <input type="email" {...register("email")} placeholder="Email" />
                <input type="password" {...register("password")} placeholder="Password" />
                <Button btnType="primary" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
