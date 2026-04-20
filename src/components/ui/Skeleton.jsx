import styles from './Skeleton.module.css';

const Skeleton = ({ width = '100%', height = '20px', borderRadius = '8px', className = '' }) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
};

export const SkeletonHero = () => (
  <div className={styles.heroSkeleton}>
    <Skeleton width="60%" height="24px" borderRadius="12px" />
    <Skeleton width="80%" height="72px" borderRadius="16px" className={styles.mt16} />
    <Skeleton width="75%" height="72px" borderRadius="16px" className={styles.mt8} />
    <Skeleton width="55%" height="24px" borderRadius="12px" className={styles.mt24} />
    <Skeleton width="45%" height="20px" borderRadius="12px" className={styles.mt8} />
    <div className={styles.btnSkeleton}>
      <Skeleton width="160px" height="54px" borderRadius="50px" />
    </div>
  </div>
);

export const SkeletonCard = () => (
  <div className={styles.card}>
    <Skeleton width="56px" height="56px" borderRadius="16px" />
    <Skeleton width="70%" height="28px" borderRadius="8px" className={styles.mt20} />
    <Skeleton width="50%" height="18px" borderRadius="8px" className={styles.mt8} />
    <Skeleton width="100%" height="16px" borderRadius="8px" className={styles.mt20} />
    <Skeleton width="90%" height="16px" borderRadius="8px" className={styles.mt8} />
    <Skeleton width="95%" height="16px" borderRadius="8px" className={styles.mt8} />
  </div>
);

export default Skeleton;
