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
  const [filterColor, setFfilterColor] = useState([]);

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

    setFfilterColor('');
  };

  const selectAllColors = (e) => {
    setSelectColors('all');

    setFfilterColor('');
  };
  const selectFreeShipping = (e) => {
    setSelectShipping(!selectShipping);
  };

  //////////////////////////////////////////////////////
  // CART COMPONENT
  /////////////////////////////////////////////////////

  const [amountsingle, setAmountsingle] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartId, setCartId] = useState('');

  let foundCartProduct;
  let index;

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

  const addToCart = (product, quantity, color) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantity((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      product.color = color;

      setCartItems([...cartItems, { ...product, id: product.id + color }]);
    }
  };

  const deleteCartItem = (product) => {
    foundCartProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundCartProduct.price * foundCartProduct.quantity
    );
    setTotalQuantity(
      (prevTotalQuantity) => prevTotalQuantity - foundCartProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundCartProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id);

    if (value === 'inc') {
      if (foundCartProduct.quantity < foundCartProduct.stock) {
        setCartItems([
          ...newCartItems,
          {
            ...foundCartProduct,
            quantity: foundCartProduct.quantity + 1,
          },
        ]);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice + foundCartProduct.price
        );
      }
    } else if (value === 'desc') {
      if (foundCartProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          {
            ...foundCartProduct,
            quantity: foundCartProduct.quantity - 1,
          },
        ]);
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice - foundCartProduct.price
        );
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
      }
    }
  };
  const clearCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
    setTotalPrice(0);
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
        selectFreeShipping,
        selectShipping,
        deacresebtn,
        amountsingle,
        increasebtn,
        totalPrice,
        addToCart,
        totalQuantity,
        cartItems,
        toggleCartItemQuantity,
        filterColor,
        setFfilterColor,
        clearCart,
        deleteCartItem,
        cartId,
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
