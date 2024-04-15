import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faMars,
  faVenus,
  faArrowUpWideShort,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
export default function StoreFilter({ openStoreFilter, setOpenStoreFilter }) {
  const hideButton = {
    animation: openStoreFilter ? "" : "hide-button 50ms",
  };

  return (
    <div className="store-filter">
      <div
        className={openStoreFilter ? "filter-button-open" : ""}
        onClick={() => setOpenStoreFilter(!openStoreFilter)}
      >
        <FontAwesomeIcon
          icon={faFilter}
          className="fa-button"
          style={hideButton}
        />
      </div>
      {openStoreFilter && (
        <div className="filter-options">
          <div className="gender-options">
            <div className="button gender-button">
              <FontAwesomeIcon icon={faMars} />
            </div>
            <div className="button gender-button">
              {" "}
              <FontAwesomeIcon icon={faVenus} />
            </div>
          </div>
          <div className="color-options">
            <div id="Black" className="button color-button"></div>
            <div id="White" className="button color-button"></div>
            <div id="Red" className="button color-button"></div>
            <div id="Pink" className="button color-button"></div>
            <div id="Green" className="button color-button"></div>
            <div id="Blue" className="button color-button"></div>
            <div id="Yellow" className="button color-button"></div>
          </div>
          <div className="sort-options">
            <div className="button sort-button">
              <FontAwesomeIcon
                icon={faArrowUpWideShort}
                className="sort-icon"
              />
            </div>
            <div className="button sort-button">
              <FontAwesomeIcon
                icon={faArrowDownShortWide}
                className="sort-icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
