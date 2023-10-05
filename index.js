const inputField = document.querySelector("#movie-input");
const form = document.querySelector("form");
const movieList = document.querySelector("ul");
const message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();
  const movieTitleText = inputField.value;
  const movie = document.createElement("li");

  const movieTitle = document.createElement("span");
  movieTitle.textContent = movieTitleText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(movieTitle);
  movie.appendChild(deleteBtn);

  movieList.appendChild(movie);

  inputField.value = "";
}

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie added back!";
  }
  event.target.classList.toggle("checked");
}

form.addEventListener("submit", addMovie);

movieList.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    crossOffMovie(event);
  }
});
