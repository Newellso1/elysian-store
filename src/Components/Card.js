import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  image,
  promoText = "promotional text",
  icon = "faDumbell",
  promoLink = "promo link",
}) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} width="300px" alt="Promotional" />
      </div>
      <div className="promotional-info">
        <h2>
          {promoText}
          <span>
            <FontAwesomeIcon icon={icon} />
          </span>
        </h2>
        <a href="" target="blank">
          {promoLink}
        </a>
      </div>
    </div>
  );
}
