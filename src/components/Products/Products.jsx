import ProductItem from '../ProductItem/ProductItem';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products({ products, isLoading }) {
  return (
    <section>
      <h2>Available Products</h2>
      <ul className="products">
        {isLoading && <p className="fallback-text">Products Loading...</p>}
        {!isLoading && products.length === 0 && (
          <p className="fallback-text">No Products found.</p>
        )}
        {products.length !== 0 &&
          products.map(product => {
            return (
              <li key={product.id} className="product-item">
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
