'use client'
import { motion, useScroll } from "motion/react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Home() {
    const { scrollYProgress } = useScroll()

  return (
      <main className="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
          <GoogleAnalytics />
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
          <div className="md:h-dvh flex flex-col gap-3 py-3 md:py-6">
              <Header/>
              <Hero/>
          </div>
          <HowTo/>
          <div className="h-dvh flex flex-col items-center justify-between">
              <AboutUs />
              <Footer />
          </div>
      </main>
  );
}
