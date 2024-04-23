import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import PromotionalHeader from "./Components/PromotionalHeader";
import Banner from "./Components/Banner";
import { ParallaxProvider } from "react-scroll-parallax";
import CardBanner from "./Components/CardBanner";
import Store from "./Components/Store";
import Favourites from "./Components/Favourites";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [hidePromo, setHidePromo] = useState(true);
  const [openFavourites, setOpenFavourites] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAddToFavourites = (product) => {
    const isAlreadyFavourited = favouriteList.some(
      (favourite) => favourite.productName === product.productName
    );

    if (!isAlreadyFavourited) {
      const newFavouriteList = [...favouriteList, product];
      setFavouriteList(newFavouriteList);
    }
  };

  const onDeleteFavourite = (removedProduct) => {
    setFavouriteList((prevFavouriteList) =>
      prevFavouriteList.filter(
        (product) => product.productName !== removedProduct
      )
    );
  };

  const handleOpenFavourites = () => setOpenFavourites(!openFavourites);
  const handleOpenCart = () => setOpenCart(!openCart);

  const onAddToCart = (product) => {
    const isAlreadyAdded = cartItems.some(
      (cartItem) => cartItem.productName === product.productName
    );

    if (!isAlreadyAdded) {
      const newCartList = [...cartItems, product];
      setCartItems(newCartList);
    }
  };

  const onDeleteCartItem = (removedProduct) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((product) => product.productName !== removedProduct)
    );
  };

  return (
    <div className="App">
      {hidePromo && (
        <PromotionalHeader hidePromo={hidePromo} setHidePromo={setHidePromo} />
      )}
      <Favourites
        openFavourites={openFavourites}
        handleOpenFavourite={handleOpenFavourites}
        favouriteList={favouriteList}
        onDeleteFavourite={onDeleteFavourite}
      />
      <ShoppingCart
        openCart={openCart}
        setOpenCart={setOpenCart}
        cartItems={cartItems}
        onDeleteCartItem={onDeleteCartItem}
      />
      <Header
        handleOpenFavourites={handleOpenFavourites}
        handleOpenCart={handleOpenCart}
      />
      <Banner />
      <CardBanner />
      <Store onAddToFavourites={onAddToFavourites} onAddToCart={onAddToCart} />
    </div>
  );
}

function Root() {
  return (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  );
}

export default Root;
