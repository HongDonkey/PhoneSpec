package com.com.PhoneSpec.Galaxy.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SamsungDeviceDto {
	private int seq; // 순번
	private String device_type;  // 기기종류
	private String productnm; // 제품명
	private String modelnm; // 모델명
	private String storage; // 저장용량
	private String display; // 디스플레이
	private String covdisplay; // 커버디스플레이 (플립, 폴드 모델의 경우)
	private String covscreen; // 커버스크린 (플립, 폴드 모델의 경우)
	private String flex; // 플렉스 모드
	private String size; // 크기
	private String weight; // 무게
	private String camera; // 카메라
	private String battery; // 배터리
	private String chip; // 칩
	private String durability; // 내구성
	private String careplus; // 삼성케어플러스
	private String health; // 삼성헬스
	private String pay; // 삼성페이
	private String connectivity; // 연결성
	private String spen; // S펜 호환
	private String main_display; // 메인 디스플레이
	private String memory; // 메모리
	private String covscreen_yn; // 커버스크린유무
	
	
}