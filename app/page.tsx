import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Features from "./components/Features";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <Features />
      <Locations />
      <Footer />
    </main>
  );
}
