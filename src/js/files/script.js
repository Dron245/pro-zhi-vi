// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// const element = document.getElementById('tel');
// const maskOptions = {
//   mask: '+{7}(000)000 00 00'
// };
// const mask = IMask(element, maskOptions);

// const elementtwo = document.getElementById('teltwo');
// const maskOptionstwo = {
//   mask: '+{7}(000)000 00 00'
// };
// const masktwo = IMask(elementtwo, maskOptionstwo);
// const mainBlock = document.querySelector('.main-block');
// const reason = document.querySelector('.reason');
// const qwe = reason.classList.contains('_watcher-view');
// console.log(qwe);

// if (reason.classList.contains('_watcher-view')) {
	// mainBlock.classList.toggle('scroll')
// 	console.log('123');
// }
// document.addEventListener("DOMContentLoaded", ready);

// function ready() {
// 	const doctorData = document.querySelector('.doctor-data');
// const doctorDataChord = doctorData.offsetTop + doctorData.clientHeight
// console.log(doctorDataChord);
// const reason = document.querySelector('.reasons');
// const reasonChord = reason.offsetTop;
// console.log(reasonChord);
// if (doctorDataChord == reasonChord) {
// 	console.log('123');
	
// }
// }

// var content = document.querySelector('.programs__content');
// window.addEventListener('scroll', function() {
//   var scrolledY = window.scrollY;
//   var scrolledX = window.scrollX;
// 	const programs = document.querySelector('.programs');
//   if (
// 	scrolledY > 625
//   //programs.classList.contains('_watcher-view')
//    && scrolledY < 3112
//   ) {
//     content.style.marginTop = 150 + 'px';
//     content.style.position = "fixed";
//     content.style.top = scrolledY * 0.001 + 'px';
//     content.style.left = -(scrolledY - 625) * 0.55 + 'px';

//   }
//   if (scrolledY <= 625) {
//     content.style.position = "initial";

//   }
//   if (scrolledY >= 3112) {

//     content.style.position = "absolute";
//     content.style.top = 3112 + 'px';

//   }


// });

/*if (document.body.clientWidth > 900) {
	const spaceHolder = document.querySelector('.space');
	const horizontal = document.querySelector('.horizontal');
 
	if (spaceHolder) {
	  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
 
	  function calcDynamicHeight(ref) {
		 const vw = window.innerWidth;
		 const vh = window.innerHeight;
		 const objectWidth = ref.scrollWidth;
		 
		 if (document.body.clientWidth > 1920) {
			return objectWidth - vw + vh + vw / 1.7;
		 }
 
		 if (document.body.clientWidth > 1366) {
			return objectWidth - vw + vh + vw / 1.25;
		 }
 
		 if (document.body.clientWidth <= 1366) {
			return objectWidth - vw + vh + vw / 3;
		 }
	  }
	  if (horizontal) {
		 window.addEventListener('scroll', () => {
			const sticky = document.querySelector('.sticky');
			horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
			spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
 
			if (window.activeScroll) {
			  window.activeScroll();
			}
		 });
 
		 window.addEventListener('resize', () => {
			spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
		 });
	  }
	}
 }*/

 window.addEventListener('click', e => { 
	const target = e.target 
	// const menu = document.querySelector('.menu__body');
	if (!target.closest('.menu__icon') && !target.closest('.menu__body')) { 
	document.documentElement.classList.remove("menu-open");
	}
 })


 if (document.body.clientWidth > 991) {
	const spaceHolder = document.querySelectorAll('.space');
	// const horizontal = document.querySelector('.horizontal');
 
	if (spaceHolder) {
		spaceHolder.forEach(element => {
			const horizontal = element.querySelector('.horizontal');
			element.style.height = `${calcDynamicHeight(horizontal)}px`;
			const sticky = element.querySelector('.sticky');
			window.addEventListener('scroll', () => {
			// const sticky = document.querySelector('.sticky');
			horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
			element.style.height = `${calcDynamicHeight(horizontal)}px`;
				
			if (window.activeScroll) {
			  window.activeScroll();
			}
		 });
 
		 window.addEventListener('resize', () => {
			element.style.height = `${calcDynamicHeight(horizontal)}px`;
		 });
		});
	//   spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
 
	  function calcDynamicHeight(ref) {
		 const vw = window.innerWidth;
		 const vh = window.innerHeight;
		 const objectWidth = ref.scrollWidth;
		//  console.log(objectWidth);
		 if (document.body.clientWidth > 1920) {
			return objectWidth - vw + vh + vw / 3;
		 }
 
		 if (document.body.clientWidth > 1366) {
			return objectWidth - vw + vh + vw / 3;
		 }
 
		 if (document.body.clientWidth <= 1366) {
			return objectWidth - vw + vh + vw / 3;
		 }
	  }
	//   if (horizontal) {
		 
	  }
	// }
 }