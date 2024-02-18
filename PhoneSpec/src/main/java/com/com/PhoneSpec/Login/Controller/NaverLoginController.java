package com.com.PhoneSpec.Login.Controller;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.com.PhoneSpec.Login.dto.NaverLoginBO;
import com.github.scribejava.core.model.OAuth2AccessToken;

@Controller

public class NaverLoginController {

//	 @Value("${spring.security.oauth2.client.registration.naver.client-id}") 
//	  private String clientId;
//	  
//	  @Value("${spring.security.oauth2.client.registration.naver.client-secret}") 
//	  private String clientSecret;
//	  
//	  @Value("${spring.security.oauth2.client.provider.naver.state}") 
//	  private String state;
//	  
//	  @Value("${spring.security.oauth2.client.registration.naver.redirect-uri}") 
//	  private String callbackUrl;
//	  
//	  @Value("${spring.security.oauth2.client.provider.naver.session_state}")
//	  private String SESSION_STATE;
//	  
//	  @Value("${spring.security.oauth2.client.provider.naver.user-info-uri")
//	  private String PROFILE_API_URL;
//
//	  
//	
//	@GetMapping("/oauth/naver")
//	public String naverCallback(String code, String state){
//		System.out.println(code + " " +state);
//		
//		System.out.println("naverCallback");
//		String accessToken = getNaverAccessToken(code, state);
//		return accessToken;
//	}
//	
//	@GetMapping("/getNaverAccessToken")
//	public String getNaverAccessToken(String code, String state) {
//				
//		final String GET_NAVER_ACCESS_TOKEN = "https://nid.naver.com/oauth2.0/token";
//		
//		String requestAccessToken = GET_NAVER_ACCESS_TOKEN
//				+ "?grant_type="
//				+ "authorization_code"
//				+ "&client_id="
//				+ clientId
//				+ "&client_secret="
//				+ clientSecret
//				+ "&code="
//				+ code
//				+ "&state="
//				+ state;
//		
//		return requestAccessToken;
//	}
//	
//	@GetMapping("/getNaverProperty")
//	public HashMap<String, Object> getNaverProperty(){
//				
//		HashMap<String, Object> naverProperties = new HashMap<>();
//		naverProperties.put("clientId", clientId);
//		System.out.println(clientId);
//		naverProperties.put("state", state);
//		System.out.println(state);
//		naverProperties.put("callbackUrl", callbackUrl);
//		System.out.println(callbackUrl);
//		naverProperties.put("clientSecret", clientSecret);
//		System.out.println(clientSecret);
//		System.out.println(naverProperties);
//		
//		return naverProperties;
//	}

	/* NaverLoginBO */
	private NaverLoginBO naverLoginBO;
	private String apiResult = null;

	@Autowired
	private void setNaverLoginBO(NaverLoginBO naverLoginBO) {
		this.naverLoginBO = naverLoginBO;

	}

	// 로그인 첫 화면 요청 메소드
	@RequestMapping(value = "/naverLogin", method = { RequestMethod.GET, RequestMethod.POST })
	public @ResponseBody String naverLogin(Model model, HttpSession session) {
//			ResponseBody 어노테이션을 사용하면 Controller 어노테이션으로 쓰인 컨트롤러에서도 데이터 반환이 가능

		/* 네이버아이디로 인증 URL을 생성하기 위하여 naverLoginBO클래스의 getAuthorizationUrl메소드 호출 */
		String naverAuthUrl = naverLoginBO.getAuthorizationUrl(session);

		// https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=sE***************&
		// redirect_uri=http%3A%2F%2F211.63.89.90%3A8090%2Flogin_project%2Fcallback&state=e68c269c-5ba9-4c31-85da-54c16c658125
		System.out.println("네이버:" + naverAuthUrl);

		// 네이버
		model.addAttribute("url", naverAuthUrl);

		/* 생성한 인증 URL을 View로 전달 */
		return naverAuthUrl;
	}

	// 네이버 로그인 성공시 callback호출 메소드
	@RequestMapping(value = "/oauth/naver", method = { RequestMethod.GET, RequestMethod.POST })
	public String naverCallback(Model model, @RequestParam String code, @RequestParam String state, HttpSession session)
			throws IOException, ParseException, JSONException {
		System.out.println("여기는 callback");
		OAuth2AccessToken oauthToken;
		oauthToken = naverLoginBO.getAccessToken(session, code, state);
		System.out.println(oauthToken);
		// 로그인 사용자 정보를 읽어온다.
		apiResult = naverLoginBO.getUserProfile(oauthToken);

		// 사용자 정보 json으로 파싱
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(apiResult);
		JSONObject jsonObj = (JSONObject) obj;

		JSONObject response_obj = (JSONObject) jsonObj.get("response");
		String email = (String) response_obj.get("email");
		String message = (String) jsonObj.get("message");
		System.out.println(email + " " + message );

		session.setAttribute("sessionId", email);
		session.setAttribute("message", message);
		
		model.addAttribute("sessionId", email);
		model.addAttribute("message", message);
		System.out.println(session.getAttribute("message"));
		/* 네이버 로그인 성공 페이지 View 호출 */
		return "main/main";
	}

	@RequestMapping(value = "/logout", method = { RequestMethod.GET, RequestMethod.POST })
	public String logout(HttpSession session) throws IOException {
		System.out.println("여기는 logout");
		session.invalidate();
		return "redirect:main";
	}
	
	@RequestMapping(value = "/sessionCheck", method = RequestMethod.POST)
	@ResponseBody
	public String sessionCheck(HttpSession session) {
		String sessionId = (String) session.getAttribute("sessionId");
		return sessionId;
	}
}
