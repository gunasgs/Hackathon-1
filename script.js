
var heading = document.createElement("div");
heading.innerHTML="<h1> ANIME API </h1>";

var inputset = document.createElement("div");
inputset.className="inputBoxSet"

var inputbox = document.createElement("input");
inputbox.id="inputdata";

var button = document.createElement("button");
button.innerText="Search";

document.body.appendChild(heading)

inputset.appendChild(inputbox);
inputset.appendChild(button);

document.body.appendChild(inputset);

const grid = document.createElement("div");
grid.className="gridstyle"

async function getanime(input) {
    try {

     const api = await fetch("https://api.jikan.moe/v4/anime?q="+input);
     const animeapi = await api.json()
     grid.innerText=""

       

         for (data of animeapi.data) {

            var card = document.createElement("div");
            card.className="card"


            var title = document.createElement("div");
            title.innerHTML=`${data.title}`

            var year = document.createElement("div")
            year.innerHTML=`${data.aired.string}`

            var rating = document.createElement("div")
            rating.innerHTML=`${data.rating}`

            var img = document.createElement("img");
            img.src=`${data.images.jpg.large_image_url}`


            card.appendChild(title)
            card.appendChild(img)
            card.appendChild(year)
            card.appendChild(rating)

            grid.appendChild(card);
        }
        document.body.appendChild(grid)

    }
    catch {
    alert("Error")
}
}


button.addEventListener("click",function()
{
   
   var input = document.getElementById("inputdata").value;
  
   getanime(input);


})

