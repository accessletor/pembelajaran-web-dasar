const tombolSearch = document.querySelector('.mencari');
tombolSearch.addEventListener('click', async function () {
	try {
		const input = document.querySelector('.keywordsan');
		const Movies = await getMovies(input.value);
		updateUi(Movies)
	}catch(err){
		// var ket = document.createElement('p');
		// var isiket = document.createTextNode('tidak tersedia');
		// ket.appendChild(isiket);
		// const ambil = document.querySelector('.container-card');
		// ambil.appendChild(ket)
		// ket.style.textAlign = 'center';
		swal(`${err}`);
	}
})
//ketka detail di klik
document.addEventListener('click',async function (e) {
	if (e.target.classList.contains('tombol-detail')) {
			const imdbid = e.target.dataset.imdbid;
			const detail = await getDetail(imdbid);
			updateUIDetail(detail)
	}
})
//kumpulan function
//detail
function getDetail(imdbid) {
	return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid)
	.then(response =>  response.json())
	.then(m => m)
}
function updateUIDetail(m) {
	const detailModal = modalDetail(m);
	const modalBody = document.querySelector('.modal-body');
	modalBody.innerHTML = detailModal;
}


//search
function getMovies(keyword) {
	return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s='+ keyword)
	.then(response => {
		if (!response.ok) {
			throw new Error(response.statusText)
		}
		return response.json()
	})
	.then(response => {
		if (response.Response === false) {
			throw new Error(response.Error)
		}
		return response.Search
	})
}
function updateUi(movies) {
	let cards = '';
	movies.forEach(m => cards += cardDetail(m));
	const movieContainer = document.querySelector('.container-card');
	movieContainer.innerHTML = cards;
}


function cardDetail(m) {
	return `<div class="col-md-4 my-5">
	<div class="card">
	<img src="${m.Poster}" class="card-img-top" alt="">
	<div class="card-body">
	<h5 class="card-title">${m.Title}</h5>
	<p class="card-text">${m.Year}</p>
	<a href="#" class="btn btn-primary tombol-detail"  data-bs-toggle="modal" data-bs-target="#modal-movie" data-imdbid="${m.imdbID}">Detail</a>
	</div>
	</div>
	</div>`;
}

function modalDetail(m) {
	return `<div class="container-fluid">
	<div class="row">
	<div class="col-md-3">
	<img src="${m.Poster}" alt="" class="img-fluid">
	</div>
	<div class="col-md">
	<ul class="list-group">
	<li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
	<li class="list-group-item"><strong>Sutradara :</strong> ${m.Director}</li>
	<li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
	<li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
	<li class="list-group-item"><strong>Plot :</strong> <br> ${m.Plot}</li>
	</ul>
	</div>
	</div>
	</div>`;
}