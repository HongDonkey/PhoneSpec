package com.com.PhoneSpec.Login.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.com.PhoneSpec.Login.dto.NaverLoginDto;


@Repository
@Mapper
public interface NaverLoginMapper {
	List<NaverLoginDto> insertMember();
	List<NaverLoginDto> insertLoginHistory();
}
