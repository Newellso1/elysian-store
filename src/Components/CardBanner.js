import Card from "./Card";
import Promo1 from "../Assets/Images/PromoImages/Promo1.jpg";
import Promo2 from "../Assets/Images/PromoImages/Promo2.jpg";
import Promo3 from "../Assets/Images/PromoImages/Promo3.jpg";
import {
  faDumbbell,
  faPersonHiking,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";

export default function CardBanner() {
  return (
    <div className="card-banner">
      <div className="container">
        <div className="card-container">
          <Card
            image={Promo2}
            icon={faDumbbell}
            promoText="Move Adapt Win"
            promoLink="Gym"
          />
          <Card
            image={Promo1}
            icon={faPersonRunning}
            promoText="Play Excel Perform"
            promoLink="Running"
          />
          <Card
            image={Promo3}
            icon={faPersonHiking}
            promoText="Train Elevate Achieve"
            promoLink="Endurance"
          />
        </div>
      </div>
    </div>
  );
}
