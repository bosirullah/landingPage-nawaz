import { useEffect, useState, RefObject } from "react";

export const useInView = (
    options?: IntersectionObserverInit
): [RefObject<HTMLDivElement>, boolean] => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { ...options }
        );

        observer.observe(ref);

        return () => {
            observer.unobserve(ref);
        };
    }, [ref, options]);

    return [setRef as unknown as RefObject<HTMLDivElement>, inView];
};
