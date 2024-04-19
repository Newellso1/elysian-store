import FavouriteProduct from "./FavouriteProduct";

export default function Favourites({
  openFavourites,
  handleOpenFavourite,
  favouriteList,
  onDeleteFavourite,
}) {
  return (
    <div
      className={
        openFavourites ? "favourite-tab favourite-tab-open" : "favourite-tab"
      }
    >
      <div className="favourite-list">
        <div className="favourite-top">
          <h3>my list</h3>
        </div>
        <div className="favourite-items">
          {favouriteList.map((product, index) => (
            <FavouriteProduct
              key={index}
              image={product.image}
              productName={product.productName}
              productPrice={product.productPrice}
              onDeleteFavourite={onDeleteFavourite}
            />
          ))}
        </div>
      </div>
      <div className="favourite-close" onClick={handleOpenFavourite}>
        <div className={openFavourites ? "" : "rotate-left"}></div>
        <div className={openFavourites ? "" : "rotate-right"}></div>
      </div>
    </div>
  );
}
