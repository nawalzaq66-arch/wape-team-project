
function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>إنشاء حساب</h1>
        <p>انضمي إلى مجتمع قرّاء مِداد 💜</p>

        <form>
          <label>الاسم الكامل</label>
          <input
            type="text"
            placeholder="أدخلي اسمك"
          />

          <label>البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="أدخلي بريدك الإلكتروني"
          />

          <label>كلمة المرور</label>
          <input
            type="password"
            placeholder="اختاري كلمة مرور"
          />

          <button type="button">إنشاء حساب</button>
        </form>
      </div>
    </div>
  )
}

export default Register
