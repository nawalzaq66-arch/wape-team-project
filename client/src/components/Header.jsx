function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>مِداد</h1>
        <span>من الحبر تبدأ الحكايات</span>
      </div>

      <nav className="navbar">
        <a href="/"> الرئيسية </a>
        <a href="/books"> الكتب </a>
        <a href="/about"> عن مِداد </a>
        <a href="/login"> تسجيل الدخول </a>
        <a href="/register">إنشاء حساب</a>
      </nav>
    </header>
  )
}

export default Header

 /* أنشأنا Header.jsx : حتى نفصل الجزء المسؤول عن رأس الصفحة والتنقل. */
 /*بدل ما نكتب الهيدر داخل كل صفحة، بنكتبه مرة واحدة ونستدعيه وين ما احتجنا. */