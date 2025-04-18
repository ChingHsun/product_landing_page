import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className={styles.footerTitle}>COMPUTER-BESTEL</h3>
            <p className={styles.footerText}>
              Your premier destination for high-performance gaming PCs, business
              computers, and custom-built systems with the latest components and
              cutting-edge technology.
            </p>
            <ul className={styles.socialLinks}>
              <li>
                <a
                  href="https://facebook.com/computerbestel"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/computerbestel"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/computerbestel"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h4 className={styles.footerHeading}>Products</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/gaming-pcs">Gaming PCs</Link>
              </li>
              <li>
                <Link href="/business-computers">Business Computers</Link>
              </li>
              <li>
                <Link href="/prebuilt-systems">Pre-built Systems</Link>
              </li>
              <li>
                <Link href="/configurator">Custom Configurator</Link>
              </li>
              <li>
                <Link href="/accessories">Accessories</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h4 className={styles.footerHeading}>Support</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/warranty">Warranty Info</Link>
              </li>
              <li>
                <Link href="/returns">Returns Policy</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Details</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <address className={styles.footerContact}>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Tech Street,
                Digital City, DC 10101
              </p>
              <p>
                <i className="fas fa-phone"></i>{" "}
                <a href="tel:+11234567890">+1 (123) 456-7890</a>
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                <a href="mailto:info@computer-bestel.com">
                  info@computer-bestel.com
                </a>
              </p>
            </address>
            <div className={styles.newsletter}>
              <h5>Subscribe to our newsletter</h5>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                />
                <button type="submit" aria-label="Subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className="row">
            <div className="col-md-6">
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Computer-Bestel. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className={styles.legalLinks}>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/sitemap">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
