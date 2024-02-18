package com.com.PhoneSpec.Galaxy.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.com.PhoneSpec.Galaxy.dto.SamsungDeviceDto;

@Service
public interface  SamsungService {
	List<SamsungDeviceDto> getRecentGalaxy();
}
