"use client";

import { FC } from "react";
import { Tab, Nav } from "react-bootstrap";
import styles from "./ProductTabs.module.scss";
import { PCEnum } from "@/types";
import {
  assembleProductList,
  businessProductList,
  prebuiltProductList,
} from "@/MOCK_data";
import ProductCard from "../ProductCard";

const ProductTabs: FC = () => {
  return (
    <section id="products" className={styles.productsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>PRODUCTS</h2>

        <Tab.Container defaultActiveKey={PCEnum.ASSEMBLE}>
          <div className={styles.productsTabs}>
            <Nav className={styles.navTabsCustom}>
              <Nav.Item>
                <Nav.Link
                  eventKey={PCEnum.ASSEMBLE}
                  className={styles.categoryTab}
                >
                  ASSEMBLE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey={PCEnum.BUSINESS}
                  className={styles.categoryTab}
                >
                  BUSINESS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey={PCEnum.PREBUILT}
                  className={styles.categoryTab}
                >
                  PREBUILT
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey={PCEnum.ASSEMBLE}>
                <div className={styles.productsGrid}>
                  {assembleProductList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey={PCEnum.BUSINESS}>
                <div className={styles.productsGrid}>
                  {businessProductList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey={PCEnum.PREBUILT}>
                <div className={styles.productsGrid}>
                  {prebuiltProductList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
};

export default ProductTabs;
