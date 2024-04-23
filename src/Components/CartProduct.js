import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartProduct({
  productName = "Product Name",
  productPrice = "0",
  image = "Mens_Shoes/Black/MensBlack1.jpg",
}) {
  return (
    <div className="favourite-product">
      <img src={require(`../Assets/Images/${image}`)} alt={productName} />
      <div>
        <p>{productName}</p>
        <p>${productPrice}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
