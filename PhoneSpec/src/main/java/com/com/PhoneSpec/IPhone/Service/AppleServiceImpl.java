package com.com.PhoneSpec.IPhone.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.com.PhoneSpec.IPhone.dao.AppleDeviceMapper;
import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AppleServiceImpl implements AppleService{
	private final AppleDeviceMapper Apple;
	

	public List<AppleDeviceDto> getAllIPhone(){
		return Apple.getAllIPhone();
	}
	
	@Override
	public List<AppleDeviceDto> getRecentIPhone(){
		return Apple.getRecentIPhone();
	}
	
	
}
