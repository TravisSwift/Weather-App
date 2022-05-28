function GetInfo () {
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHtml = "--" + newName.value + "--";



fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=00c0c03a085f1c057eaf6be2d1ca349e')
.then(response => response.json())
.then(data => {

    for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -288.53).toFixed(1) + "°";
    }
    for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max -288.53).toFixed(2) + "°";
    }

    for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }

})

.catch(err = alert("Something went wrong"))
}