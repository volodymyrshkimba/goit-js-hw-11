export const fetchByUserKey = userKey => {
	const searchParams = new URLSearchParams({
		key: '45426984-94cd792edc1ba8c0f2dda7afb',
		q: `${userKey.trim()}`,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
	})

	return fetch(`https://pixabay.com/api/?${searchParams}`);
}