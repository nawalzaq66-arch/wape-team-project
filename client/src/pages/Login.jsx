

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>تسجيل الدخول</h1>
        <p>أهلاً بعودتك إلى مداد 💜</p>

        <form>
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
          />

          <label>كلمة المرور</label>
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
          />

          <button type="button">تسجيل الدخول</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
