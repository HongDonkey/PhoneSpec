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
	
	@RequestMapping(value = "/1", method = RequestMethod.GET)
	public String top(){		
		
		return "/common/top";
	}
	

}
