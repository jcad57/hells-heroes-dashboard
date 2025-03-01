import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../data/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

// import { FormInput } from "../data/types";

export default function useManageUser() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    async function signUserOut() {
        try {
            await signOut(auth);
            console.log("User signed out successfully!");
            router.push("/");
        } catch (error) {
            console.error("Error signing out:", error);
            alert("Error signing out");
        }
    }

    async function signUserIn(data: { email: string; password: string }) {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false);
                router.push("/dashboard");
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                setIsLoading(false);
            });
    }

    return { signUserOut, signUserIn, isLoading };
}
