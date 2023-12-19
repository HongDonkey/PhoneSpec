package com.com.PhoneSpec.Login.Service;

import java.util.List;

import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

public interface  LoginService {
	List<AppleDeviceDto> insertMember();
	List<AppleDeviceDto> insertLoginHistory();
}
