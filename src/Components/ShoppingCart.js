import CartProduct from "./CartProduct";

export default function ShoppingCart({ openCart, setOpenCart }) {
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
        <CartProduct />
      </div>
      <div className="cart-checkout">
        <div>
          <h3>Total price</h3>
          <span>$0.00</span>
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
