package com.com.PhoneSpec.IPhone.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

@Service
public interface  AppleService {
	List<AppleDeviceDto> getAllIPhone();
	List<AppleDeviceDto> getRecentIPhone();
}
