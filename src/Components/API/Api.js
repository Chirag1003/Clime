export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
export const GEO_API_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_GEO_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_GEO_API_HOST
	}
};