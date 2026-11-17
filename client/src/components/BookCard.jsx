
function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-icon">📖</div>
      <h3>{book.title}</h3>
      <p className="book-author">
        <span>المؤلف</span>
        {book.author}
      </p>
      <span className="book-category">{book.category}</span>
      <div className="book-rating">
        ⭐ {book.rating}
      </div>
    </article>
  )
}

export default BookCard
