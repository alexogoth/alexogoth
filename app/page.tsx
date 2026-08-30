import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FadeIn delay={0.1}>
        <About />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Courses />
      </FadeIn>

      <FadeIn delay={0.3}>
        <HowItWorks />
      </FadeIn>

      <FadeIn delay={0.4}>
        <WhyUs />
      </FadeIn>

      <FadeIn delay={0.5}>
        <Testimonials />
      </FadeIn>

      <FadeIn delay={0.6}>
        <FAQ />
      </FadeIn>

      <FadeIn delay={0.7}>
        <Footer />
      </FadeIn>
    </>
  );
}