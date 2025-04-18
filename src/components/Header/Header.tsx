import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className={styles.navbarBrand} href="#">
            COMPUTER-<span>BESTEL</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            title="navbar-toggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={styles.navLink} href="#systems">
                  SYSTEMS
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#products">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
