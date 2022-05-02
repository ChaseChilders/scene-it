function renderMovies(movies) {
  const movieHTMLArray = movies.map(function (currentMovie) {
    return `<div class="movie col-4 ">
    <div class="card h-100 " style="">
      <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>`;
  });
  const results = document.querySelector("#results");
  results.innerHTML = movieHTMLArray.join("");
}

renderMovies(movieData);

const myForm = document.getElementById("search-form");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
