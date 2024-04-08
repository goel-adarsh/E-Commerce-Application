import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Error from '../../components/Error/Error';
import ProductDetailsCard from '../../components/ProductDetailsCard/ProductDetailsCard';
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
        <div className="card">
          <span className="cardLoader"></span>
        </div>
      )}
      {!error && !isFetching && (
        <ProductDetailsCard
          productDetail={productDetail}
          currentImage={currentImage}
          handleCurrentImage={handleCurrentImage}
        />
      )}
    </>
  );
}
