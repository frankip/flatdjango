// Your code here

const baseUrl = "http://localhost:3000";


const movieList = document.getElementById('films')
const movieImage = document.getElementById('poster')
const movieShowing =  document.getElementById('showing')


// console.log(movieImage, movieShowing);

function renderMovies(movie){
  let listElement = document.createElement("li");
  listElement.className = "film item";
  listElement.innerHTML = movie.title;

  return listElement;
}

async function fetchData(){
    const response = await fetch(`${baseUrl}/films`)
    const data = await response.json()

    data.forEach(element => {
        let listElement = renderMovies(element)

        movieList.appendChild(listElement)
        // console.log(element)
    })

}

fetchData()