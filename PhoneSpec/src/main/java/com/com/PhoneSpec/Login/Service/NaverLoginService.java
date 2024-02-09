package com.com.PhoneSpec.Login.Service;

import java.util.List;

import com.com.PhoneSpec.Login.dto.NaverLoginDto;

public interface  NaverLoginService {
	
	   
    public List<NaverLoginDto> insertMember();
    public List<NaverLoginDto> insertLoginHistory();

}
