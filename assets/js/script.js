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
        console.log(res)

        var forecastEl = document.getElementById("ul");

        for (i = 0; i < 5; i++) {
          var cityEl = $("h3").addClass("weather");
          var weatherEl = $("div").attr();
          var tempEl = $("div").text(res.list[i*8].main.temp);
        }

      })
      .catch((err) => console.error(err));
  };

  