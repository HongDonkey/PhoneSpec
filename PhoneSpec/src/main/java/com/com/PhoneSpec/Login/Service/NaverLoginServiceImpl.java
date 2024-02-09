package com.com.PhoneSpec.Login.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.com.PhoneSpec.Login.dao.NaverLoginMapper;
import com.com.PhoneSpec.Login.dto.NaverLoginDto;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class NaverLoginServiceImpl implements NaverLoginService{
	private final NaverLoginMapper naver;
	
	@Override
	public List<NaverLoginDto> insertMember(){
		return naver.insertMember();
	}
	
	@Override
	public List<NaverLoginDto> insertLoginHistory(){
		return naver.insertLoginHistory();
	}
	
	
}
