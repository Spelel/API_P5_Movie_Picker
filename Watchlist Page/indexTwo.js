let mArray = []
movieListFromLS()
function movieListFromLS() {
    let movies = localStorage.getItem("movie")
    mArray = JSON.parse(movies)
    console.log(mArray)
    render()
}

function render() {
    mArray.forEach(unit => {
        document.getElementById("movieInfo").innerHTML +=`
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
                    <p class="watchList" id="${unit.id}">➖</p>
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