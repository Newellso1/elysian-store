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

  // const onAddToFavourites = (product) => {
  //   const newFavouriteList = [...favouriteList, product];
  //   setFavouriteList(newFavouriteList);
  // };

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

  return (
    <div className="App">
      {hidePromo && (
        <PromotionalHeader hidePromo={hidePromo} setHidePromo={setHidePromo} />
      )}
      <Favourites
        openFavourites={openFavourites}
        handleOpenFavourite={handleOpenFavourites}
        hidePromo={hidePromo}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        onDeleteFavourite={onDeleteFavourite}
      />
      <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} />
      <Header
        handleOpenFavourites={handleOpenFavourites}
        handleOpenCart={handleOpenCart}
      />
      <Banner />
      <CardBanner />
      <Store onAddToFavourites={onAddToFavourites} />
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
