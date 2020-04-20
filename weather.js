var desc = document.getElementById("desc");
var temp = document.getElementById("temp");
var locat = document.getElementById("locat");
var descmusic = document.getElementById("descmusic");

function weather() {
   fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid&units=metric')
    .then(response => response.json())
    .then(data => {
        var locatName = data['name'];
        var tempMin = data['main']['temp_min'];
        var tempMax = data['main']['temp_max'];
        var descValue = data['weather'][0]['description'];
        
        locat.innerHTML = locatName;
        desc.innerHTML = descValue;
        temp.innerHTML = tempMin +"&#176 - "+ tempMax +"&#176";
        descmusic.innerHTML = descValue;
    })
}

weather();

//resource:https://www.youtube.com/watch?v=GXrDEA3SIOQ