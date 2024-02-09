package com.com.PhoneSpec.Login.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NaverLoginDto {
	
	private String accessToken;
	private String refreshToken;
	
	private int seq; //순번
	private String id; //아이디
	private String name; //이름
	private String Age; //나이
	private String sex; //성별
	private String sns; //SNS
	private String birthYear; //생년월일
	
	
	private String access_token;
    private String refresh_token;
    private String token_type;
    private String expires_in;
    
    
}
