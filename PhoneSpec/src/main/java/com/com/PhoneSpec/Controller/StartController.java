package com.com.PhoneSpec.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartController {
	
	@GetMapping("/api/hello")
    public String test() {
        return "hi, world!";
    }
	
	@GetMapping("/home/firstPage")
	public String firstPage() {
		return "the first";
	}
}
