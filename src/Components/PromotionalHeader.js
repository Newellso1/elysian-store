import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromotionalHeader({ hidePromo, setHidePromo }) {
  return (
    <div className="promotional-message">
      <p>
        use code <span>welcome</span> for 10% off your first order
      </p>
      <div onClick={() => setHidePromo(!hidePromo)}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}
