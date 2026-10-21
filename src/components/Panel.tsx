import AddButton from './AddButton'
import { notebook } from '../data/products'

function Panel() {
  return (
    <article className="product-card">
      <h2>{notebook.name}</h2>
      <p>Lined pages, 80 sheets.</p>
      <p>Price: ${notebook.price}</p>
      <AddButton />
    </article>
  )
}

export default Panel
