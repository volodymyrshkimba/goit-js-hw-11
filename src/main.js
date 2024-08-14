const formEL = document.querySelector('.search-form');
const galleryEL = document.querySelector('.gallery');

const onFormElSubmit = event => {
	event.preventDefault();
	const userKeyword = event.target.elements.user_keyword.value;
	if (userKeyword.trim() === '') {
		console.log('Enter correct key');
		return;
	}
   
	const searchParams = new URLSearchParams({
		key: '45426984-94cd792edc1ba8c0f2dda7afb',
		q: `${userKeyword.trim()}`,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
	})
	
	fetch(`https://pixabay.com/api/?${searchParams}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response.json();
		})
		.then(data => {
			if (data.hits.length === 0) {
				console.log("Sorry, there are no images matching your search query. Please try again!");
				return;
			}
			console.log(data.hits);
			const markup = data.hits.map(imgObj => {
				const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = imgObj;
				return `<li class="item">
        						<a class="item-link" href="${largeImageURL}"><img class="item-img" src="${webformatURL}" alt="" title="${tags}" /></a>
								<ul class="item-desc">
         						 <li>Likes
									 	<p>${likes}</p>
									 </li>
      						    <li>Views
									 	<p>${views}</p>
									 </li>
    						       <li>Comments
									 	<p>${comments}</p>
									 </li>
     							    <li>Downloads
									 	<p>${downloads}</p>
									 </li>
      					   </ul>
                    </li>`
			}).join('');
			console.log(markup);
			galleryEL.innerHTML = markup;

		})
		.catch(err => console.log(err));
}

formEL.addEventListener('submit', onFormElSubmit)
