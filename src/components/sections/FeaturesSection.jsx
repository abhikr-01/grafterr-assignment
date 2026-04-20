import GradientText from '../ui/GradientText';
import Carousel from '../ui/Carousel';
import { SkeletonCard } from '../ui/Skeleton';
import styles from './FeaturesSection.module.css';

const FeaturesSection = ({ featuresData, loading, error, onRetry }) => {
  return (
    <section className={styles.features} id="products">
      <div className={styles.bgAccent} />
      <div className="container">

        {/* Section Header */}
        <div className={styles.header}>
          {loading ? (
            <>
              <div className={styles.skeletonTitle} />
              <div className={styles.skeletonSubtitle} />
            </>
          ) : error ? null : featuresData ? (
            <>
              <h2 className={styles.title}>
                {featuresData.featuresSection.title}{' '}
                <GradientText>{featuresData.featuresSection.titleAccent}</GradientText>
              </h2>
              <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerDot} />
                <span className={styles.dividerLine} />
              </div>
              <p className={styles.subtitle}>
                {featuresData.featuresSection.subtitle}
              </p>
            </>
          ) : null}
        </div>

        {/* Carousel / Cards */}
        {loading && (
          <div className={styles.skeletonCards}>
            {[0, 1, 2].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {error && !loading && (
          <div className={styles.errorState}>
            <span className={styles.errorIcon}>⚠️</span>
            <p className={styles.errorMsg}>{error}</p>
            <button className={styles.retryBtn} onClick={onRetry}>
              Retry
            </button>
          </div>
        )}

        {!loading && !error && featuresData && (
          <div className={styles.carouselContainer}>
            <Carousel
              products={featuresData.featuresSection.products}
              showArrows={featuresData.carousel.showArrows}
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturesSection;
