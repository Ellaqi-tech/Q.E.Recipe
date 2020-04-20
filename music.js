var playlist = document.getElementById("playlist");

function weathermusic() {
    let weather = "sunny";
    fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + weather)
    .then(response => response.json())
    .then(data => {
        for(var i=0; i<data.length; i++) {
            var title = data[i].title;
            var permalinkurl = data[i].permalink_url;
            console.log(title);
            playlist.innerHTML += 
                "<a class='list' href='"+permalinkurl+"'>"+title+"</a><br>"
            
        }
    })
    
}
 weathermusic(); 

/* next step: 
    1. pass weather description(e.g. rain, cloud) in the weather.js to the weather variable here;
    2. add audio player
*/

    
    
   


//resource code:
//resource from: https://www.youtube.com/watch?v=_lJhtS0cBgQ
//function searchTracks() {
//    let weather = "sunny";
//    fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + weather)
//    .then(function(response) {
//        if (response.status != 200) {
//            console.log("something wrong, Status code"+ response.status);
//            return;
//        }
//        response.json().then(function(data) {
//            let track = data;
//            console.log(track);
//            
//            let searchedFor = document.createElement('div');
//            searchedFor.id = "searchedFor";
//            document.body.appendChild(searchedFor);
//            document.getElementById('searched').appendChild(searchedFor);
//            searchedFor.className = 'searchedFor';
//            searchedFor.innerHTML += "Results for :" + weather;
//            
//            function renderTracks() {
//                return `
//                ${track.map(track =>
//                    `<div class="box">
//                    <div class="blankImage"></div>
//                    <div id="sonetitle" class="title"></div>
//                    </div>`
//                )}`
//               
//                console.log(renderTracks());
//                let songTileArray = [];
//                let songTitle = document.getElementById('songTitle');
//                for (var i=0; i< songTitleArray.length; i++) {
//                    songTitleArray[i].addEventListener('click', function playSong(e) {
//                        console.log(playSong);
//                    })
//                }
//            }
//            
//        })
//        
//    })
//}