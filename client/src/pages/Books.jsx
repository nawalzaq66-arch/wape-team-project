
import { useState } from 'react'
import booksData from '../data/book'

function Books() {
  const [books] = useState(booksData)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('title')

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating
      }

      return a.title.localeCompare(b.title)
    })

  return (
    <main className="books-page" dir="rtl">
      <section className="books-intro">
        <span className="books-label">عالم من الحكايات والمعرفة</span>
        <h1>مكتبة مِداد</h1>
        <p>اكتشفي الكتب التي تناسب ذوقك وتفتح لك آفاقًا جديدة.</p>
      </section>

      <section className="books-toolbar">
        <input
          type="text"
          placeholder="ابحثي عن كتاب أو مؤلف أو تصنيف..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="البحث عن كتاب"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="ترتيب الكتب"
        >
          <option value="title">ترتيب حسب الاسم</option>
          <option value="rating">الأعلى تقييمًا</option>
        </select>
      </section>

      <div className="books-results">
        <p>اكتشفي مجموعتنا من الكتب</p>
        <span>{filteredBooks.length} كتب</span>
      </div>

      <section className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <div className="book-icon">📖</div>

              <h3>{book.title}</h3>

              <p className="book-author">
                <span>المؤلف</span>
                {book.author}
              </p>

              <span className="book-category">
                {book.category}
              </span>

              <div className="book-rating">
                <span>⭐</span>
                {book.rating}
              </div>
            </article>
          ))
        ) : (
          <div className="books-empty">
            <span>📚</span>
            <h3>لم نعثر على كتاب مطابق</h3>
            <p>جربي البحث باستخدام اسم كتاب أو مؤلف آخر.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Books
