let skill = document.querySelector(".skill");
let x = true;
let i = document.querySelectorAll(".skill ul li i");
let t = document.querySelectorAll(".skill ul li .per");
const per = [90, 90, 90, 85, 50, 50]

window.addEventListener("scroll", function (e) {
	console.log(skill.getBoundingClientRect().top)
	if(skill.getBoundingClientRect().top <= window.innerHeight){
		if(x){
			i.forEach((item, index) =>{
				item.style.width = `${per[index]}%`;
				t[index].innerText = `${per[index]}%`;
			});
		}
		x = false;
	}
});


