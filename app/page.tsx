import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
      <main id="top" className="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
          <GoogleAnalytics />
          <ScrollIndicator />
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
