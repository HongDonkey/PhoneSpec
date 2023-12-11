package com.com.PhoneSpec.Controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {

	@GetMapping("/naverLogin")
	public StringBuffer naverLogin(){		
		StringBuffer sb = new StringBuffer(); 
		sb.append("https://nid.naver.com/oauth2.0/authorize?response_type=code");
		
		final String CLIENT_ID = "PRXM0AtDTBcqFj3FdJwt";
		final String CLIENT_SECRET = "P4UgNLkAab";
		final String CALLBACK_URL= "http://localhost:3000/oauth/naver";

		sb.append("&client_id=");
		sb.append(CLIENT_ID);
		sb.append("&client_secret=");
		sb.append(CLIENT_SECRET);
		sb.append("&state=");
		try {
			sb.append(URLEncoder.encode("1234", "UTF-8"));
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("state오류");
		}
		sb.append("&redirect_uri=");
		sb.append(CALLBACK_URL);
		System.out.println(sb);
		
//		https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=CLIENT_ID&state=STATE_STRING&redirect_uri=CALLBACK_URL
		return sb;
	}
	
	

}
