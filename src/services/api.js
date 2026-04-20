import contentData from '../data/content.json';

const simulateDelay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const randomDelay = () => 1000 + Math.random() * 500; // 1000–1500ms

export const fetchHeroContent = async () => {
  await simulateDelay(randomDelay());
  return {
    navigation: contentData.navigation,
    hero: contentData.hero,
  };
};

export const fetchFeaturesContent = async () => {
  await simulateDelay(randomDelay());
  return {
    featuresSection: contentData.featuresSection,
    carousel: contentData.carousel,
  };
};
