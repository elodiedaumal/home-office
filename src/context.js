import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const products_url = 'https://course-api.com/react-store-products';
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState('grid');
  const [loading, setLoading] = useState(true);
  const [singleProduct, setSingleProduct] = useState([]);
  const [text, setText] = useState('');
  const [selectCategory, setSelectCategory] = useState('all');
  const [selectCompany, setSelectCompany] = useState('all');
  const [selectColors, setSelectColors] = useState('all');
  const [selectShipping, setSelectShipping] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('price-lowest');
  const [bgcolor, setBgcolor] = useState();

  //////////////////////////////////////////////////////
  // NAVBAR CONTEXT
  /////////////////////////////////////////////////////

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //////////////////////////////////////////////////////
  // FETCH PRODUCTS
  /////////////////////////////////////////////////////

  async function getProducts() {
    setLoading(true);
    try {
      const response = await axios.get(products_url);
      const data = response.data;

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [text]);

  async function getSingleProduct(url) {
    setLoading(true);

    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      setSingleProduct(singleProduct);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  //////////////////////////////////////////////////////
  // PRODUCT FILTER PAGE
  /////////////////////////////////////////////////////

  const toggleGrid = () => {
    setTheme('grid');
  };
  const toggleList = () => {
    setTheme('list');
  };

  const SortedProducts = (e) => {
    setValue(e.target.value);
  };

  const handleActiveClick = (e) => {
    setIsActive(true);
  };
  const clearfilter = (e) => {
    setText('');
    setSelectCategory('all');
    setSelectCompany('all');
    setSelectColors('all');
    setBgcolor('');
  };

  const selectAllColors = (e) => {
    setSelectColors('all');
    setBgcolor('');
  };
  const selectFreeShipping = (e) => {
    setSelectShipping(!selectShipping);
  };

  //////////////////////////////////////////////////////
  // CART COMPONENT
  /////////////////////////////////////////////////////

  const [amountsingle, setAmountsingle] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState(0);

  const increasebtn = () => {
    if (amountsingle < singleProduct.stock) {
      setAmountsingle(amountsingle + 1);
    }
    if (amountsingle === singleProduct.stock)
      setAmountsingle(singleProduct.stock);
  };
  const deacresebtn = () => {
    if (amountsingle > 0) {
      setAmountsingle(amountsingle - 1);
    }
    if (amountsingle <= 1) setAmountsingle(1);
  };

  const addToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
    setAmountsingle(1);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleClick,
        isSidebarOpen,
        getProducts,
        products,
        theme,
        loading,
        setLoading,
        closeSidebar,
        toggleGrid,
        toggleList,
        getSingleProduct,
        singleProduct,
        text,
        setText,
        selectCategory,
        setSelectCategory,
        SortedProducts,
        value,
        selectCompany,
        setSelectCompany,
        selectColors,
        setSelectColors,
        handleActiveClick,
        isActive,
        clearfilter,
        selectAllColors,
        setBgcolor,
        bgcolor,
        selectFreeShipping,
        selectShipping,
        deacresebtn,
        amountsingle,
        increasebtn,
        totalPrice,
        addToCart,
        totalQuantity,
        cartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
