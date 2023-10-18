// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const element = document.getElementById('tel');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);

// const mainBlock = document.querySelector('.main-block');
// const reason = document.querySelector('.reason');
// const qwe = reason.classList.contains('_watcher-view');
// console.log(qwe);

// if (reason.classList.contains('_watcher-view')) {
	// mainBlock.classList.toggle('scroll')
// 	console.log('123');
// }
document.addEventListener("DOMContentLoaded", ready);

function ready() {
	const doctorData = document.querySelector('.doctor-data');
const doctorDataChord = doctorData.offsetTop + doctorData.clientHeight
console.log(doctorDataChord);
const reason = document.querySelector('.reason');
const reasonChord = reason.offsetTop;
console.log(reasonChord);
if (doctorDataChord == reasonChord) {
	console.log('123');
	
}
}
