import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/componentsGlobalLayout/Navbar';
import Sidebar from './Components/componentsGlobalLayout/Sidebar';
import Footer from './Components/componentsGlobalLayout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Checkout from './Pages/Checkout';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
