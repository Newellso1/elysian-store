import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export default function StoreFilter({ openStoreFilter, setOpenStoreFilter }) {
  const hideButton = {
    animation: openStoreFilter ? "" : "hide-button 50ms",
  };

  return (
    <div className="store-filter">
      <div className={openStoreFilter ? "filter-button-open" : ""}>
        <FontAwesomeIcon
          icon={faFilter}
          className="fa-button"
          style={hideButton}
        />
      </div>
    </div>
  );
}
