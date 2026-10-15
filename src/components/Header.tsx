import CartPreview from './CartPreview'
import Page from './Page'

function Header() {
  return (
    <>
      <header className="navbar">
        <p className="navbar__brand">Shop</p>
        <div className="navbar__actions">
          <p className="navbar__count">Items: 0</p>
          <CartPreview />
        </div>
      </header>
      <Page />
    </>
  )
}

export default Header
