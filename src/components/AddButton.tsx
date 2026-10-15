function AddButton() {
  return (
    <div className="button-group">
      <button type="button" className="button">
        Add to cart
      </button>
      <button type="button" className="button button--danger">
        Remove
      </button>
    </div>
  )
}

export default AddButton
