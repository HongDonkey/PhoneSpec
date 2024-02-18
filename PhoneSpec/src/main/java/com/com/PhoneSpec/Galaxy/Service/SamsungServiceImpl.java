package com.com.PhoneSpec.Galaxy.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.com.PhoneSpec.Galaxy.dao.SamsungDeviceMapper;
import com.com.PhoneSpec.Galaxy.dto.SamsungDeviceDto;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class SamsungServiceImpl implements SamsungService{
	private final SamsungDeviceMapper Samsung;
		
	@Override
	public List<SamsungDeviceDto> getRecentGalaxy(){
		return Samsung.getRecentGalaxy();
	}
	
	
}
