import { FC, useState } from "react";
import styles from "./ProductCard.module.scss";
import { PCEnum, ProductType, Rating } from "@/types";
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

const DetailedRatings: FC<{
  ratings: Rating;
}> = ({ ratings }) => {
  return (
    <div className={styles.detailedRatings}>
      <div className={styles.ratingDetail}>
        <span className={styles.ratingLabel}>Composition Options:</span>
        <div className={styles.ratingValue}>
          <StarRating rating={ratings.compositionOptions} />
          <span>{ratings.compositionOptions.toFixed(1)}</span>
        </div>
      </div>
      <div className={styles.ratingDetail}>
        <span className={styles.ratingLabel}>Processor/Graphics:</span>
        <div className={styles.ratingValue}>
          <StarRating rating={ratings.processorGraphicsCapabilities} />
          <span>{ratings.processorGraphicsCapabilities.toFixed(1)}</span>
        </div>
      </div>
      <div className={styles.ratingDetail}>
        <span className={styles.ratingLabel}>Price/Quality:</span>
        <div className={styles.ratingValue}>
          <StarRating rating={ratings.priceQuality} />
          <span>{ratings.priceQuality.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

const ProductCard: FC<{ product: ProductType }> = ({ product }) => {
  const [showDetailedRatings, setShowDetailedRatings] = useState(false);

  const isPrebuilt = product.type === PCEnum.PREBUILT;

  const avgRating = !isPrebuilt
    ? (product.ratings.compositionOptions +
        product.ratings.processorGraphicsCapabilities +
        product.ratings.priceQuality) /
      3
    : null;

  const toggleDetailedRatings = () => {
    setShowDetailedRatings(!showDetailedRatings);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
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
      </div>

      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{product.title}</h3>

        {!isPrebuilt && avgRating && (
          <div className={styles.productRatingContainer}>
            <div
              className={styles.productRating}
              onClick={toggleDetailedRatings}
            >
              <StarRating rating={avgRating} />
              <span className={styles.ratingValue}>{avgRating.toFixed(1)}</span>
              <button className={styles.ratingToggle}>
                {showDetailedRatings ? "Hide Details" : "View Details"}
              </button>
            </div>
            {showDetailedRatings && (
              <DetailedRatings ratings={product.ratings} />
            )}
          </div>
        )}

        {/* 描述區塊 - 配置類和商業類顯示 */}
        {!isPrebuilt && product.description && (
          <p className={styles.productDescription}>{product.description}</p>
        )}

        {/* 規格區塊 - 預裝類顯示 */}
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

        {/* 操作按鈕 */}
        <div className={styles.productActions}>
          <a href={product.link} className={`${styles.viewButton}`}>
            <span>VIEW DETAILS</span>
          </a>
          <a href={`${product.link}/configure`} className={styles.startButton}>
            <span>START COMPOSING</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
