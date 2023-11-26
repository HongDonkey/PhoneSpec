package com.com.PhoneSpec.IPhone.Service;

import java.util.List;

import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

public interface  AppleService {
	List<AppleDeviceDto> getAllIPhone();
	List<AppleDeviceDto> getRecentIPhone();
}
