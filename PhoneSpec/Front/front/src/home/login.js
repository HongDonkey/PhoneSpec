import "../css/login.css"
import {Link} from "react-router-dom";
import { NaverLogin } from "./sns/naverLogin"
// 각각의 펑션을 컴포넌트로 만들어서 진행


function GoogleLogin(){
  console.log("구글 로그인")
  
}
function naverLogin(){
  <NaverLogin />
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
       
        {/* <!-- google button --> */}
        <button type="button" className="loginbtn" onClick={GoogleLogin}>
          <Link to="naver.com">
          <img className="sns-icon" src={process.env.PUBLIC_URL + "img/loginbtn/web_light_sq_SI@4x.png"} alt="Icon" />
          {/* <button type="button" class="btm_image" id="img_btn"><img  src="이미지경로"></button>*/}
          </Link>
        </button>
        {/* <!-- naver button --> */}

        {/* <button type="button" className="loginbtn" >

          <img className="sns-icon" src={process.env.PUBLIC_URL + "img/loginbtn/naver_btnG_official.png"} alt="Icon" />
        
          <button type="button" class="btm_image" id="img_btn"><img  src="이미지경로"></button>

        </button> */}
        <NaverLogin />
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
