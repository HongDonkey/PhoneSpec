package com.com.PhoneSpec.Login.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.com.PhoneSpec.Login.dto.LoginDto;


@Repository
@Mapper
public interface LoginMapper {
	List<LoginDto> insertMember();
	List<LoginDto> insertLoginHistory();
}
