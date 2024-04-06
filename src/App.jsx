import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  {
    path: '/products/:productId',
    element: <ProductDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
