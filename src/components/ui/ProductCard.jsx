import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, tagline, description, icon, color, features } = product;

  return (
    <div className={styles.card} style={{ '--card-accent': color }}>
      <div className={styles.iconWrapper} style={{ background: `${color}22` }}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.accentLine} style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.tagline}>{tagline}</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, i) => (
          <li key={i} className={styles.featureItem}>
            <span className={styles.checkDot} style={{ background: color }} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
