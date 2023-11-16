package com.com.PhoneSpec.IPhone.Service.impl;

import java.util.List;

import com.com.PhoneSpec.IPhone.Service.AppleService;
import com.com.PhoneSpec.IPhone.dao.AppleDeviceMapper;
import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

public class AppleServiceImpl implements AppleService{
	private final AppleDeviceMapper Apple = null;
	
	@Override
	public List<AppleDeviceDto> getPhone(){
		return Apple.getPhone();
	}
	
}
