const winHi = window.innerHeight;
const article = document.querySelectorAll("article");
const main = document.querySelector(".main");
const header = document.querySelector("header");
const nav = document.querySelectorAll("nav a");
const skill = document.querySelector(".skill");
const about = document.querySelector(".about");
// skill
// const dogBone = document.querySelector(".parallax-div .material-symbols-outlined");
const per = [90, 90, 70, 90, 90, 50, 50]
let x = true;
let i = document.querySelectorAll(".skill ul li i");
let t = document.querySelectorAll(".skill ul li .per");

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

const scrSum = winHi - 450;
let move = 0;
// gnb 클릭 이동
nav.forEach((item, index) =>{
	item.addEventListener('click', function(){
		(window.scrollY <= 100) ? move = scrSum : move=0;
		setTimeout(() =>{
		},200)
		goTo(article[index+1].offsetTop-header.clientHeight-move);
	});
});
document.querySelector("header h1 a").addEventListener('click',() =>{
	goTo(0);
});


window.addEventListener("scroll", function (e) {
	(window.scrollY > 100) ? main.classList.add("static") : main.classList.remove("static");	// 메인 풀화면
	if(skill.getBoundingClientRect().top <= winHi && skill.getBoundingClientRect().top + skill.clientHeight > 0){
		// console.log(skill.getBoundingClientRect().top)
		// dogBone.style.willChange = 'transform'; 
		parallaxEv.init();
		parallaxEv.action();
		if(x){
			i.forEach((item, index) =>{
				item.style.width = `${per[index]}%`;
				// t[index].innerText = `${per[index]}%`;
				interval(per[index], index)
			});
		}
		x = false;
	}
	// if(skill.getBoundingClientRect().top + skill.clientHeight < 0){
	// 	dogBone.style.willChange = 'auto';
	// }
	// 스크롤 내려갈 때 헤더 백그라운드 주기
	about.getBoundingClientRect().top < 0+header.clientHeight ? header.classList.add('bg') : header.classList.remove('bg');
});

// skill 패럴렉스
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
			// for(var i=0;i<=9;i++){
			// 	item[i].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1501}px, 0)`
			// }			
			item[0].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0501}px, 0)`
			item[1].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2501}px, 0)`
			item[2].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.9501}px, 0)`
			item[3].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0201}px, 0)`
			item[4].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0801}px, 0)`
			item[5].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1301}px, 0)`
			item[6].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1001}px, 0)`
			item[7].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.3501}px, 0)`
			// item[8].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1501}px, 0)`			
		})
	}
}

