function naverLogin(){
	$.ajax({ 
    type: "get"
    , url: "/naverLogin"
    , contentType:"application/json; charset=UTF-8" //charset=UTF-8 생략가능
    , dataType : "text"
    , success: function(data){
		console.log(data)
/*		window.location.href = 
		"https://nid.naver.com/oauth2.0/authorize?response_type=code"
		+ "&client_id=" + data.clientId
		+ "&state=" + data.state
		+ "&redirect_uri=" + data.callbackUrl*/
		window.location.href = data;
    }
	,error : function(){
			alert("네이버 로그인 프로퍼티 수신 오류");
	} 
})
}