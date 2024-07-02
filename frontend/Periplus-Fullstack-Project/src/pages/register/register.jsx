import "./register.css";

function Register() {
  return (
    <div className="">
      <div className="logo">
        <img src="src/assets/img-login/logo.jpg" alt="Logo" width="200px" height="60px" />
      </div>

      <div className="container">
      <div className="login-form">
        <div className="heading1">
          <h1>Account Registration</h1>
        </div>
        <form>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" required />
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <div className="Privacy">
          <p>
        I have read and agree with the <b>Privacy Policy</b>
           </p>
        </div>
          <button type="submit" className="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
      <footer>
        <span>© 2011-2024 Periplus Holding Ltd.</span>
      </footer>
    </div>
    </div>
  );
}

export default Register;
