// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=star+wars")

const btnSearch = document.getElementById("btnSearch")
const txtInput = document.getElementById("textInput")
const sTwo = document.getElementById("movieInfo")

let movieTitleArray = []
let movieBodyArray = []

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
        let movieTitles = data.Search
        console.log(movieTitles)
        movieTitles.forEach(movie => {
            movieTitleArray.push(`${movie.Title}`)
        })
        console.log(movieTitleArray)
        movieBody()
    })
}


function movieBody() {
    movieTitleArray.forEach(title => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=${title}`)
            .then(res => res.json())
            .then(data2 => {
                console.log(data2)
                // htmlRender()
                // let movieB = data2



                
            })
    })
}

function htmlRender() {
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
}


btnSearch.addEventListener("click", () => {
    getMovie()
})














// fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=${item.Title})}`)
//                         .then(resposne => resposne.json())
//                         .then(data2 => {
//                             console.log(data2)

                        
                        // document.getElementById("movieInfo").innerHTML =`
                        // <div class="sTwo">
                        //     <img src="${data2.Poster}">
                        //     <div class="movie">
                        //         <div class="movie_titleAndRate" >
                        //             <p class="movie_title" >${data2.Title}</p>
                        //             <p class="mRate" >⭐ ${data2.imdbRating}</p>
                        //         </div>
                        //         <div class="movie_info" >
                        //             <p>${data2.Runtime}</p>
                        //             <p>${data2.Genre}</p>
                        //             <p>watchlist</p>
                        //         </div>
                        //         <div>
                        //             <p class="movie_text">${data2.Plot}</p>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div class="end_of_section"></div>
                        //     `
                           
//                         })