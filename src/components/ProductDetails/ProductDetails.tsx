import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import styles from './ProductDetails.module.css';

const ProductDetails: React.FC = () => {
  const product = useAppSelector(state => state.product.product);
  if(!product) return null;

  return (
    <div className={styles.productDetails}>
      <div className={styles.details}>
        <img className={styles.image} src={product.image} alt="product-image" />
        <h5 className={styles.title}>{product.title}</h5>
        <p className={styles.subtitle}>{product.subtitle}</p>
      </div>
      <div className={styles.tags}>
        {product.tags.map(tag => (
          <span className={styles.tag} key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
};

export default ProductDetails;