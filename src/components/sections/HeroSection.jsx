import GradientText from '../ui/GradientText';
import GradientButton from '../ui/GradientButton';
import FloatingShape from '../ui/FloatingShape';
import { SkeletonHero } from '../ui/Skeleton';
import styles from './HeroSection.module.css';

const HeroSection = ({ heroData, loading, error, onRetry, navData }) => {
  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navInner}`}>
          <a href="/" className={styles.logo}>
            {navData ? (
              <span className={styles.logoText}>Grafterr</span>
            ) : (
              <span className={styles.logoText}>Grafterr</span>
            )}
          </a>
          {navData && (
            <>
              <ul className={styles.navLinks}>
                {navData.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.navLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <a href={navData.cta.href} className={styles.navCta}>
                {navData.cta.label}
              </a>
            </>
          )}
          <button className={styles.mobileMenu} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero} id="hero">
        <div className={styles.bgGlow} />
        <div className={styles.bgGrid} />

        {heroData && (
          <>
            <FloatingShape
              type="circle"
              color="#0D9488"
              size={340}
              top="-80px"
              right="-60px"
            />
            <FloatingShape
              type="rectangle"
              color="#F97316"
              width={180}
              height={260}
              bottom="-40px"
              left="-40px"
            />
          </>
        )}

        <div className={`container ${styles.heroContent}`}>
          {loading && (
            <div className={styles.skeletonWrapper}>
              <SkeletonHero />
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

          {!loading && !error && heroData && (
            <div className={styles.contentInner}>
              <div className={`${styles.badge} fade-in fade-in-delay-1`}>
                <span className={styles.badgeDot} />
                Restaurant Technology Platform
              </div>

              <h1 className={`${styles.headline} fade-in fade-in-delay-2`}>
                <span className={styles.headlinePrefix}>{heroData.headlinePrefix} </span>
                <GradientText>{heroData.headlineGradient}</GradientText>
                {heroData.headlineSuffix && (
                  <span className={styles.headlineSuffix}> {heroData.headlineSuffix}</span>
                )}
              </h1>

              <p className={`${styles.subheadline} fade-in fade-in-delay-3`}>
                {heroData.subheadline}
              </p>

              <div className={`${styles.ctaRow} fade-in fade-in-delay-4`}>
                <GradientButton href={heroData.cta.href} size="lg">
                  {heroData.cta.label} →
                </GradientButton>
                <a href="#learn-more" className={styles.secondaryLink}>
                  See how it works
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className={`${styles.stats} fade-in fade-in-delay-5`}>
                {[
                  { value: '2,400+', label: 'Restaurants' },
                  { value: '98%', label: 'Uptime SLA' },
                  { value: '3x', label: 'Faster service' },
                ].map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
