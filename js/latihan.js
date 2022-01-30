// const bt = document.getElementById('ubah');
// bt.addEventListener('click', function () {
// 	document.body.classList.toggle('skyblue');
// });
// const random = document.createElement('button');
// const isit = document.createTextNode('random');
// random.appendChild(isit);
// random.setAttribute('type', 'button');
// bt.after(random);

// random.addEventListener('click', function () {
// 	const r = Math.round(Math.random() * 255 + 1);
// 	const g = Math.round(Math.random() * 255 + 1);
// 	const b = Math.round(Math.random() * 255 + 1);
// 	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
// });

// const smerah = document.querySelector('input[name=smerah]');
// const shijau = document.querySelector('input[name=shijau]');
// const sbiru = document.querySelector('input[name=sbiru]');
// smerah.addEventListener('input', function(){
// 	const r = smerah.value;
// 	const g = shijau.value;
// 	const b = sbiru.value;
// 	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// })
// shijau.addEventListener('input', function(){
// 	const r = smerah.value;
// 	const g = shijau.value;
// 	const b = sbiru.value;
// 	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// })
// sbiru.addEventListener('input', function(){
// 	const r = smerah.value;
// 	const g = shijau.value;
// 	const b = sbiru.value;
// 	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// })

// document.body.addEventListener('mousemove', function(event) {
// 	//posisi mouse
// 	// console.log(event.clientX)
// 	//ukuran browser
// 	// console.log(window.innerWidth);
// 	const xPos = Math.round((event.clientX	/ window.innerWidth) * 255);
// 	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
// 	document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)'
// })


const bt = document.getElementById('ubah');
bt.addEventListener('click', function(){
	document.body.classList.toggle('skyblue');
});
const button = document.createElement('button');
const isib = document.createTextNode('random');
button.appendChild(isib);
bt.after(button);
button.setAttribute('type','button');

button.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
const smerah = document.querySelector('input[name=smerah]');
const shijau = document.querySelector('input[name=shijau]');
const sbiru = document.querySelector('input[name=sbiru]');
smerah.addEventListener('input',function(){
	const r = smerah.value;
	const g = shijau.value;
	const b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
shijau.addEventListener('input',function(){
	const r = smerah.value;
	const g = shijau.value;
	const b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sbiru.addEventListener('input',function(){
	const r = smerah.value;
	const g = shijau.value;
	const b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
//mouse
document.body.addEventListener('mousemove',function(event){
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';	
})