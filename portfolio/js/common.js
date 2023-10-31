const isMobile = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
const winHi = window.innerHeight;
const article = document.querySelectorAll("article");
const main = document.querySelector(".main");
const header = document.querySelector("header");
const nav = document.querySelectorAll("nav a");
const skill = document.querySelector(".skill");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const footer = document.querySelector("footer");
const goTop = document.querySelector(".goTop");

if(isMobile()) main.style.height = "100%";	// 모바일에서만 상단 풀화면

// 스크롤 이동
const goTo = (offset) =>{
	window.scrollTo({
		top : offset,
		left : 0,
		behavior: 'smooth'
	});
}

// skill 숫자 증가
const interval = (num, index) =>{
	let count = 0;
	const itvl = setInterval(() =>{
		if(count <= num){
			t[index].innerText = `${count}%`;
			count+=1;
		}else{
			clearInterval(itvl)
		}
	},20);
}

const scrFlag = 0;
const minHi = 580;
let scrGap = 0;

// gnb 클릭 이동
nav.forEach((item, index) =>{
	item.addEventListener('click', function(){
		if(isMobile()){	
			(window.scrollY == 0) ? scrGap = winHi - minHi : scrGap = 0;
		}
		// console.log(article[index+1].offsetTop, winHi, winHi-500)
		goTo(article[index+1].offsetTop - header.clientHeight - scrGap);
	});
});
// 메인 화살표 클릭 이동 추가
document.querySelector(".arrow").addEventListener('click',() =>{
	if(isMobile()){	
		(window.scrollY == 0) ? scrGap = winHi - minHi : scrGap = 0;
	}
	goTo(article[1].offsetTop - header.clientHeight - scrGap);
});
// 맨위로
document.querySelector("header h1 a").addEventListener('click',() =>{
	goTo(0);
});
document.querySelector(".goTop").addEventListener('click',() =>{
	goTo(0);
});

// [S] 스킬 패럴렉스
const per = [90, 90, 70, 90, 90, 50, 50]	// 스킬 활용도 점수%
let x = true;
let i = document.querySelectorAll(".skill ul li i");
let t = document.querySelectorAll(".skill ul li .per");
const parallaxEv = {
	init : function(){
		this.items = document.querySelectorAll(".parallax-div span");
	},
	action : function(){
		const item = this.items;
		const itemTop = [];
		for(let i = 0;i<=item.length-1;i++){
			itemTop[i] = item[i].offsetTop;
		}
		window.addEventListener("scroll", function (e) {
			const skillTop = skill.getBoundingClientRect().top;
			// const skillTopN = skill.getBoundingClientRect().top;
			// console.log(skillTop-winHi, skillTop+skill.clientHeight)
			if(skillTop-winHi <= -100 && skillTop+skill.clientHeight >= 0){
				// 게이지	
				if(x){
					i.forEach((item, index) =>{
						item.style.width = `${per[index]}%`;
						// t[index].innerText = `${per[index]}%`;
						interval(per[index], index)
					});
					x = false;
				}
				// 뼈다귀
				item[0].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0501}px, 0)`
				item[1].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2501}px, 0)`
				item[2].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.9501}px, 0)`
				item[3].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0201}px, 0)`
				item[4].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0801}px, 0)`
				item[5].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1301}px, 0)`
				item[6].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1001}px, 0)`
				item[7].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.3501}px, 0)`
				// item[8].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1501}px, 0)`
			}	
		})
	}
}
// [E] 스킬 패럴렉스
parallaxEv.init();
parallaxEv.action();

// 스크롤 이벤트 시작
window.addEventListener("scroll", function (e) {

	// 모바일만 메인 영역 풀화면
	if(isMobile()){		
		(window.scrollY > scrFlag) ? main.classList.add("static") : main.classList.remove("static");	// 메인 풀화면
	}
	
	// 스크롤 내려갈 때 헤더 백그라운드 주기
	about.getBoundingClientRect().top < 0+header.clientHeight ? header.classList.add('bg') : header.classList.remove('bg');	

	// [S] TEXT 패럴렉스
	const parallax = document.querySelector(".parallax");
	const backboard = parallax.querySelector('.backboard');
	
	// 헤더 고정
	// console.log(parallax.offsetTop, window.scrollY+header.clientHeight)
	if(window.scrollY+header.clientHeight >= parallax.offsetTop){
		header.style.position = 'absolute';		
		header.style.top = `${parallax.offsetTop-header.clientHeight}px`
	}else{
		header.style.position = 'fixed';		
		header.style.top = `0`
	}

	// 움직이는 텍스트 요소
	const t1 = document.querySelector(".t1");
	const t2 = document.querySelector(".t2");
	const t3 = document.querySelector(".t3");	
	
	let parallaxArea = parallax.getBoundingClientRect().top;	// 패럴렉스 영역 시작점
	let parallaxBottom = footer.getBoundingClientRect().top;	// 패럴렉스 영역 끝지점(푸터offsetTop)
	let moveScroll = Math.abs(parallaxArea);					// 패럴렉스 영역에서의 스크롤 기준 값 (0부터 증가)
	
	// text 패럴렉스
	if(parallaxArea <= 0 ){
		backboard.classList.add('fixed');									// 페럴렉스 영역 고정
		document.body.classList.add('bg');
		parallax.querySelector('.backboard').style.height = `${winHi}px`	// 높이값 화면 높이로 지정(풀화면)	
		let scrollTop = moveScroll * 0.002;
		let transformSpeed = 30;	

		// console.log(scrollTop.toFixed(3))

		// text1 액션
		if(scrollTop <= 4){
			let moveY = scrollTop;
			// opacity 조절
			if(moveY <= 1){
				t1.style.opacity = `${moveY}`;
			}else if(moveY >= 2){
				let secondMove = 1 -(moveY - 1)+1;
				t1.style.opacity = `${secondMove}`
			}else{
				t1.style.opacity = `1`;
			}
			// 위치 조절
			if(moveY*transformSpeed <= 50){
				t1.style.transform = `translate3d(0,${-moveY*transformSpeed}px,0)`;
			}else{
				t1.style.transform = `translate3d(0,-50px,0)`;
			}
		}else{
			t1.style.opacity = `0`
		}
		
		// text2 액션
		if(scrollTop >= 2 && scrollTop <= 6){
			let moveY = scrollTop-2;
			// scrollTop = scrollTop-2;
			// console.log("2 =",scrollTop.toFixed(3))
			// opacity 조절
			if(moveY <= 1){
				t2.style.opacity = `${moveY}`;
			}else if(moveY >= 2){
				let secondMove = 1 -(moveY - 1)+1;
				t2.style.opacity = `${secondMove}`
			}else{
				t2.style.opacity = `1`;
			}
			
			// 위치 조절
			if(moveY*transformSpeed <= 50){
				t2.style.transform = `translate3d(0,${-moveY*transformSpeed}px,0)`;
			}else{
				t2.style.transform = `translate3d(0,-50px,0)`;
			}			
		}else{
			t2.style.opacity = `0`
		}
		
		// text3 액션
		if(scrollTop >= 4){
			let moveY = scrollTop-4;
			// scrollTop = scrollTop-2;
			// console.log("3 =",scrollTop.toFixed(3))
			
			// opacity 조절
			if(moveY <= 1){
				t3.style.opacity = `${moveY}`;
			}else{
				t3.style.opacity = `1`;
			}

			// 위치 조절
			if(moveY*transformSpeed <= 50){
				t3.style.transform = `translate3d(0,${-moveY*transformSpeed}px,0)`;
			}else{
				t3.style.transform = `translate3d(0,-50px,0)`;
			}
			
			// 마지막 글자 커지기
			if(scrollTop >= 6){
				let moveY = scrollTop-6;
				// scrollTop = scrollTop-2;
				// console.log("4 =",moveY.toFixed(3))
				let secondMove = 1 -(moveY - 1)+1;
				if(parallaxBottom-winHi >= 0){
					if(secondMove >= 0.2){
						t3.style.opacity = `${secondMove}`
					}else{
						t3.style.opacity = `0.2`
					}
					t3.querySelector('i').style.transform = `scale(${1+moveY*1.5})`;
				}else{
					t3.style.opacity = `0.2`
				}
			}else{
				t3.querySelector('i').style.transform = `scale(1)`;
			}
			// 마지막 글자 커지기 END
		}else{
			t3.style.opacity = `0`
		}		
	}else{
		backboard.classList.remove('fixed');
		document.body.classList.remove('bg');		
		t1.style.opacity = `0`;
		t2.style.opacity = `0`;
		t3.style.opacity = `0`;
	}
	// text 패럴렉스 영역 끝나면
	if(parallaxBottom-winHi <= 0){
		backboard.classList.remove('fixed');
		backboard.style.transform = `translate(0, ${parallax.clientHeight-winHi}px)`
	}else{
		backboard.style.transform = `translate(0, 0px)`
	}
	// [E] TEXT 패럴렉스	
	
	// 위로가기 버튼 나타나기
	(window.scrollY > 500) ? goTop.classList.add("show") : goTop.classList.remove("show");

	// 위로가기 버튼 이미지 필터 반전
	if(parallaxArea >= winHi){
		goTop.classList.remove('inv');
	}else{
		goTop.classList.add('inv');
	}
	
	// 스크롤 맨 아래 감지
	(window.scrollY+winHi >= document.body.scrollHeight-50) ? goTop.classList.add("foot") : goTop.classList.remove("foot");
});
