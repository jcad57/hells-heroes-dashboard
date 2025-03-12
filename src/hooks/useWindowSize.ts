"use client";

import { useEffect, useState } from "react";
const MOBILE_BREAK_POINT = 810;

export function useWindowSize() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAK_POINT : false
    );

    useEffect(() => {
        const watchResize = () => {
            if (window.innerWidth <= MOBILE_BREAK_POINT) setIsMobile(true);
            else setIsMobile(false);
        };
        window.addEventListener("resize", watchResize);

        return () => window.removeEventListener("resize", watchResize);
    }, []);

    return { isMobile };
}
