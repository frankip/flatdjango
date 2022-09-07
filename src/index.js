// Your code here

const baseUrl = "http://localhost:3000";


const movieList = document.getElementById('films')
const movieImage = document.getElementById('poster')
const movieShowing =  document.getElementById('showing')


// render the movie titles 
function renderMovies(movie){
  let listElement = document.createElement("li");
  listElement.className = "film item";
  listElement.innerHTML = movie.title;

  listElement.addEventListener("click", (e) =>{
          updateMovieDetails(movie);
      }, false)

  return listElement;
}


// updating the movie poster details
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


// fetching data function 
async function fetchData(){
    // fetch data
    const response = await fetch(`${baseUrl}/films`)
    const data = await response.json()

    // loop through the returned data and pass to rendermovies
    data.forEach(element => {
        let listElement = renderMovies(element)
        movieList.appendChild(listElement)
    })

}

fetchData()