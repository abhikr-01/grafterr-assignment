import styles from './FloatingShape.module.css';

const FloatingShape = ({ type, color, size, width, height, top, right, bottom, left, delay = '0s' }) => {
  const shapeStyle = {
    position: 'absolute',
    top,
    right,
    bottom,
    left,
    animationDelay: delay,
    opacity: 0.18,
    pointerEvents: 'none',
  };

  if (type === 'circle') {
    return (
      <div
        className={styles.floatingCircle}
        style={{
          ...shapeStyle,
          width: size,
          height: size,
          borderRadius: '50%',
          background: color,
        }}
      />
    );
  }

  if (type === 'rectangle') {
    return (
      <div
        className={styles.floatingRect}
        style={{
          ...shapeStyle,
          width: width || 180,
          height: height || 260,
          borderRadius: 24,
          background: color,
        }}
      />
    );
  }

  return null;
};

export default FloatingShape;
