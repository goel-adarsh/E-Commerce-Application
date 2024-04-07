import { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';

export default function HomePage() {
  const [availableProducts, setAvailableProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  useEffect(() => {
    async function fetchProducts() {
      setIsFetching(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=0`
          // ?limit=10&skip=${
          //   (currentPage - 1) * 10
        );
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error('');
        }
        setAvailableProducts(responseData.products);
      } catch (error) {
        console.log(error);
        setError({
          message: 'Unable to load the products :(',
        });
      }
      setIsFetching(false);
    }
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentRecords = availableProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Header />
      {!error && <Products products={currentRecords} isLoading={isFetching} />}
      {!error && (
        <Pagination
          totalProducts={availableProducts.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {error && <Error title={' An error occurred!'} message={error.message} />}
    </>
  );
}
