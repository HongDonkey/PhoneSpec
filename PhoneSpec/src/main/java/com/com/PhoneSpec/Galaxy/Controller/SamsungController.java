package com.com.PhoneSpec.Galaxy.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.com.PhoneSpec.Galaxy.Service.SamsungService;
import com.com.PhoneSpec.Galaxy.dto.SamsungDeviceDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class SamsungController {
	private final SamsungService samsungService;
		
	@GetMapping("/recentGalaxy")
	public List<SamsungDeviceDto> getRecentGalaxy(){	
		List<SamsungDeviceDto> recentGalaxy = samsungService.getRecentGalaxy();
		return recentGalaxy;
	}
	


}
