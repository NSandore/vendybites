import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Features from "./components/Features";
import RequestForm from "./components/RequestForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <Hero />
      <Marquee />
      <Products />
      <Features />
      <RequestForm />
      <Footer />
    </main>
  );
}
