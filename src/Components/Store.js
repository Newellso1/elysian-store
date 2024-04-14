import Product from "./Product";
import ProductList from "../Components/ProductList.json";
import StoreFilter from "./StoreFilter";
import { useState } from "react";

export default function Store() {
  const [openStoreFilter, setOpenStoreFilter] = useState(false);
  const openFilterStyle = {
    width: openStoreFilter ? "100vw" : "",
    marginLeft: openStoreFilter ? "0" : "",
    // top: openStoreFilter ? "6.4em" : "",
  };

  return (
    <div className="store">
      <div
        className="filter-container"
        style={openFilterStyle}
        onClick={() => setOpenStoreFilter(!openStoreFilter)}
      >
        <StoreFilter
          openStoreFilter={openStoreFilter}
          setOpenStoreFilter={setOpenStoreFilter}
        />
      </div>
      <div className="container">
        {ProductList.map((product, index) => (
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
