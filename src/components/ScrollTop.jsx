import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const smoothScroll = () => {
            const start = window.scrollY;
            const duration = 600;
            let startTime = null;

            const easeInOut = (t) => {
                return t * t * (3 - 2 * t);
            };
            const animation = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const time = currentTime - startTime;
                const progress = Math.min(time / duration, 1);

                const ease = easeInOut(progress);

                window.scrollTo(0, start * (1 - ease));

                if (time < duration) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        }
        smoothScroll();
    }, [pathname]);
    return null
}

export default ScrollTop;