import AddButton from './AddButton'

function Panel() {
  return (
    <article className="product-card">
      <h2>Notebook</h2>
      <p>Lined pages, 80 sheets.</p>
      <p>Price: $10</p>
      <AddButton />
    </article>
  )
}

export default Panel
