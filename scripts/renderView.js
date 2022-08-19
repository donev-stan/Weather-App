const elements = {
	name: () => document.getElementById("town-name"),
	temp: () => document.getElementById("result-curr-temp"),
	feels_like: () => document.getElementById("result-feelslike-temp"),
	min_temp: () => document.getElementById("result-min-temp"),
	max_temp: () => document.getElementById("result-max-temp"),
	humidity: () => document.getElementById("result-humidity"),

	weather_img: () => document.getElementById("weather-img"),
	weather_text: () => document.getElementById("result-weather-text"),
	weather_desc: () => document.getElementById("result-weather-desc"),
};

const renderView = async (data) => {
	console.log(data);

	if (data.cod !== 200) {
		// throw new Error(data.message);

		const loadingImg = `<img src="./images/loader.png" class="loader-img">`;

		const errorMsgWithUpperCase =
			data.message.split(".")[0].charAt(0).toUpperCase() +
			data.message.split(".")[0].slice(1);

		elements.name().innerText = errorMsgWithUpperCase;
		elements.temp().innerHTML = loadingImg;
		elements.feels_like().innerHTML = loadingImg;
		elements.min_temp().innerHTML = loadingImg;
		elements.max_temp().innerHTML = loadingImg;
		elements.humidity().innerHTML = loadingImg;

		elements.weather_img().src = chooseWeatherImage("");
		elements.weather_text().innerHTML = "";
		elements.weather_desc().innerHTML = "";

		return;
	}

	const town_name = data?.name;
	const { temp, feels_like, temp_min, temp_max, humidity } = data?.main;
	const { main: weather_text, description } = data?.weather[0];

	elements.name().innerText = town_name;
	elements.temp().innerText = `${String(temp).slice(0, 2)} ℃`;
	elements.feels_like().innerText = `${String(feels_like).slice(0, 2)} ℃`;
	elements.min_temp().innerText = `${String(temp_min).slice(0, 2)} ℃`;
	elements.max_temp().innerText = `${String(temp_max).slice(0, 2)} ℃`;
	elements.humidity().innerText = `${humidity} %`;

	elements.weather_img().src = chooseWeatherImage(weather_text);
	elements.weather_text().innerText = weather_text;
	elements.weather_desc().innerText = description;
};

const chooseWeatherImage = (text) => {
	switch (text) {
		case "Clouds":
			return "./images/cloudy.png";

		case "Clear":
			return "./images/sunny.png";

		case "Rain":
			return "./images/rainy.png";

		default:
			return "./images/default.png";
	}
};

export default renderView;
