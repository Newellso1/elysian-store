import Product from "./Product";
import ProductList from "../Components/ProductList.json";
import StoreFilter from "./StoreFilter";
import { useState } from "react";

export default function Store() {
  const [openStoreFilter, setOpenStoreFilter] = useState(false);
  const [currentList, setCurrentList] = useState(ProductList);
  const [colorFilter, setColorFilter] = useState(null);

  const openFilterStyle = {
    width: openStoreFilter ? "100vw" : "",
    marginLeft: openStoreFilter ? "0" : "",
    borderRadius: openStoreFilter ? "0 " : "",

    // top: openStoreFilter ? "6.4em" : "",
  };

  const mensShoes = ProductList.filter((product) => product.gender === "male");

  const womensShoes = ProductList.filter(
    (product) => product.gender === "female"
  );

  const filteredShoes = currentList.filter(
    (product) => product.color === colorFilter
  );

  return (
    <div className="store">
      <div
        className="filter-container"
        style={openFilterStyle}
        // onClick={() => setOpenStoreFilter(true)}
      >
        <StoreFilter
          openStoreFilter={openStoreFilter}
          setOpenStoreFilter={setOpenStoreFilter}
          currentList={currentList}
          setCurrentList={setCurrentList}
          mensShoes={mensShoes}
          womenShoes={womensShoes}
          ProductList={ProductList}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
        />
      </div>
      <div className="container">
        {currentList.map((product, index) => (
          <Product
            key={index}
            productName={product.name}
            color={product.color}
            productPrice={product.price}
            image={product.image}
            gender={product.gender}
            popularity={product.popularity}
          />
        ))}
      </div>
    </div>
  );
}
