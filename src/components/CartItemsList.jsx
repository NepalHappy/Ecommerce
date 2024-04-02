import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItemsList = () => {
  const { cartItems } = useSelector((store) => store.cartState)

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />
      })}
    </div>
  )
}
export default CartItemsList
