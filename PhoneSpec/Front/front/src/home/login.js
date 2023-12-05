import "../css/login.css"

function App() {
  return (
    <div>
      <div className="container">
        {/* <!-- Heading --> */}
        <h1>SIGN IN</h1>

        {/* <!-- Links -->
        <ul className="links">
          <li>
            <a href="#" id="signin">
              SIGN IN
            </a>
          </li>
          <li>
            <a href="#" id="signup">
              SIGN UP
            </a>
          </li>
          <li>
            <a href="#" id="reset">
              RESET
            </a>
          </li>
        </ul>

        {/* <!-- Form --> }
        <form action="" method="post">
          {/* <!-- email input --> 
          <div className="first-input input__block first-input__block">
            <input type="email" placeholder="Email" className="input" id="email" />
          </div>
          {/* <!-- password input --> 
          <div className="input__block">
            <input
              type="password"
              placeholder="Password"
              className="input"
              id="password"
            />
          </div>
          {/* <!-- repeat password input --> 
          <div className="input__block">
            <input
              type="password"
              placeholder="Repeat password"
              className="input repeat__password"
              id="repeat__password"
            />
          </div>
          {/* <!-- sign in button --> 
          <button className="signin__btn">Sign in</button>
        </form>
        {/* <!-- separator --> 
        <div className="separator">
          <p>OR</p>
        </div> */}
       
        {/* <!-- google button --> */}
        <button className="google__btn">
          <i className="fa fa-google"></i>
          Sign in with Google
        </button>
        {/* <!-- naver button --> */}
        <button className="github__btn">
          <i className="fa fa-github"></i>
          Sign in with Naver
        </button>
        {/* <!-- kakao button --> */}
        <button className="loginbtn">
          <i className="fa fa-google" src={process.env.PUBLIC_URL + "img/loginbtn/kakao_login_large_wide.png"} alt="Icon" ></i>
          Sign in with Kakao
        </button>
      </div>
    </div>
    // <img className="img-fluid; width: 30px; height: 30px;" src={process.env.PUBLIC_URL + "img/mainimg.png"} alt="Icon" />
  );
  // <!-- Navbar End -->
}

export default App;
