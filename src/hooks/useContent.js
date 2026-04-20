import { useState, useEffect, useCallback } from 'react';
import { fetchHeroContent, fetchFeaturesContent } from '../services/api';

export const useContent = () => {
  const [heroData, setHeroData] = useState(null);
  const [featuresData, setFeaturesData] = useState(null);
  const [heroLoading, setHeroLoading] = useState(true);
  const [featuresLoading, setFeaturesLoading] = useState(true);
  const [heroError, setHeroError] = useState(null);
  const [featuresError, setFeaturesError] = useState(null);

  const loadHero = useCallback(async () => {
    setHeroLoading(true);
    setHeroError(null);
    try {
      const data = await fetchHeroContent();
      setHeroData(data);
    } catch (err) {
      setHeroError('Failed to load hero content. Please try again.');
    } finally {
      setHeroLoading(false);
    }
  }, []);

  const loadFeatures = useCallback(async () => {
    setFeaturesLoading(true);
    setFeaturesError(null);
    try {
      const data = await fetchFeaturesContent();
      setFeaturesData(data);
    } catch (err) {
      setFeaturesError('Failed to load features content. Please try again.');
    } finally {
      setFeaturesLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHero();
    loadFeatures();
  }, [loadHero, loadFeatures]);

  return {
    heroData,
    featuresData,
    heroLoading,
    featuresLoading,
    heroError,
    featuresError,
    retryHero: loadHero,
    retryFeatures: loadFeatures,
  };
};
