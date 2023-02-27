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
  const [selectCategory, setSelectCategory] = useState('');
  const [selectCompany, setSelectCompany] = useState('');
  const [selectColors, setSelectColors] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('price-lowest');

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
