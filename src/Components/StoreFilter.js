import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export default function StoreFilter({ openStoreFilter, setOpenStoreFilter }) {
  return (
    <div className="store-filter">
      <div className="filter-button">
        <FontAwesomeIcon icon={faFilter} />
      </div>
    </div>
  );
}
