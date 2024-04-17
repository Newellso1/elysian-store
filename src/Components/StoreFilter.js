import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faMars,
  faVenus,
  faArrowUpWideShort,
  faArrowDownShortWide,
  faTrashCan,
  faMarsAndVenus,
} from "@fortawesome/free-solid-svg-icons";
export default function StoreFilter({
  openStoreFilter,
  setOpenStoreFilter,
  currentList,
  setCurrentList,
  setGenderFilter,
  ProductList,
  colorFilter,
  setColorFilter,
  sortByPrice,
  setSortByPrice,
}) {
  const hideButton = {
    animation: openStoreFilter ? "" : "hide-button 50ms",
  };

  const handleReset = () => {
    setCurrentList(ProductList);
    setColorFilter(null);
    setSortByPrice(null);
  };

  const handleGenderChange = (gender) => setGenderFilter(gender);

  const handleColorChange = (color) => setColorFilter(color);

  const handlePriceChange = (price) => setSortByPrice(price);

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
            <div
              className="button gender-button"
              onClick={() => handleGenderChange(null)}
            >
              <FontAwesomeIcon icon={faMarsAndVenus} />
            </div>
            <div
              className="button gender-button"
              onClick={() => handleGenderChange("male")}
            >
              <FontAwesomeIcon icon={faMars} />
            </div>
            <div
              className="button gender-button"
              onClick={() => handleGenderChange("female")}
            >
              {" "}
              <FontAwesomeIcon icon={faVenus} />
            </div>
          </div>
          <div className="color-options">
            <div
              id="Black"
              className="button color-button"
              onClick={() => handleColorChange("black")}
            ></div>
            <div
              id="White"
              className="button color-button"
              onClick={() => handleColorChange("white")}
            ></div>
            <div
              id="Red"
              className="button color-button"
              onClick={() => handleColorChange("red")}
            ></div>
            <div
              id="Pink"
              className="button color-button"
              onClick={() => handleColorChange("pink")}
            ></div>
            <div
              id="Green"
              className="button color-button"
              onClick={() => handleColorChange("green")}
            ></div>
            <div
              id="Blue"
              className="button color-button"
              onClick={() => handleColorChange("blue")}
            ></div>
            <div
              id="Yellow"
              className="button color-button"
              onClick={() => handleColorChange("yellow")}
            ></div>
          </div>
          <div className="sort-options">
            <div
              className="button sort-button"
              onClick={() => handlePriceChange("high")}
            >
              <FontAwesomeIcon
                icon={faArrowUpWideShort}
                className="sort-icon"
              />
            </div>
            <div
              className="button sort-button"
              onClick={() => handlePriceChange("low")}
            >
              <FontAwesomeIcon
                icon={faArrowDownShortWide}
                className="sort-icon"
              />
            </div>
          </div>
          <div>
            <div className="button sort-button" onClick={handleReset}>
              <FontAwesomeIcon icon={faTrashCan} className="sort-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
