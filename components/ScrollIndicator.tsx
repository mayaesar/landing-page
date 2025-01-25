'use client'

import {motion, useScroll} from "motion/react";

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                zIndex: 20,
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                originX: 0,
                backgroundColor: "#be185d",
            }}
        />
    )
}