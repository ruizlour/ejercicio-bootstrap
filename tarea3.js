fetch('https://www.omdbapi.com/?apikey=8645057e&t=avatar')
    .then(response => response.json())
    .then(data => {
        document.querySelector(".poster1").src = data.Poster;
        document.querySelector(".titulo1").innerText = data.Title;
        document.querySelector(".desc1").innerText = data.Plot;
        
    });

fetch('https://www.omdbapi.com/?apikey=8645057e&t=go')
    .then(response => response.json())
    .then(data => {
        document.querySelector(".poster2").src = data.Poster;
        document.querySelector(".titulo2").innerText = data.Title;
        document.querySelector(".desc2").innerText = data.Plot;
    });

fetch('https://www.omdbapi.com/?apikey=8645057e&t=cloud')
    .then(response => response.json())
    .then(data => {
        document.querySelector(".poster3").src = data.Poster;
        document.querySelector(".titulo3").innerText = data.Title;
        document.querySelector(".desc3").innerText = data.Plot;
    });

fetch('https://www.omdbapi.com/?apikey=8645057e&t=sun')
    .then(response => response.json())
    .then(data => {
        document.querySelector(".poster4").src = data.Poster;
        document.querySelector(".titulo4").innerText = data.Title;
        document.querySelector(".desc4").innerText = data.Plot;
    }); 