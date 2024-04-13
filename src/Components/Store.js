import Product from "./Product";
import ProductList from "../Components/ProductList.json";
import { Parallax } from "react-scroll-parallax";

export default function Store() {
  const randomProductList = ProductList.sort(() => Math.random() - 0.5);

  return (
    <div className="store">
      <div className="container">
        {randomProductList.map((product, index) => (
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
