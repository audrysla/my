// 20140513 kmk

$(document).ready(function(){
	var li_no;		//배너 개수
	var index = $(".show").index();			//show인댁스

	$(".banner_ul li").each(function(index){		//li(배너) 개수 알아내기
 		li_no = index;	
	});	

	for(i=1;i<=li_no+1;i++){		//배너 개수만큼 버튼 뿌려주기
		$(".btn_ul").append("<li></li>");
	}
	
	$(".banner_ul li").eq(0).addClass("show");
	$(".show").show().siblings().hide();	//첫번째 배너만 보이게
	$(".btn_ul li").eq(0).css("background","#ff6c00");		//첫번째 버튼 선택 표시

	//왼쪽 화살표 클릭
	$(".p_left").click(function(){
		var index = $(".show").index();
		if(index == 0){
			$(".show").removeClass("show");
			$(".banner_ul li:last").addClass("show");
			$(".show").fadeIn().siblings().hide();
		}else{
			$(".show").removeClass("show").prev().addClass("show");
			$(".show").fadeIn().siblings().hide();
		}	
		index = $(".show").index();	
		$(".btn_ul li").eq(index).css("background","#ff6c00").siblings().css("background","#d9d9d9");
	});

	//오른 화살표 클릭
	$(".p_right").click(function(){
		var index = $(".show").index();	
		if(index == li_no){
			$(".show").removeClass("show");
			$(".banner_ul li:first").addClass("show");
			$(".show").fadeIn().siblings().hide();	
		}else{
			$(".show").removeClass("show").next().addClass("show");
			$(".show").fadeIn().siblings().hide();
		}	
		index = $(".show").index();
		$(".btn_ul li").eq(index).css("background","#ff6c00").siblings().css("background","#d9d9d9");
	});	
	
	//버튼 클릭 시
	$(".btn_ul li").click(function(){
		var index = $(this).index();
		$(this).css("background","#ff6c00").siblings().css("background","#d9d9d9");
		$(".show").removeClass("show");
		$(".banner_ul li").eq(index).addClass("show");
		$(".show").fadeIn().siblings().hide();
	});	
	var p_right_click = setInterval(r_click, 3000);
	function r_click(){
		$(".p_right").trigger('click');
	}
	$(".banner_box").hover(function(){
		$(".screen .p_left, .screen .p_right").fadeIn();
		clearInterval(p_right_click)
	}, function(){
		$(".screen .p_left, .screen .p_right").fadeOut();
		p_right_click = setInterval(r_click, 3000);
	});
});