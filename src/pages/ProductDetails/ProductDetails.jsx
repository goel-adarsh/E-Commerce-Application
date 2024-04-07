import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ProductDetails.css';
import Error from '../../components/Error/Error';

export default function ProductDetails() {
  let { productId } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [productDetail, setproductDetail] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error('Unable to load the products :(');
        }
        console.log(responseData);
        setproductDetail(responseData);
      } catch (error) {
        setError({
          message: 'Unable to load the Product Details :(',
        });
      }
      setIsFetching(false);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {error && <Error title={' An error occurred!'} message={error.message} />}
      {!error && isFetching && (
        <div className="card" style={{ alignItems: 'center' }}>
          <span className="card-loader"></span>
        </div>
      )}
      {!error && !isFetching && (
        <div class="card">
          <div class="imageBox">
            <img src={productDetail.images?.[0]} alt={productDetail.title} />
          </div>
          <div class="details">
            <div class="content">
              <h2 className="title">{productDetail.title}</h2>
              <span className="category">{productDetail.category} </span>{' '}
              <span
                style={{
                  textTransform: 'lowercase',
                  fontWeight: '200',
                  letterSpacing: '0em',
                }}
              >
                {' '}
                by
              </span>
              <h1 className="brand">{productDetail.brand}</h1>
              <span className="rating">{productDetail.rating}⭐</span>
              <p className="description">{productDetail.description}</p>
              <h3 className="discounted-price">
                ${' '}
                {Math.round(
                  ((100 - Number(productDetail.discountPercentage)) / 100) *
                    productDetail.price
                )}
              </h3>
              <h6 className="price">M.R.P.-$ {productDetail.price}</h6>
              <h3 className="discounted-percentage">
                -{productDetail.discountPercentage}%
              </h3>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
