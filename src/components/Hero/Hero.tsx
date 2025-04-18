import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 ">
            <div className={styles.productImageContainer}>
              <div className={styles.terminalFrame}>
                <div className={styles.terminalBody}>
                  <Image
                    src="/hero-img.png"
                    alt="High-performance Gaming and Business Computer Products"
                    className="img-fluid"
                    style={{ maxWidth: "500px", maxHeight: "500px" }}
                    width={500}
                    height={500}
                    loading="lazy"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <h1 className={styles.glitch} data-text="ELITE COMPUTING">
              COMPUTER-BESTEL
            </h1>
            <h2 className={styles.subtitle}>
              BEST COMPUTER PRODUCTS & SERVICES
            </h2>
            <div className={styles.uspContainer}>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}>⚡</div>
                <div className={styles.uspText}>ASSEMBLE GAMING PRODUCTS</div>
              </div>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}>💼</div>
                <div className={styles.uspText}>BUSINESS-GRADE COMPUTERS</div>
              </div>
              <div className={styles.uspItem}>
                <div className={styles.uspIcon}>🔧</div>
                <div className={styles.uspText}>PRE-BUILT GAMING PCs</div>
              </div>
            </div>
            <div className={styles.ctaContainer}>
              <a href="#pre-built" className="btn btn-primary btn-lg">
                GET YOUR COMPUTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
