import Product from "./Product";
import ProductList from "../Components/ProductList.json";

export default function Store() {
  return (
    <div className="store">
      <div className="container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
