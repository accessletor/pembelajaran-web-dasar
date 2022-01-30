const menuTo = document.querySelector('.icon');
const nav = document.querySelector('.otak');
menuTo.addEventListener('click', function () {
	nav.classList.toggle('slide');
});
//satu
const one = document.querySelector('.satu');
one.addEventListener('click', function () {
const p = document.querySelectorAll('.bg-primary');
for (var i = 0; i < p.length; i++) {
	p[i].classList.replace('bg-primary','khusus1');
}
const b = document.querySelectorAll('.khusus3');
for (var i = 0; i < b.length; i++) {
	b[i].classList.replace('khusus3','khusus1');
}
const h = document.querySelectorAll('.btn');
for (var i = 0; i < h.length; i++) {
	h[i].classList.replace('khusus3','khusus1');
	h[i].style.color = 'white';
}
const hj = document.querySelectorAll('.btn');
for (var i = 0; i < hj.length; i++) {
	hj[i].classList.replace('btn-primary','khusus1');
	hj[i].style.color = 'white';
}
const all = document.querySelectorAll('.alert');
for (var i = 0; i < all.length; i++) {
	all[i].classList.replace('alert-khusus3','alert-khusus1');
}
const alert = document.querySelectorAll('.alert');
for (var i = 0; i < alert.length; i++) {
	alert[i].classList.replace('alert-primary','alert-khusus1');
}
const hover = document.querySelectorAll('.portfolio-item-caption');
for (var j = 0; j < hover.length; j++) {
	hover[j].classList.add('khusus1');
}
const close = document.querySelectorAll('.portfolio-modal .close');
for (var j = 0; j < close.length; j++) {
	close[j].style.color = 'rgb(92, 237, 170)';
};
const label = document.querySelectorAll('.floating-label-form-group');
for (var j = 0; j < label.length; j++) {
	label[j].style.color = 'rgb(92, 237, 170)';
};
const link = document.getElementsByTagName('a');
for (var j = 0; j < hover.length; j++) {
	hover[j].classList.add('khusus1');
}
const ganti = document.querySelector('.ganti');
ganti.style.color = 'rgb(92, 237, 170)';
});


//dua
const two = document.querySelector('.dua');
two.addEventListener('click', function () {
const p = document.querySelectorAll('.khusus1');
for (var i = 0; i < p.length; i++) {
	p[i].classList.replace('khusus1','bg-primary');
}
const b = document.querySelectorAll('.khusus3');
for (var i = 0; i < b.length; i++) {
	b[i].classList.replace('khusus3','bg-primary');
}
const h = document.querySelectorAll('.btn');
for (var i = 0; i < h.length; i++) {
	h[i].classList.replace('khusus1','btn-primary');
	h[i].style.color = 'white';
}
const hj = document.querySelectorAll('.btn');
for (var i = 0; i < hj.length; i++) {
	hj[i].classList.replace('khusus3','btn-primary');
	hj[i].style.color = 'white';
}
const all = document.querySelectorAll('.alert');
for (var i = 0; i < all.length; i++) {
	all[i].classList.replace('alert-khusus3','alert-primary');
}
const alert = document.querySelectorAll('.alert');
for (var i = 0; i < alert.length; i++) {
	alert[i].classList.replace('alert-khusus1','alert-primary');
}
const hover = document.querySelectorAll('.portfolio-item-caption');
for (var j = 0; j < hover.length; j++) {
	hover[j].classList.add('default');
}
const close = document.querySelectorAll('.portfolio-modal .close');
for (var j = 0; j < close.length; j++) {
	close[j].style.color = '#1abc9c';
};
const label = document.querySelectorAll('.floating-label-form-group');
for (var j = 0; j < label.length; j++) {
	label[j].style.color = '#1abc9c';
};
const ganti = document.querySelector('.ganti');
ganti.style.color = '#1abc9c';
});

//tiga
const tree = document.querySelector('.tiga');
tree.addEventListener('click', function () {
const p = document.querySelectorAll('.bg-primary');
for (var i = 0; i < p.length; i++) {
	p[i].classList.replace('bg-primary','khusus3');
}
const b = document.querySelectorAll('.khusus1');
for (var i = 0; i < b.length; i++) {
	b[i].classList.replace('khusus1','khusus3');
}
const h = document.querySelectorAll('.btn');
for (var i = 0; i < h.length; i++) {
	h[i].classList.replace('khusus1','khusus3');
	h[i].style.color = 'white';
}
const hj = document.querySelectorAll('.btn');
for (var i = 0; i < hj.length; i++) {
	hj[i].classList.replace('btn-primary','khusus3');
	hj[i].style.color = 'white';
}
const all = document.querySelectorAll('.alert');
for (var i = 0; i < all.length; i++) {
	all[i].classList.replace('alert-khusus1','alert-khusus3');
}
const alert = document.querySelectorAll('.alert');
for (var i = 0; i < alert.length; i++) {
	alert[i].classList.replace('alert-primary','alert-khusus3');
}
const hover = document.querySelectorAll('.portfolio-item-caption');
for (var j = 0; j < hover.length; j++) {
	hover[j].classList.add('khusus3');
}
const close = document.querySelectorAll('.portfolio-modal .close');
for (var j = 0; j < close.length; j++) {
	close[j].style.color = 'rgb(53, 87, 212)';
};
const label = document.querySelectorAll('.floating-label-form-group');
for (var j = 0; j < label.length; j++) {
	label[j].style.color = 'rgb(53, 87, 212)';
};
const ganti = document.querySelector('.ganti');
ganti.style.color = 'rgb(53, 87, 212)';
});
