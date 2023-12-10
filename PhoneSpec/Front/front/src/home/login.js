import "../css/login.css"
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

// 각각의 펑션을 컴포넌트로 만들어서 진행

const { naver } = window;

function GoogleLogin(){
  console.log("구글 로그인")
  
}
function NaverLogin(){
  console.log("네이버 로그인")
  const initializeNaverLogin  = () => {
    const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.NAVER_CLIENT_ID,
    callbackUrl: process.env.NAVER_CALLBACK_URL,
    clientSecret: process.env.NAVER_CLIENT_SECRET
  });
  naverLogin.init();
}

useEffect(() => {
  initializeNaverLogin();
}, []);
}

function KakaoLogin(){
  console.log("카카오 로그인")
}



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
        <button type="button" className="loginbtn" onClick={GoogleLogin}>
          <img className="sns-icon" src={process.env.PUBLIC_URL + "img/loginbtn/web_light_sq_SI@4x.png"} alt="Icon" />
          {/* <button type="button" class="btm_image" id="img_btn"><img  src="이미지경로"></button>*/}
        </button>
        {/* <!-- naver button --> */}

        <button type="button" className="loginbtn" onClick={NaverLogin}>
        <Link to="https://nid.naver.com/oauth2.0/authorize">
          <img className="sns-icon" src={process.env.PUBLIC_URL + "img/loginbtn/naver_btnG_official.png"} alt="Icon" />
        
          {/* <button type="button" class="btm_image" id="img_btn"><img  src="이미지경로"></button>*/}
        </Link>
        </button>

        {/* <!-- kakao button --> */}
        <button type="button" className="loginbtn" onClick={KakaoLogin}>
          <img className="sns-icon" src={process.env.PUBLIC_URL + "img/loginbtn/kakao_login_large_wide.png"} alt="Icon" />
          {/* <button type="button" class="btm_image" id="img_btn"><img  src="이미지경로"></button>*/}
        </button>
      </div>
    </div>
    // <img className="img-fluid; width: 30px; height: 30px;" src={process.env.PUBLIC_URL + "img/mainimg.png"} alt="Icon" />
  );
  // <!-- Navbar End -->
}

export default App;
