// my API key 00c0c03a085f1c057eaf6be2d1ca349e


var searchFormEl = document.querySelector("#searchForm");
var cityInputEl = document.querySelector("#cityName");
var cityUV = document.getElementById("cityInput");

var getWeatherConditions = function (event) {
    event.preventDefault();
    console.log(event);

    var cityName = cityInputEl.value.trim();
    if (cityName) {

        var apiUrlGeo = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInputEl.value + "&appid=00c0c03a085f1c057eaf6be2d1ca349e";
        fetch(apiUrlGeo).then(function (response) {
            return response.json().then(function (data) {
                console.log(data);
                var lat = data[0].lat
                var lon = data[0].lon

                

                var apiUrlOneCal = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=00c0c03a085f1c057eaf6be2d1ca349e";
                fetch(apiUrlOneCal).then(function (response) {
                    return response.json().then(function (data) {
                        console.log(data);
                        document.getElementById("dayOneUV").textContent = "UV Index: " + data.daily[0].uvi;
                        document.getElementById("dayTwoUV").textContent = "UV Index: " + data.daily[1].uvi;
                        document.getElementById("dayThreeUV").textContent = "UV Index: " + data.daily[2].uvi;
                        document.getElementById("dayFourUV").textContent = "UV Index: " + data.daily[3].uvi;
                        document.getElementById("dayFiveUV").textContent = "UV Index: " + data.daily[4].uvi;
                        cityUV.textContent = "UV Index: " + data.current.uvi;
                        var uVI = parseInt(data.current.uvi);
                        if (uVI <= 2.9) {
                            cityUV.classList.add("favorable");
                        } else if (3 <= uVI || uVI <= 5.9) {
                            cityUV.classList.add("moderate");
                        } else if (uVI >= 6) {
                            cityUV.classList.add("severe");
                        }
                    })
                })

            })
        });

        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl.value + "&appid=00c0c03a085f1c057eaf6be2d1ca349e" + "&units=imperial";
        fetch(apiUrl).then(function (response) {
            return response.json().then(function (data) {
                console.log(data);
                document.getElementById("cityIcon").classList.remove("hide");
                document.getElementById("cityIcon").setAttribute("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                document.getElementById("cityNameMain").textContent = data.name + "   " + moment().format("dddd, MMMM Do, YYYY");
                document.getElementById("cityTemp").textContent = "Temperature: " + data.main.temp + " F";
                document.getElementById("cityHumidity").textContent = "Humidity: " + data.main.humidity + "%";
                document.getElementById("cityWindSpeed").textContent = "Wind Speed: " + data.wind.speed + " MPH";
            });
        });
        var apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&appid=00c0c03a085f1c057eaf6be2d1ca349e" + "&units=imperial";
        fetch(apiUrl2).then(function (response) {
            return response.json().then(function (data) {
                console.log(data);

                document.getElementById("dayOneCity").textContent = data.city.name;
                document.getElementById("dayOneIcon").classList.remove("hide");
                document.getElementById("dayOneIcon").setAttribute("src", "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png");
                document.getElementById("dayOneDate").textContent = data.list[0].dt_txt;
                document.getElementById("dayOneTemp").textContent = "Temperature: " + data.list[0].main.temp + " F";
                document.getElementById("dayOneHumid").textContent = "Humidity: " + data.list[0].main.humidity + "%";
                document.getElementById("dayOneWind").textContent = "Wind Speed: " + data.list[0].wind.speed + " MPH";

                document.getElementById("dayTwoCity").textContent = data.city.name;
                document.getElementById("dayTwoIcon").classList.remove("hide");
                document.getElementById("dayTwoIcon").setAttribute("src", "https://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
                document.getElementById("dayTwoDate").textContent = data.list[1].dt_txt;
                document.getElementById("dayTwoTemp").textContent = "Temperature: " + data.list[1].main.temp + " F";
                document.getElementById("dayTwoHumid").textContent = "Humidity: " + data.list[1].main.humidity + "%";
                document.getElementById("dayTwoWind").textContent = "Wind Speed: " + data.list[1].wind.speed + " MPH";

                document.getElementById("dayThreeCity").textContent = data.city.name;
                document.getElementById("dayThreeIcon").classList.remove("hide");
                document.getElementById("dayThreeIcon").setAttribute("src", "https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png");
                document.getElementById("dayThreeDate").textContent = data.list[2].dt_txt;
                document.getElementById("dayThreeTemp").textContent = "Temperature: " + data.list[2].main.temp + " F";
                document.getElementById("dayThreeHumid").textContent = "Humidity: " + data.list[2].main.humidity + "%";
                document.getElementById("dayThreeWind").textContent = "Wind Speed: " + data.list[2].wind.speed + " MPH";

                document.getElementById("dayFourCity").textContent = data.city.name;
                document.getElementById("dayFourIcon").classList.remove("hide");
                document.getElementById("dayFourIcon").setAttribute("src", "https://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png");
                document.getElementById("dayFourDate").textContent = data.list[3].dt_txt;
                document.getElementById("dayFourTemp").textContent = "Temperature: " + data.list[3].main.temp + " F";
                document.getElementById("dayFourHumid").textContent = "Humidity: " + data.list[3].main.humidity + "%";
                document.getElementById("dayFourWind").textContent = "Wind Speed: " + data.list[3].wind.speed + " MPH";

                document.getElementById("dayFiveCity").textContent = data.city.name;
                document.getElementById("dayFiveIcon").classList.remove("hide");
                document.getElementById("dayFiveIcon").setAttribute("src", "https://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png");
                document.getElementById("dayFiveDate").textContent = data.list[4].dt_txt;
                document.getElementById("dayFiveTemp").textContent = "Temperature: " + data.list[4].main.temp + " F";
                document.getElementById("dayFiveHumid").textContent = "Humidity: " + data.list[4].main.humidity + "%";
                document.getElementById("dayFiveWind").textContent = "Wind Speed: " + data.list[4].wind.speed + " MPH";
            })
        })
    } else {
        alert("Please enter a city name!");
    };
    };

searchFormEl.addEventListener("submit", getWeatherConditions);