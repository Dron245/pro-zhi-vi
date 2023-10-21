// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const element = document.getElementById('tel');
const maskOptions = {
  mask: '+{7}(000)000 00 00'
};
const mask = IMask(element, maskOptions);

const elementtwo = document.getElementById('teltwo');
const maskOptionstwo = {
  mask: '+{7}(000)000 00 00'
};
const masktwo = IMask(elementtwo, maskOptionstwo);
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
