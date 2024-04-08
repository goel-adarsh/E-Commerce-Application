import { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import { fetchData } from '../utils/fetchData';

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
        const responseData = await fetchData('products?limit=0');
        setAvailableProducts(responseData.products);
      } catch (error) {
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

  console.log('Curr Pg ' + currentPage);

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
