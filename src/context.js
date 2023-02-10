import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const products_url = 'https://course-api.com/react-store-products';

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  async function getFeatured() {
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
    getFeatured();
  }, []);

  return (
    <AppContext.Provider
      value={{
        handleClick,
        isSidebarOpen,
        getFeatured,
        products,
        loading,
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
