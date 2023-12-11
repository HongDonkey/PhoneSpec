export function NaverLogin(){

  // 자바에서 클라이언트 정보 받기 (axios)
      const clientId = "PRXM0AtDTBcqFj3FdJwt";
      const callbackUrl = "http://localhost:3000/oauth/naver";
      const clientSecret = process.env.NAVER_CLIENT_SECRET;
      const state = "1234";
      

      const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${callbackUrl}`;
      console.log(clientId)
      console.log(callbackUrl) 
      console.log("url : " + url)
      const loginNaver = () => {
        window.location.href = url;
      }
      return  <button type="button" className="loginbtn" onClick={loginNaver} >

      <img className="sns-icon" src={process.env.PUBLIC_URL + "img/loginbtn/naver_btnG_official.png"} alt="Icon" />
    
      {/* <button type="button" class="btm_image" id="img_btn"><img  src="이미지경로"></button>*/}

    </button>
    }
    



