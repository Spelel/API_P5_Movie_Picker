// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&t=star+wars")

const btnSearch = document.getElementById("btnSearch")
let movieArray =[]

function getMovie() {
    const txtInput = document.getElementById("textInput")

    if (txtInput.value === ''){
        console.log('empty space')
    } else {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e802e6a9&s=${txtInput.value}`)
            .then(res => res.json())
            .then(data => {
        console.log(data)
        movieArray = data.Search
        
        movieArray.forEach(item => {
            console.log(item.Title)
        })
    })
    }
    // txtInput.value = ''
}



btnSearch.addEventListener("click", () => {
    getMovie()
})
