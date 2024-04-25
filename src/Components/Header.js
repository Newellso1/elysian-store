import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faHeart,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import ListCounter from "./ListCounter";

export default function Header({
  handleOpenFavourites,
  handleOpenCart,
  cartItems,
  favouriteList,
}) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>elysian</h1>
      </div>
      <div className="header-middle">
        <ul>
          <li>Store</li>
          <li>Men</li>
          <li>Woman</li>
        </ul>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
          </li>
          <li onClick={handleOpenFavourites}>
            <FontAwesomeIcon icon={faHeart} />
            {favouriteList.length > 0 ? (
              <ListCounter list={favouriteList} />
            ) : (
              ""
            )}
          </li>
          <li>
            <FontAwesomeIcon onClick={handleOpenCart} icon={faBasketShopping} />
            {cartItems.length > 0 ? <ListCounter list={cartItems} /> : ""}
          </li>
        </ul>
      </div>
    </div>
  );
}
