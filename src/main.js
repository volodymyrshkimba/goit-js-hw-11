import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createMarkup } from './js/render-functions';
import { fetchByUserKey } from './js/pixabay-api';

const formEL = document.querySelector('.search-form');
const galleryEL = document.querySelector('.gallery');
const galleryModal = new SimpleLightbox('.gallery a');

const onFormElSubmit = event => {
	event.preventDefault();
	const userKeyword = event.target.elements.user_keyword.value;
	if (userKeyword.trim() === '') {
		return;
	}
	galleryEL.innerHTML = '';
   
	const loaderEl = document.createElement('p');
	loaderEl.classList.add('loader');
	formEL.after(loaderEl);
	
	fetchByUserKey(userKeyword)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response.json();
		})
		.then(data => {
			if (data.hits.length === 0) {
				iziToast.error({
					message: 'Sorry, there are no images matching your search query. Please try again!',
					position: 'topRight',
				});
				return;
			}
			galleryEL.innerHTML = createMarkup(data.hits);
			galleryModal.refresh();
		})
		.catch(err => console.log(err))
		.finally(() => {
			loaderEl.remove();
		});
	formEL.reset();
}

formEL.addEventListener('submit', onFormElSubmit)
