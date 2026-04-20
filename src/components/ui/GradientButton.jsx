import styles from './GradientButton.module.css';

const GradientButton = ({ children, href, onClick, size = 'md', className = '' }) => {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${styles.btn} ${styles[size]} ${className}`}
    >
      <span className={styles.inner}>{children}</span>
    </Tag>
  );
};

export default GradientButton;
