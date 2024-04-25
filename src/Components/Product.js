import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Product({
  productName = "Product Name",
  productPrice = "0",
  image = "Mens_Shoes/Black/MensBlack1.jpg",
  onAddToFavourites,
  onAddToCart,
  favouriteList,
  onDeleteFavourite,
}) {
  const isFavourited = favouriteList.some(
    (product) => product.productName === productName
  );

  // const handleAddToFavourites = () => {
  //   onAddToFavourites({
  //     image: image,
  //     productName: productName,
  //     productPrice: productPrice,
  //   });
  // };

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
    onAddToCart({
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
          className={
            isFavourited
              ? "product-button product-favourited"
              : "product-button"
          }
          onClick={handleAddToFavourites}
          // style={{ color: isFavourited ? "black" : "blue" }}
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="product-buttons"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}
