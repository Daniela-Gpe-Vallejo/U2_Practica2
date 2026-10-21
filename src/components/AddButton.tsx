import { useCart } from '../context/useCart'
import { notebook } from '../data/products'

function AddButton() {
  const { addToCart } = useCart()

  return (
    <button
      type="button"
      className="button"
      onClick={() => addToCart(notebook)}
    >
      Add to cart
    </button>
  )
}

export default AddButton
