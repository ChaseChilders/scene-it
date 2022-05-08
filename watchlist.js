function saveToWatchList(movieID) {
  console.log(movieID);
  const movie = movieData.find(function (currentMovie) {
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  console.log(watchlist.value);
  if (watchlist == null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlist.JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
}

function renderMovies(movies) {
  const movieHTMLArray = movies.map(function (currentMovie) {
    return `<div class="movies-container col-4 ">
    <div class="card h-100 " style="">
      <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary add-button" data-imdbid = "${currentMovie.imdbID}" >Add</a>
      </div>
    </div>
  </div>`;
  });
  const results = document.querySelector("#results");
  results.innerHTML = movieHTMLArray.join("");
}

const myForm = document.getElementById("search-form");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchString = document.querySelector(".search-bar").value;
  const urlEncodedSearchString = encodeURIComponent(searchString);

  fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`)
    .then((res) => res.json())
    .then((data) => {
      movieData = data.Search;
      renderMovies(movieData);
    });
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-button")) {
    const movieID = event.target.dataset.imdbid;
    saveToWatchList(movieID);
  }
});
