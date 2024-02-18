package com.com.PhoneSpec.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StartController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String main(){		
		
		return "/main/main";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(){		
		
		return "/main/login";
	}
}
