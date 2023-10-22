const winHi = window.innerHeight;
const skill = document.querySelector(".skill");
const about = document.querySelector(".about");
const header = document.querySelector("header");
const nav = document.querySelectorAll("nav a");
const article = document.querySelectorAll("article");
const per = [90, 90, 90, 85, 50, 50]
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

// skill 애니
window.addEventListener("scroll", function (e) {
	// console.log(skill.getBoundingClientRect().top)
	if(skill.getBoundingClientRect().top <= winHi){
		pr.init();
		pr.action();
		if(x){
			i.forEach((item, index) =>{
				item.style.width = `${per[index]}%`;
				// t[index].innerText = `${per[index]}%`;
				interval(per[index], index)
			});
		}
		x = false;
	}
	about.getBoundingClientRect().top < 0+header.clientHeight ? header.classList.add('bg') : header.classList.remove('bg');
});

// gnb 클릭 이동
nav.forEach((item, index) =>{
	item.addEventListener('click', function(){
		goTo(article[index+1].offsetTop-header.clientHeight);
	});
});

document.querySelector("header h1 a").addEventListener('click',() =>{
	goTo(0);
});

const item = document.querySelectorAll(".parallax-div span");
const itemTop = [];
for(let i = 0;i<=item.length-1;i++){
	itemTop[i] = item[i].offsetTop;
}

const pr = {
	init : function(){
		this.items = document.querySelectorAll(".parallax-div span");
	},
	action : function(){
				// console.log(item[0].offsetTop)
		window.addEventListener("scroll", function (e) {			
			const skillTop = skill.getBoundingClientRect().top;
			// for(var i=0;i<=9;i++){
			// 	item[i].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1501}px, 0)`
			// }			
			item[0].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1501}px, 0)`
			item[1].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2001}px, 0)`
			item[2].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1001}px, 0)`
			item[3].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2001}px, 0)`
			item[4].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.0801}px, 0)`
			item[5].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2001}px, 0)`
			item[6].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2501}px, 0)`
			item[7].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.2501}px, 0)`
			// item[8].style.transform = `translate3d(-50%, ${Math.abs(skillTop - winHi) * -0.1501}px, 0)`			
		})
	}
} 

