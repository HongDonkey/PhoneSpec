package com.com.PhoneSpec.Login.Controller;

import java.util.Properties;

import org.springframework.web.bind.annotation.GetMapping;

import com.com.PhoneSpec.Login.Service.LoginService;

public class LoginController {
	@GetMapping("/api/naverLogin")
	public StringBuffer naverLogin(){		
		StringBuffer sb = new StringBuffer();
		Properties prop = new Properties();
		String client_id = prop.getProperty("naver.clientId");
		String state = prop.getProperty("naver.state");
		String callbackUrl = prop.getProperty("naver.callbackUrl");
		System.out.println(client_id);
		
		sb.append("https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=");
		sb.append(client_id);
		sb.append("&state=");
		sb.append(state);
		sb.append("&redirect_uri=");
		sb.append(callbackUrl);
//		https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${callbackUrl}
		System.out.println("url" + sb);
		return sb;
	}
	
	@GetMapping("/oauth/naver")
	public void naverLoginSuccess(){		
		System.out.println("로그인됨");
	}
	
	

}
