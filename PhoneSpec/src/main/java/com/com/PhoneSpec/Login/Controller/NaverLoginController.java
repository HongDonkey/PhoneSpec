package com.com.PhoneSpec.Login.Controller;

import java.util.Properties;

import org.springframework.web.bind.annotation.GetMapping;

public class NaverLoginController {

	@GetMapping("/naverCallback")
	public String naverCallback(String code, String state){
		System.out.println(code + " " +state);
		
		System.out.println("naverCallback");
		String accessToken = getNaverAccessToken(code, state);
		return accessToken;
	}
	
	@GetMapping("/getNaverAccessToken")
	public String getNaverAccessToken(String code, String state) {
		
		Properties prop = new Properties();
		
		final String GET_NAVER_ACCESS_TOKEN = "https://nid.naver.com/oauth2.0/token";
		
		String requestAccessToken = GET_NAVER_ACCESS_TOKEN
				+ "?grant_type="
				+ "authorization_code"
				+ "&client_id="
				+ prop.getProperty("naver.clientId")
				+ "&client_secret="
				+ prop.getProperty("naver.clientSecret")
				+ "&code="
				+ code
				+ "&state="
				+ state;
		
		return requestAccessToken;
	}
	
	

}
