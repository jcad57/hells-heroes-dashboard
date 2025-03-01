"use client";

import Image from "next/image";
import { auth } from "@/data/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./page.module.css";
import loadingImage from "../assets/images/rock.png";
import logo from "../assets/images/hhvii-logo.png";

export default function Home() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) {
                router.push("/dashboard");
            } else {
                router.push("/login");
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    });

    return (
        <main>
            <div className={styles.authPageContainer}>
                <Image className={styles.logo} src={logo} width={300} height={150} alt="logo" />
                <div>
                    <Image className={styles.authImage} src={loadingImage} alt="rocker hands" width={90} height={90} />
                </div>
                <div>
                    <p className={styles.authText}>
                        {isLoading ? <span>Loading...</span> : <span>Redirecting...</span>}
                    </p>
                </div>
            </div>
        </main>
    );
}
