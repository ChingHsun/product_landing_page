import Hero from "@/components/Hero";
import Header from "../components/Header";
import { productList } from '@/MOCK_data';
import styles from "./page.module.scss";
import Product from '@/components/Product';

export default function Home() {
  return (
    <div className="hacker-theme">
      <Header />
      <Hero />

      <section id="products" className={styles.productsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>FEATURED PRODUCTS</h2>
          <div className={styles.productsGrid}>
            {productList.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
