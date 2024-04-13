import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromotionalHeader() {
  return (
    <div className="promotional-message">
      <p>
        use code <span>welcome</span> for 10% your first order
      </p>
      <div>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}
