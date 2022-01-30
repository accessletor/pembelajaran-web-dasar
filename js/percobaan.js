const tombol = document.getElementsByTagName('button')[0];

tombol.addEventListener('click', function () {
	document.body.classList.toggle('biru-muda');
});

//random
const tbaru = document.createElement('button');
const isit = document.createTextNode('Random');
tbaru.appendChild(isit);

tombol.after(tbaru);

tbaru.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 0);
	const g = Math.round(Math.random() * 255 + 0);
	const b = Math.round(Math.random() * 255 + 0);
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

//slider
const smerah = document.querySelector('input[name = smerah]');

const sbiru = document.querySelector('input[name = sbiru]');

const shijau = document.querySelector('input[name = shijau]');

smerah.addEventListener('input', function(){
	const r = smerah.value;
	const g = shijau.value;
	const b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
shijau.addEventListener('input', function(){
	const r = smerah.value;
	const g = shijau.value;
	const b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sbiru.addEventListener('input', function(){
	const r = smerah.value;
	const g = shijau.value;
	const b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
// kursor
document.body.addEventListener('mousemove', function(event){
	const x = Math.round((event.clientX / window.innerWidth) * 255);
	const y = Math.round((event.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+x+','+y+',100)';
})