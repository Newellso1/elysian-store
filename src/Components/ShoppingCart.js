import CartProduct from "./CartProduct";

export default function ShoppingCart({
  openCart,
  setOpenCart,
  cartItems,
  onDeleteCartItem,
}) {
  const totalPrice = () => {
    const sum = cartItems.reduce((prev, next) => prev + next.productPrice, 0);
    return sum.toFixed(2);
  };

  return (
    <div
      className={
        openCart ? "shopping-cart shopping-cart-open" : "shopping-cart"
      }
    >
      <div className="cart-top">
        <h3>my cart</h3>
      </div>
      <div className="cart-items">
        {cartItems.map((product, index) => (
          <CartProduct
            key={index}
            image={product.image}
            productName={product.productName}
            productPrice={product.productPrice}
            onDeleteCartItem={onDeleteCartItem}
          />
        ))}
      </div>
      <div className="cart-checkout">
        <div>
          <h3>Total price</h3>
          <span>${totalPrice()}</span>
        </div>
        <div>
          <h3>Discount code</h3>
          <div>
            <input type="text" />
            <button>Apply</button>
          </div>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
