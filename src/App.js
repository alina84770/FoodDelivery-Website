import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navbar />
        <Home />
        <Footer />
      </>

  },
  {
    path: '/cart',
    element: <>
      <Navbar />
      <Cart />
      <Footer />
    </>
  },
  {
    path: '/checkout',
    element:
      <>
        <Navbar />
        <Checkout />
        <Footer />
      </>
  }

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
