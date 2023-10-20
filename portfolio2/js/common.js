// 20140513 kmk
$(document).ready(function(){	
	var lis = $(".gnb li");
	var section = $("h2");
//	lis.eq(0).find("a").addClass("on");
/*	$(window).scroll(function(){
		var top = $(window).scrollTop()+100;
		lis.each(function(idx){
			var secTop = section.eq(idx).offset().top;
			if(top >= secTop){
				lis.eq(idx).find("a").addClass("on");
			}
		});

		if($(window).scrollTop() > 1500){
			$(".bg2").fadeIn(1000);
		}else{
			$(".bg2").fadeOut(1000);
		}
		
		
	});	
	$(".window .arrow").hover(function(){
		$(this).animate({bottom:"-30px"},200);
	},function(){
		$(this).animate({bottom:"-20px"},200);
	});
	$(".window .arrow").click(function(){
		//$(".m-section "+ani).animate({top:"0px"},{duration:1000, queue:false, easing:"easeOutElastic"}).animate({opacity:1},{duration:500, queue:false});
		$(".window").animate({top:0},{duration:1500, easing:"easeOutElastic"}, function(){
			$(".window .arrow").css("display","none");
		});		
	});
	*/

	
	// 이미지 레이지 로딩
	function lazyLoad(){
		var lazyloadImages = $(".lazy"); 
		var winHi = window.innerHeight;
		lazyloadImages.each(function(index, elem){
			if(elem.getBoundingClientRect().top < winHi){
				setTimeout(function(){
					elem.src = elem.dataset.src;
					/*setTimeout(function(){elem.parentNode.classList.remove('img')},150)*/
				}, 150)				
			}
			/*console.log(index, elem.getBoundingClientRect().top)*/
		})
	}	

	$(window).scroll(function(){
		lazyLoad()
	});
	lazyLoad()
});