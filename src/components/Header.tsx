import CartPreview from './CartPreview'
import Page from './Page'
import { useCart } from '../context/useCart'

function Header() {
  const { totalItems } = useCart()

  return (
    <>
      <header className="navbar">
        <p className="navbar__brand">Shop</p>
        <div className="navbar__actions">
          <p className="navbar__count">Items: {totalItems}</p>
          <CartPreview />
        </div>
      </header>
      <Page />
    </>
  )
}

export default Header
