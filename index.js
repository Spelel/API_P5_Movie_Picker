// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=star+wars")

const btnSearch = document.getElementById("btnSearch")
const txtInput = document.getElementById("textInput")
const sTwo = document.getElementById("movieInfo")

let movieTitleArray = []
// let movieBodyArray = []

function getMovie() {

    if (txtInput.value === ''){
        console.log('empty space')
    } else {
        movieTitleRequest()
    }
    // txtInput.value = ''
}


function movieTitleRequest() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&s=${txtInput.value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        let movieTitles = data.Search.map(movie => movie.Title)
        console.log(movieTitles)
        
        movieTitleArray = movieTitles

        movieBody()
    })
}

function movieBody() {
    movieTitleArray.map(title => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=${title}`)
            .then(res => res.json())
            .then(data2 => {
                // console.log(data2) 

                let movieBodyArray = []
                movieBodyArray.push(data2)
                console.log(movieBodyArray)


                movieBodyArray.forEach(unit => {
                    sTwo.innerHTML +=`
                <div class="sTwo">
                    <img src="${unit.Poster}">
                    <div class="movie">
                        <div class="movie_titleAndRate" >
                            <p class="movie_title" >${unit.Title}</p>
                            <p class="mRate" >⭐ ${unit.imdbRating}</p>
                        </div>
                        <div class="movie_info" >
                            <p>${unit.Runtime}</p>
                            <p>${unit.Genre}</p>
                            <p>watchlist</p>
                        </div>
                        <div>
                            <p class="movie_text">${unit.Plot}</p>
                        </div>
                    </div>
                </div>
                <div class="end_of_section"></div>
                    `
                })
                movieBodyArray = []
                
            })
    })
}

btnSearch.addEventListener("click", () => {
    getMovie()
})









