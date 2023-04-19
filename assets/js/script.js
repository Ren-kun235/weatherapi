var weatherAPIKey = "a1139edec8d600d35d1e71733cd412a8";
// var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherAPIKey;
var city = "";

var getReviews = function (weather) {
    var weatherUrl = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f48dd780damshf6554dc854efa2fp1b25dfjsn85a9e44222d9",
        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
      },
    };
  

  };

  function getApi() {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherAPIKey;

    fetch(weatherUrl)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }