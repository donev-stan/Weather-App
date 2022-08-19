import renderView from "./renderView.js";
import {
	getWeatherDataByCityName,
	getWeatherDataByCoordinates,
} from "./getWeatherData.js";

(() => {
	navigator.geolocation.getCurrentPosition((position) =>
		getWeatherDataByCoordinates(
			position.coords.latitude,
			position.coords.longitude
		).then((data) => {
			renderView(data);
		})
	);

	document.getElementById("search-btn").addEventListener("click", () => {
		const search = document.getElementById("search-field");

		getWeatherDataByCityName(search.value).then((data) => {
			renderView(data);
			search.value = "";
		});
	});
})();
