var weatherAPIKey = "a1139edec8d600d35d1e71733cd412a8";

var barEl = document.querySelector("#searchCity");
var searchEl = document.querySelector("#button");

searchEl.addEventListener("click", getApi);

  function getApi() {
    var city = barEl.value;
    var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + weatherAPIKey;

    fetch(weatherUrl)
      .then((response) => response.json())
      .then((res) => {

        var cityName = res.city.name;

        var cityNameEl = document.querySelector("#todaysForecast");
        cityNameEl.textContent = cityName;

        var searchHistory = res.city.history;

        var cityHistoryEl = document.querySelector(".history");
        cityHistoryEl.textContent = searchHistory;
        console.log(searchHistory);

        // var displayWeatherEl = 
        // displayWeatherEl.

      })
      .catch((err) => console.error(err));
  };

