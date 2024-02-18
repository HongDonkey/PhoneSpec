package com.com.PhoneSpec.Galaxy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.com.PhoneSpec.Galaxy.dto.SamsungDeviceDto;
import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;


@Repository
@Mapper
public interface SamsungDeviceMapper {
	List<SamsungDeviceDto> getRecentGalaxy();
}
