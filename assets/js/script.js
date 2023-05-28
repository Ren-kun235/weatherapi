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
        console.log(res);
        var cityName = res.city.name;

        var cityNameEl = document.querySelector("#cityName");
        cityNameEl.textContent = cityName;

        // var searchHistory = res.city.history;

        // var cityHistoryEl = document.querySelector(".history");
        // cityHistoryEl.textContent = searchHistory;
        
        for (let i = 0; i < 5; i++) {

          var temp = res.list[i].main.temp;
          var tempEl = document.querySelector(`#temp${i+1}`)
          tempEl.textContent = temp;

          var weatherIcon = res.list[i].weather[0].icon;
          var weatherIconEl = document.querySelector(`#weatherIcon${i+1}`)
          weatherIconEl.textContent = weatherIcon;

          var humidity = res.list[i].main.humidity;
          var humidityEl = document.querySelector(`#humidity${i+1}`)
          humidityEl.textContent = humidity;

          var windSpeeds = res.list[i].wind.speed;
          var windSpeedsEl = document.querySelector(`#windSpeeds${i+1}`)
          windSpeedsEl.textContent = windSpeeds;

          var date = res.list[i].dt_txt;
          var dateEl = document.querySelector(`#date${i+1}`)
          dateEl.textContent = date;
        }

      })
      .catch((err) => console.error(err));
  };

