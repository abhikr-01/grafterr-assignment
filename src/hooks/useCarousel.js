import { useState, useCallback, useEffect, useRef } from 'react';

export const useCarousel = (totalItems, itemsPerView) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Reset index when itemsPerView changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, totalItems - itemsPerView)));
  }, [itemsPerView, totalItems]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }, [goNext, goPrev]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return {
    currentIndex,
    canGoPrev,
    canGoNext,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
