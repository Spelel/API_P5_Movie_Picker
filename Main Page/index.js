// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=star+wars")

const btnSearch = document.getElementById("btnSearch")
// const addWatchlistItem = document.getElementById("add-watch")
const txtInput = document.getElementById("textInput")
const sTwo = document.getElementById("movieInfo")
const imgGone = document.getElementById("img-gone")

let movieTitleArray = []
let movieBodyA = []

btnSearch.addEventListener("click", async () => {
    sTwo.innerHTML = ``
    await getMovie()
})

async function getMovie() {

    if (txtInput.value === ''){
        console.log('empty space')
    } else {
        imgGone.style.display = "none"
       await movieTitleRequest()
    }
    txtInput.value = ''
}


async function movieTitleRequest() {

    const response = await
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&s=${txtInput.value}`)
    const data = await response.json()
        // console.log(data)
    let movieTitles = data.Search.map(movie => movie.Title)
        // console.log(movieTitles)
        
    movieTitleArray = movieTitles

    movieBody()
    
}

async function movieBody() {
    const fetches = movieTitleArray.map(title =>
      fetch(`https://www.omdbapi.com/?apikey=e802e6a9&t=${title}`)
        .then(res => res.json())
        .then(data2 => ({
          title: data2.Title,
          poster: data2.Poster,
          rating: data2.imdbRating,
          runtime: data2.Runtime,
          genre: data2.Genre,
          plot: data2.Plot
        }))
    );
  
    movieBodyA = await Promise.all(fetches);
    console.log(movieBodyA);
    render()
}
  


function render() {
    movieBodyA.forEach(unit => {
        sTwo.innerHTML +=`
    <div class="sTwo">
        <img src="${unit.poster}">
        <div class="movie">
            <div class="movie_titleAndRate" >
                <p class="movie_title" >${unit.title}</p>
                <p class="mRate" >⭐ ${unit.rating}</p>
            </div>
            <div class="movie_info" >
                <p>${unit.runtime}</p>
                <p>${unit.genre}</p>
                <p class="watchList" id="add-watch">watchlist ➕</p>
            </div>
            <div>
                <p class="movie_text">${unit.plot}</p>
            </div>
        </div>
    </div>
    <div class="end_of_section"></div>
        `
    })
}



document.addEventListener('click', (e) => {
    if (e.target.classList.contains("watchList")) {
        // localStorage.setItem("title", JSON.stringify(movieBodyArray))
        // let t = localStorage.getItem('title')
        // console.log(JSON.parse(t))
        movieBodyA = []
        console.log(movieBodyA)
    }
})

// addWatchlistItem.addEventListener("click", () => {
//     localStorage.setItem("title", JSON.stringify(movieBodyArray))
//         let t = localStorage.getItem('title')
//         console.log(JSON.parse(t))
// })







