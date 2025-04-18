import Hero from "@/components/Hero";
import Header from "../components/Header";
import ProductTabs from "@/components/ProductTabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="hacker-theme">
      <Header />
      <Hero />
      <ProductTabs />
      <Footer />
    </div>
  );
}
