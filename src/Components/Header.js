import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faHeart,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
          <li>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBasketShopping} />
          </li>
        </ul>
      </div>
    </div>
  );
}
