
function About() {
  return (
    <main className="about-page" dir="rtl">

      <section className="about-intro">
        <span className="about-label">قصتنا تبدأ من هنا</span>
        <h1>عن مِداد</h1>
        <p>
          مِداد منصة لاكتشاف الكتب واستكشاف عوالم جديدة
          من خلال القراءة.
        </p>
      </section>

      <section className="about-cards">

        <article className="about-card">
          <div className="about-icon">📚</div>
          <h2>من نحن؟</h2>
          <p>
            نهدف إلى جعل اكتشاف الكتب تجربة سهلة وممتعة
            لكل محبي القراءة.
          </p>
        </article>

        <article className="about-card">
          <div className="about-icon">✨</div>
          <h2>رؤيتنا</h2>
          <p>
            أن نجمع القراء والكتب في مكان واحد.
          </p>
        </article>

      </section>

    </main>
  )
}

export default About
