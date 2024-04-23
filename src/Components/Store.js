import Product from "./Product";
import ProductList from "../Components/ProductList.json";
import StoreFilter from "./StoreFilter";
import { useState } from "react";

export default function Store({ onAddToFavourites, onAddToCart }) {
  const [openStoreFilter, setOpenStoreFilter] = useState(false);
  const [currentList, setCurrentList] = useState(ProductList);
  const [genderFilter, setGenderFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

  const openFilterStyle = {
    width: openStoreFilter ? "100vw" : "",
    marginLeft: openStoreFilter ? "0" : "",
    borderRadius: openStoreFilter ? "0 " : "",

    // top: openStoreFilter ? "6.4em" : "",
  };

  const filteredStore = currentList.filter((product) => {
    if (genderFilter && colorFilter) {
      return product.gender === genderFilter && product.color === colorFilter;
    } else if (genderFilter) {
      return product.gender === genderFilter;
    } else if (colorFilter) {
      return product.color === colorFilter;
    } else {
      return true;
    }
  });

  const sortedList =
    sortByPrice === "high"
      ? [...filteredStore].sort((a, b) => b.price - a.price)
      : sortByPrice === "low"
      ? [...filteredStore].sort((a, b) => a.price - b.price)
      : filteredStore;

  return (
    <div className="store">
      <div className="filter-container" style={openFilterStyle}>
        <StoreFilter
          openStoreFilter={openStoreFilter}
          setOpenStoreFilter={setOpenStoreFilter}
          currentList={currentList}
          setCurrentList={setCurrentList}
          ProductList={ProductList}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
          sortByPrice={sortByPrice}
          setSortByPrice={setSortByPrice}
        />
      </div>
      <div className="container">
        {sortedList.length === 0 ? (
          <Product />
        ) : (
          sortedList.map((product, index) => (
            <Product
              key={index}
              productName={product.name}
              color={product.color}
              productPrice={product.price}
              image={product.image}
              gender={product.gender}
              popularity={product.popularity}
              onAddToFavourites={onAddToFavourites}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
}
