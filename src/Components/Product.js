import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Product({
  productName = "Product Name",
  productPrice = "0",
  image = "Mens_Shoes/Black/MensBlack1.jpg",
  onAddToFavourites,
  onAddToCart,
  favouriteList,
  onDeleteFavourite,
  cartItems,
  onDeleteCartItem,
}) {
  const isFavourited = favouriteList.some(
    (product) => product.productName === productName
  );

  const isInBasket = cartItems.some(
    (product) => product.productName === productName
  );

  const handleAddToFavourites = () => {
    !isFavourited
      ? onAddToFavourites({
          image: image,
          productName: productName,
          productPrice: productPrice,
        })
      : onDeleteFavourite(productName);
  };

  const handleAddToCart = () => {
    !isInBasket
      ? onAddToCart({
          image: image,
          productName: productName,
          productPrice: productPrice,
        })
      : onDeleteCartItem(productName);
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
          className={
            isFavourited
              ? "product-button product-favourited"
              : "product-button"
          }
          onClick={handleAddToFavourites}
          // style={{ color: isFavourited ? "black" : "blue" }}
        />
        <FontAwesomeIcon
          icon={isInBasket ? faMinusCircle : faPlusCircle}
          className="product-buttons"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}
