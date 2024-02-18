$(document).ready( function() {
	recentIPhone();
	recentGalaxy();
});

function recentIPhone(){
	$.ajax({ 
    type: "get"
    , url: "/recentIPhone"
    , contentType:"application/json; charset=UTF-8" //charset=UTF-8 생략가능
    , dataType : "json"
    , success: function(data){
        console.log('통신결과');
        console.log(data[0].productnm);
		//console.log(JSON.stringify(data));
		$("#recentIPhone0").html(data[0].productnm)
		$("#recentIPhone1").html(data[1].productnm)
		$("#recentIPhone2").html(data[2].productnm)
    }
	,error : function(){
			alert("main 페이지 db 조회 오류");
	} 
})

}

function recentGalaxy(){
	$.ajax({ 
    type: "get"
    , url: "/recentGalaxy"
    , contentType:"application/json; charset=UTF-8" //charset=UTF-8 생략가능
    , dataType : "json"
    , success: function(data){
        console.log('통신결과');
        console.log(data[0].productnm);
		//console.log(JSON.stringify(data));
		$("#recentGalaxy0").html(data[0].productnm)
		$("#recentGalaxy1").html(data[1].productnm)
		$("#recentGalaxy2").html(data[2].productnm)
    }
	,error : function(){
			alert("main 페이지 db 조회 오류");
	} 
})

}

function sessionCheck(){
	var sessionId = '';
	$.ajax({ 
    type: "GET"
    , url: "/sessionCheck"
    , contentType:"application/json; charset=UTF-8" //charset=UTF-8 생략가능
    , dataType : "json"
    , async : false
    , success: function(data){
        console.log('sessionCheck');
        console.log(data)
    }
	,error : function(){
			alert("세션X");
	} 
})

}
