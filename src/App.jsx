import { useContent } from './hooks/useContent';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import './styles/global.css';

function App() {
  const {
    heroData,
    featuresData,
    heroLoading,
    featuresLoading,
    heroError,
    featuresError,
    retryHero,
    retryFeatures,
  } = useContent();

  return (
    <div className="app">
      <HeroSection
        heroData={heroData?.hero}
        navData={heroData?.navigation}
        loading={heroLoading}
        error={heroError}
        onRetry={retryHero}
      />
      <FeaturesSection
        featuresData={featuresData}
        loading={featuresLoading}
        error={featuresError}
        onRetry={retryFeatures}
      />

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '40px 24px',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem'
      }}>
        © {new Date().getFullYear()} Grafterr. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
