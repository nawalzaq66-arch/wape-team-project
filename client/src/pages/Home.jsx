
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page" dir="rtl">

      <section className="home-hero">
        <span className="home-label">
          📖 لكل حكاية بداية
        </span>

        <h1>
          أهلًا بك في <span>مِداد</span>
        </h1>

        <p>
          اكتشفي عالمًا جديدًا بين صفحات الكتب،
          وابحثي عن الحكاية التي تشبهك.
        </p>

        <Link to="/books" className="home-button">
          استكشفي الكتب
        </Link>
      </section>

      <section className="home-features">
        <article className="feature-card">
          <div>📚</div>
          <h3>اكتشفي الكتب</h3>
          <p>تصفحي مجموعة متنوعة من الكتب واختاري ما يناسب ذوقك.</p>
        </article>

        <article className="feature-card">
          <div>🔎</div>
          <h3>ابحثي بسهولة</h3>
          <p>اعثري على الكتب والمؤلفين باستخدام خاصية البحث.</p>
        </article>

        <article className="feature-card">
          <div>💜</div>
          <h3>عالم من المعرفة</h3>
          <p>ابدئي رحلتك واكتشفي أفكارًا وحكايات جديدة.</p>
        </article>
      </section>

    </main>
  )
}

export default Home