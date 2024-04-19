import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function FavouriteProduct({
  productName = "Product Name",
  productPrice = "0",
  image = "Mens_Shoes/Black/MensBlack1.jpg",
  onDeleteFavourite,
}) {
  const handleDelete = () => {
    onDeleteFavourite(productName);
  };

  return (
    <div className="favourite-product">
      <img src={require(`../Assets/Images/${image}`)} alt={productName} />
      <div>
        <p>{productName}</p>
        <p>${productPrice}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className="delete-button"
        onClick={handleDelete}
      />
    </div>
  );
}
