const base_url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "5f8a37ed7193d4efdf2430a2a0b83988";

export const getWeatherDataByCoordinates = (
	lat = 42.136097,
	lon = 24.742168
) => {
	return fetch(`${base_url}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => console.error(error));
};

export const getWeatherDataByCityName = (cityName = "Plovdiv") => {
	return fetch(`${base_url}?q=${cityName}&appid=${apiKey}`)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => console.error(error));
};
