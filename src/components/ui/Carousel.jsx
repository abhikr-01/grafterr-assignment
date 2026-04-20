import { useState, useEffect, useCallback } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import ProductCard from '../ui/ProductCard';
import styles from './Carousel.module.css';

const getItemsPerView = (width) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const Carousel = ({ products, showArrows }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const itemsPerView = getItemsPerView(windowWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const {
    currentIndex,
    canGoPrev,
    canGoNext,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel(products.length, itemsPerView);

  const translateX = -(currentIndex * (100 / itemsPerView));

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.track}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.inner}
          style={{
            transform: `translateX(${translateX}%)`,
            transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.slide}
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className={styles.controls}>
          <button
            className={`${styles.arrow} ${!canGoPrev ? styles.disabled : ''}`}
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.dots}>
            {products.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
              />
            ))}
          </div>

          <button
            className={`${styles.arrow} ${!canGoNext ? styles.disabled : ''}`}
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
