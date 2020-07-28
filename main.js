
//slider *****************************************************************//

const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator')
let index = 0;


prev.addEventListener('click', function(){
   prevSlide();
   updateCircleIndicator();
   resetTimer();
});

next.addEventListener('click', function(){
   nextSlide();
   updateCircleIndicator();
   resetTimer();
});

// circle-indicators
function circleIndicator(){
	for(let i=0;i<slides.length;i++){
		const div = document.createElement("div");
		div.innerHTML = i+1;
		div.setAttribute('onclick', 'indicateSlide(this)')
		div.id = i;
		if(i == 0){
			div.className = 'active';
		}
		indicator.appendChild(div);
	}
}

circleIndicator();

function indicateSlide(element){
	index = element.id;
	changeSlide();
	updateCircleIndicator();
	resetTimer();
}

function updateCircleIndicator(){
	for(let i=0;i<indicator.children.length;i++){
		indicator.children[i].classList.remove('active');
	}
	indicator.children[index].classList.add('active');
}


function prevSlide(){
	if(index==0){
		index = slides.length - 1;
	}
	else{
	index--;
    }
	changeSlide();
}

function nextSlide(){
	if(index == slides.length - 1){
		index = 0;
	}
	else{
	index++;
    }
	changeSlide();
}

function changeSlide(){
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

function resetTimer(){
	clearInterval(timer);
	timer = setInterval(autoPlay, 4000);
}
function autoPlay(){
	nextSlide();
	updateCircleIndicator();
}
let timer = setInterval(autoPlay, 4000);

//end-of-slider********************************************************************//


//slider 22222*****************************************************************//
const reviews = document.querySelector('.reviews').children;
const go = document.querySelector('.go');
const come = document.querySelector('.come');
let count = 0;

come.addEventListener('click', function(){
   comeSlide();
   
});

go.addEventListener('click', function(){
   goSlide();
   
});

function comeSlide(){
	if(count == 0){
		count = reviews.length - 1;
	}
	else{
	count--;
    }
	moveSlide();

}
function goSlide(){
	if(count == reviews.length - 1){
		count = 0
	}
	else{
	count++;
}
	moveSlide();
}
function moveSlide(){
    for(let i=0;i<reviews.length;i++){
        reviews[i].classList.remove('yes');
    }
    reviews[index].classList.add('yes');
}


//end-of-slider 2222********************************************************************//

//scrolls********************************************************************//
const scrollLinks = document.querySelector('.scroll-link');
const navBar = document.querySelector('.nav')

window.addEventListener('scroll', function(){
	const scrollHeight = window.pageYOffset;
	if(scrollHeight > 500){
		scrollLinks.classList.add('show-links');
	}
	else{
		scrollLinks.classList.remove('show-links');
	}
	if(scrollHeight > 400){
		navBar.classList.add('fixed-nav');
	}
	else{
		navBar.classList.remove('fixed-nav');
	}
});

//end-of-scrolls********************************************************************//


//sidebar********************************************************************//
const bars = document.querySelector('.bars');
const closeBtn = document.querySelector('.close-btn');
const ojumo = document.querySelector('.ojumo');

bars.addEventListener('click', function(){
	
	ojumo.classList.toggle('sidebar');
    
});

closeBtn.addEventListener('click', function(){
	ojumo.classList.remove('sidebar');
})
console.log(ojumo);
//end-of-sidebar********************************************************************

