'use client'

import {ReactNode, useEffect} from "react";

const useMouseMove = (callback: (e: MouseEvent) => void) => {
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            callback(ev);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [callback]);
};

const GradientDiv = ({children}: {children: ReactNode}) => {
    useMouseMove((e) => {
        const html = document.querySelector("html");
        if (!html) return;
        html.style.backgroundImage = `radial-gradient(circle at ${e.pageX}px ${e.pageY}px, rgb(190 24 93) 0%, rgb(253 242 248) 4%)`;
    });

    return (
        <body className="w-screen min-h-dvh h-full flex flex-col">
            {children}
        </body>
    );
}

export default GradientDiv