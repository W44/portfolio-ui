import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Uses Intersection Observer for performance
 * Adds 'animate-in' class when element becomes visible
 */
export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            },
            defaultOptions
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return ref;
};

export default useScrollAnimation;
