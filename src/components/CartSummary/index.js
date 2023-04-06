// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const prices = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      const totalAmount = prices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      )

      const totalItems = cartList.length

      return (
        <div>
          <h1 className="order-total-head">
            Order Total:{' '}
            <span className="display-total-amount">Rs {totalAmount}/-</span>
          </h1>
          <p>{totalItems} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
