import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function Product({
  productName = "Product Name",
  productPrice = "0",
  image = "Mens_Shoes/Black/MensBlack1.jpg",
  onAddToFavourites,
}) {
  const handleAddToFavourites = (product) => {
    onAddToFavourites({
      image: image,
      productName: productName,
      productPrice: productPrice,
    });
  };

  return (
    <div className="product">
      <div className="img-container">
        <img src={require(`../Assets/Images/${image}`)} alt={productName} />
      </div>
      <div>
        <h3>{productName}</h3>
        <h4>${productPrice}</h4>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          className="product-buttons"
          onClick={handleAddToFavourites}
        />
        <FontAwesomeIcon icon={faPlusCircle} className="product-buttons" />
      </div>
    </div>
  );
}
