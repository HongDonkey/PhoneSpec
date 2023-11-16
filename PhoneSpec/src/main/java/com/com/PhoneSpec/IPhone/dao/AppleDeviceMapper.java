package com.com.PhoneSpec.IPhone.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.com.PhoneSpec.IPhone.dto.AppleDeviceDto;

@Mapper
@Repository

public interface AppleDeviceMapper {
	List<AppleDeviceDto> getPhone();
}
