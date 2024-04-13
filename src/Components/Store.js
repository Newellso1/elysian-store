import Product from "./Product";
import ProductList from "../Components/ProductList.json";

export default function Store() {
  return (
    <div className="store">
      <div className="container">
        {ProductList.map((product, index) => (
          <Product
            key={product.index}
            productName={product.name}
            color={product.color}
            productPrice={product.price}
            gender={product.gender}
            popularity={product.popularity}
          />
        ))}
      </div>
    </div>
  );
}
