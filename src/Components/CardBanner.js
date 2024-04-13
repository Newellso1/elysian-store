import Card from "./Card";
import Promo1 from "../Assets/Images/PromoImages/Promo1.jpg";

export default function CardBanner() {
  return (
    <div className="card-banner">
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
