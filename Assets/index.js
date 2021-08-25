function load2() {
    document.getElementById("forecast").style.display = "none";
    document.getElementById("fetch").style.display = "flex";
    setTimeout(function () { document.getElementById("fetch").style.display = "none"; }, 2000);
    setTimeout(function () { document.getElementById("forecast").style.display = "block"; }, 2100);
}

function fun(cityID) {
    //api url and key
    var key = "1f69bee5f6470cb83ac3c57b11eecd35";
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityID + "&units=metric&appid=" + key;

    // api request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL, false);
    xhr.send();
    var res = JSON.parse(xhr.response);
    //console.log(res);
    //data from api
    var temp = res.main.temp + "&deg;C";
    var tempmin = res.main.temp_min + "&deg;C";
    var tempmax = res.main.temp_max + "&deg;C";
    var pre = res.main.pressure + "mb";
    var des = res.weather[0].description;
    var humid = res.main.humidity + "%";
    var wind = res.wind.speed + "km/h";
    var img = "https://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
    var x = document.createElement("IMG");
    x.setAttribute("src", img);
    x.setAttribute("width", 80);
    document.getElementById("desimg").innerHTML = "";
    document.getElementById("temp").innerHTML = "Temperature: " + temp;
    document.getElementById("tempmin").innerHTML = "Min: " + tempmin;
    document.getElementById("tempmax").innerHTML = "Max:" + tempmax;
    document.getElementById("pres").innerHTML = "Pressure: " + pre;
    document.getElementById("des").innerHTML = des;
    document.getElementById("desimg").appendChild(x);
    document.getElementById("humid").innerHTML = "&emsp;Humidity:" + humid;
    document.getElementById("wind").innerHTML = "Wind : " + wind + " at " + res.wind.deg + "&deg;";
    
}

