import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

const loadingAtom = atom(false);
export default function Loading() {
    const [isLoading, setIsLoading] = useAtom(loadingAtom);
    const router = useRouter();
    useEffect(() => {
        const handleStart = (url: string) => {
            url !== router.pathname && setIsLoading(true);
        };
        const handleComplete = (url: string) => {
            url !== router.pathname &&
                setTimeout(() => setIsLoading(false), 500);
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
        };
    }, []);
    return (
        <div
            className={`fixed z-50 top-0 left-0 w-screen h-screen transition-all duration-300 bg-primary ${
                !isLoading && "opacity-0 pointer-events-none"
            }`}
        >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8 text-white font-mono text-4xl animate-pulse capitalize">
                loading...
            </span>
        </div>
    );
}
