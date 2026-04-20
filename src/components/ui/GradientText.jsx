import styles from './GradientText.module.css';

const GradientText = ({ children, gradient, className = '' }) => {
  return (
    <span
      className={`${styles.gradientText} ${className}`}
      style={gradient ? { backgroundImage: gradient } : undefined}
    >
      {children}
    </span>
  );
};

export default GradientText;
