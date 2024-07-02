import './login.css';

function Login()  {
  return (
    <div>
     
      <div className="logo">
        <img src="src/assets/img-login/logo.jpg" alt="Periplus Logo" width="200px" height="60px" />
      </div>
      
      <div className="container">
      <div className="login-form">
        <div className="heading1">
          <h1>Sign In to Your Account</h1>
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <a href="home.html">
          <button className="next">
            <span>Login</span>
          </button>
        </a>
        <div className="register">
          <a href="#">You don't have an account yet? Register here</a>
        </div>
        <div className="forgot">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="option">
          <b>Or Login With</b>
        </div>
        <div className="google">
          <a href="#">
            <img src="src/assets/img-login/google.png" alt="Google Login Button" />
          </a>
        </div>
      </div>
      <footer>
        <span>© 2011-2024 Periplus Holding Ltd.</span>
      </footer>
    </div>
    </div>
  );
};

export default Login;