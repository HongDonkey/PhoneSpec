package com.com.PhoneSpec.Login.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginDto {
	private int seq; //순번
	private String id; //아이디
	private String name; //이름
	private String Age; //나이
	private String sex; //성별
	private String sns; //SNS
	private String birthYear; //생년월일
	
}
