const tombol = document.getElementsByTagName('button')[0];

tombol.addEventListener('click', function () {
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', "biru-muda");
	document.body.classList.toggle('biru-muda');
});

//buat tombol
const tbaru = document.createElement('button');
const isit = document.createTextNode('Random');
tbaru.appendChild(isit);
tbaru.setAttribute('type','button');

tombol.after(tbaru);

tbaru.addEventListener('click', function(){
	const r = Math.round( Math.random() * 255 + 1);
	const g = Math.round( Math.random() * 255 + 1);
	const b = Math.round( Math.random() * 255 + 1);
	console.log(r);
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


//slider
const smerah = document.querySelector('input[name=smerah]');
const shijau = document.querySelector('input[name=shijau]');
const sbiru = document.querySelector('input[name=sbiru]');

smerah.addEventListener('input', function(){
	r = smerah.value;
	g = shijau.value;
	b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
shijau.addEventListener('input', function(){
	r = smerah.value;
	g = shijau.value;
	b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sbiru.addEventListener('input', function(){
	r = smerah.value;
	g = shijau.value;
	b = sbiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
//kursor
document.body.addEventListener('mousemove', function (event) {
	// console.log(event.clientX);
	//ukuran browser
	// console.log(window.innerWidth);
	const xpos = Math.round((event.clientX / window.innerWidth) * 255);
	const ypos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+xpos+','+ypos+',100)';
})