import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Error from '../../components/Error/Error';
import { fetchData } from '../../utils/fetchData';

import './ProductDetails.css';

export default function ProductDetails() {
  let { productId } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [productDetail, setproductDetail] = useState({});
  const [error, setError] = useState();
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      try {
        const responseData = await fetchData(`products/${productId}`);
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

  function handleCurrentImage(image) {
    setCurrentImage(image);
  }

  return (
    <>
      {error && <Error title={' An error occurred!'} message={error.message} />}
      {!error && isFetching && (
        <div className="card" style={{ alignItems: 'center' }}>
          <span className="card-loader"></span>
        </div>
      )}
      {!error && !isFetching && (
        <div className="card">
          <div className="imageBox">
            <img
              src={currentImage || productDetail.images?.[0]}
              alt={productDetail.title}
              style={{ width: '100%', height: '60%', overflow: 'hidden' }}
            />

            <ul>
              {productDetail.images?.map((image, index) => (
                <li key={index}>
                  <img
                    style={{
                      width: '60px',
                      height: '60px',
                      marginLeft: '50px',
                      marginTop: '24px',
                    }}
                    src={image}
                    alt=""
                    onClick={() => handleCurrentImage(image)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="details">
            <div className="content">
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
