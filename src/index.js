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

  listElement.addEventListener("click", (e) =>{
          updateMovieDetails(movie);
      }, false)


  return listElement;
}

function updateMovieDetails(movie){
  movieImage.src = movie.poster;
  movieImage.alt = movie.title;

  // posterDetails
  movieShowing.querySelector(".title").textContent = movie.title;
  movieShowing.querySelector("#runtime").textContent = movie.runtime;
  movieShowing.querySelector("#film-info").textContent = movie.description;
  movieShowing.querySelector("#showtime").textContent = movie.showtime;
  movieShowing.querySelector("#ticket-num").textContent =
    movie.capacity - movie.tickets_sold;
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