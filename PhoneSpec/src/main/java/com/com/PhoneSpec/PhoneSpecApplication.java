package com.com.PhoneSpec;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//스프링부트 구동시 로그인화면 방지를 위한 exclude 사용
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class PhoneSpecApplication {

	public static void main(String[] args) {
		SpringApplication.run(PhoneSpecApplication.class, args);
	}

}
