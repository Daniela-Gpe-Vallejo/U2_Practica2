import Page from './Page'

function Header() {
  return (
    <>
      <header className="navbar">
        <p className="navbar__brand">Shop</p>
        <p className="navbar__count">Items: 0</p>
      </header>
      <Page />
    </>
  )
}

export default Header
