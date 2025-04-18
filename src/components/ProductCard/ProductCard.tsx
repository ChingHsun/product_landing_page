import { FC } from "react";
import styles from "./ProductCard.module.scss";
import { PCEnum, ProductType } from "@/types";
import Image from "next/image";

const StarRating: FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.starRating}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className={styles.star}>
          ★
        </span>
      ))}
      {hasHalfStar && <span className={styles.star}>✬</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className={styles.emptyStar}>
          ☆
        </span>
      ))}
    </div>
  );
};

const ProductCard: FC<{ product: ProductType }> = ({ product }) => {
  const isPrebuilt = product.type === PCEnum.PREBUILT;

  const avgRating = !isPrebuilt
    ? (product.ratings.compositionOptions +
        product.ratings.processorGraphicsCapabilities +
        product.ratings.priceQuality) /
      3
    : null;

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <div className={styles.terminalFrame}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalButton}></span>
            <span className={styles.terminalButton}></span>
            <span className={styles.terminalButton}></span>
          </div>
          <div className={styles.terminalBody}>
            <Image
              src={product.imageUrl}
              alt={product.title}
              className={styles.productImage}
              width={300}
              height={300}
            />
            {product.promotion && (
              <div className={styles.promotionTag}>
                <span>{product.promotion.description}</span>
              </div>
            )}
            <div className={styles.productTypeTag}>{product.type}</div>
          </div>
        </div>
      </div>

      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{product.title}</h3>

        {!isPrebuilt && avgRating && (
          <div className={styles.productRating}>
            <StarRating rating={avgRating} />
            <span className={styles.ratingValue}>{avgRating.toFixed(1)}</span>
          </div>
        )}

        {!isPrebuilt && product.description && (
          <p className={styles.productDescription}>{product.description}</p>
        )}

        {isPrebuilt && (
          <div className={styles.specificationsContainer}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>CPU:</span>
              <span className={styles.specValue}>
                {product.specifications.processor}
              </span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>GPU:</span>
              <span className={styles.specValue}>
                {product.specifications.videoCard}
              </span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>RAM:</span>
              <span className={styles.specValue}>
                {product.specifications.memory}
              </span>
            </div>
            {product.specifications.storage && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Storage:</span>
                <span className={styles.specValue}>
                  {product.specifications.storage}
                </span>
              </div>
            )}
          </div>
        )}

        <div className={styles.productDetails}>
          <div className={styles.productPrice}>
            {product.promotion ? (
              <>
                <div className={styles.priceContainer}>
                  <span className={`${styles.originalPrice}`}>
                    <span className={styles.currency}>{product.currency}</span>
                    <span className={styles.price}>
                      {product.basePrice.toFixed(2)}
                    </span>
                  </span>
                  <span className={styles.promotionPrice}>
                    <span className={styles.currency}>{product.currency}</span>
                    <span className={styles.price}>
                      {product.promotion.price.toFixed(2)}
                    </span>
                  </span>
                </div>
              </>
            ) : (
              <>
                <span className={styles.currency}>{product.currency}</span>
                <span className={styles.price}>
                  {product.basePrice.toFixed(2)}
                </span>
              </>
            )}
          </div>
        </div>

        <div className={styles.productActions}>
          <a
            href={product.link}
            className={`btn btn-primary ${styles.viewButton}`}
          >
            <span>VIEW DETAILS</span>
          </a>
          <button className={styles.configureButton}>
            <span>{isPrebuilt ? "BUY NOW" : "CONFIGURE"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
