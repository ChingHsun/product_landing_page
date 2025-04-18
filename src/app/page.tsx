import Hero from "@/components/Hero";
import Header from "../components/Header";
import ProductTabs from "@/components/ProductTabs";

export default function Home() {
  return (
    <div className="hacker-theme">
      <Header />
      <Hero />
      <ProductTabs />
    </div>
  );
}
