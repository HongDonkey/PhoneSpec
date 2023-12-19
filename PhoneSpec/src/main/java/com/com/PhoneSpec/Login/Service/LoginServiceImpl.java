package com.com.PhoneSpec.Login.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.com.PhoneSpec.IPhone.dao.AppleDeviceMapper;
import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{
	private final AppleDeviceMapper Apple;
	
	@Override
	public List<AppleDeviceDto> insertMember(){
		return Apple.getAllIPhone();
	}
	
	@Override
	public List<AppleDeviceDto> insertLoginHistory(){
		return Apple.getRecentIPhone();
	}
	
	
}
