// Your code here

const baseUrl = "http://localhost:3000";


const movieList = document.getElementById('films')
const movieImage = document.getElementById('poster')
const movieShowing =  document.getElementById('showing')


// console.log(movieImage, movieShowing);

async function fetchData(){
    const response = await fetch(`${baseUrl}/films`)
    const data = await response.json()

    data.forEach(element => {
        console.log(element)
    })

}

fetchData()