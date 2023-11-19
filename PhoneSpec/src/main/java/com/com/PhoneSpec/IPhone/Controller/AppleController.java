package com.com.PhoneSpec.IPhone.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.com.PhoneSpec.IPhone.Service.AppleService;
import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AppleController {
	private final AppleService appleService;
	
	@GetMapping("/allIPhone")
	public List<AppleDeviceDto> getAllIPhone(){		
		return appleService.getAllIPhone();
	}

}
