const skill = document.querySelector(".skill");
const about = document.querySelector(".about");
const header = document.querySelector("header");
const nav = document.querySelectorAll("nav a");
const article = document.querySelectorAll("article");
const per = [90, 90, 90, 85, 50, 50]
let x = true;
let i = document.querySelectorAll(".skill ul li i");
let t = document.querySelectorAll(".skill ul li .per");

window.addEventListener("scroll", function (e) {
	// console.log(skill.getBoundingClientRect().top)
	if(skill.getBoundingClientRect().top <= window.innerHeight){
		if(x){
			i.forEach((item, index) =>{
				item.style.width = `${per[index]}%`;
				t[index].innerText = `${per[index]}%`;
			});
		}
		x = false;
	}
	about.getBoundingClientRect().top < 0+header.clientHeight ? header.classList.add('bg') : header.classList.remove('bg');
});

nav.forEach((item, index) =>{
	item.addEventListener('click', function(){
		window.scrollTo({
			top : article[index+1].offsetTop-header.clientHeight,
			left : 0,
			behavior: 'smooth'
		});
	});
});

document.querySelector("header h1 a").addEventListener('click',() =>{
	window.scrollTo({
		top : 0,
		left : 0,
		behavior: 'smooth'
	});
});