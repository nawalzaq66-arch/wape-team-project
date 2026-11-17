
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>مِداد</h1>
        <span>من الحبر تبدأ الحكايات</span>
      </div>

      <nav className="navbar">
        <Link to="/">الرئيسية</Link>
        <Link to="/books">الكتب</Link>
        <Link to="/about">عن مِداد</Link>
        <Link to="/login">تسجيل الدخول</Link>
        <Link to="/register">إنشاء حساب</Link>
      </nav>
    </header>
  )
}

export default Header
