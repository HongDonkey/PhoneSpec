package com.com.PhoneSpec.IPhone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppleDeviceDto {
	private int seq; // 순번
	private String device_type;  // 기기종류
	private String productnm; // 제품명
	private String modelnm; // 모델명
	private String storage; // 저장용량
	private String display; // 디스플레이
	private String size; // 크기
	private String weight; // 무게
	private String proof; // 방수 및 방진
	private String chip; // 칩
	private String camera; // 카메라
	private String video; // 동영상 촬영
	private String f_camera; //전면 카메라
	private String safety; // 안전
	private String agency; // 이동통신사
	private String cell_wire; //셀룰러 및 무선기술
	private String auth; // 안전한 사용자 인증
	private String pay; // 애플페이
	private String videocall; // 영상통화
	private String voicecall; // 음성통화
	private String playaudio; // 오디오 재생
	private String playvideo; // 동영상 재생
	private String siri; // Siri
	private String power; // 전원
	private String battery; // 배터리
	private String sensor; // 센서
	private String sim; //SIM카드
	private String connector; // 커넥터

	
	
	
}