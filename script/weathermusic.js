const desc = document.getElementById("desc");
const temp = document.getElementById("temp");
const locat = document.getElementById("locat");
const descmusic = document.getElementById("descmusic");
const playlist = document.getElementById("playlist");

function weathermusic() {
   fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=d9667696d04e9bafdbcee92e9bd52d40&units=metric')
    .then(response => response.json())
    .then(data => {
        let locatName = data['name'];
        let tempMin = data['main']['temp_min'];
        let tempMax = data['main']['temp_max'];
        let descValue = data['weather'][0]['description'];
        let weatherarray = descValue.split(" ");
        let musicinfo = weatherarray[weatherarray.length - 1];
       
        locat.innerHTML = locatName;
        desc.innerHTML = descValue;
        temp.innerHTML = tempMin +"&#176 - "+ tempMax +"&#176";
        descmusic.innerHTML = descValue;
       //console.log("weatherarray "+ weatherarray[0]);
       console.log("musicinfo "+musicinfo);
       
        //fetch music 
        fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + descValue)
            .then(response => response.json())
            .then(data => {
                for(let i=0; i<10; i++) {
                    let title = data[i].title;
                    console.log(title);
                    let permalinkurl = data[i].permalink_url;
                    if(title === undefined) {
                        playlist.innerHTML = "Oops~ There's no such songs for the current weather :( check out later when the weather changed!";
                    } else {
                        playlist.innerHTML += 
                        "<div class='song'><a class='list' href='"+permalinkurl+"' target='_blank'>"+title+"</a></div>";
                    }
                }
            }) 
    })
}
weathermusic();

//resource:https://www.youtube.com/watch?v=GXrDEA3SIOQ

/* next step: 
    1. multiple input
    2. error page
    3. make the audio player work
*/