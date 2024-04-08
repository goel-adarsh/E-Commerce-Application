import ProductItem from '../ProductItem/ProductItem';
import classes from './Products.module.css';
import { Link } from 'react-router-dom';

export default function Products({ products, isLoading }) {
  return (
    <section>
      <h2>Available Products</h2>
      <ul className={classes.products}>
        {isLoading && <span className={classes.loader}></span>}
        {!isLoading && products.length === 0 && (
          <p className={classes.fallbackText}>No Products found.</p>
        )}
        {products.length !== 0 &&
          products.map(product => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <ProductItem item={product} />
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
