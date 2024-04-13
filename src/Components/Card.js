import Promo1 from "../Assets/Images/PromoImages/Promo1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Card({ image }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={Promo1} width="300px" alt="Promotional" />
      </div>
      <div className="promotional-info">
        <h2>
          Promotional Text
          <span>
            <FontAwesomeIcon icon={faDumbbell} />
          </span>
        </h2>
        <a href="" target="blank">
          Promo Link
        </a>
      </div>
    </div>
  );
}
