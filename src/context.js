import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const products_url = 'https://course-api.com/react-store-products';

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState('grid');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
  }, []);

  const toggleGrid = () => {
    setTheme('grid');
  };
  const toggleList = () => {
    setTheme('list');
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
