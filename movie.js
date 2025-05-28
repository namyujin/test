const container = document.getElementById("movie-container");

fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjEzODQyNmE0YzE4YTJmYmI1ODM3ZmYzOGY1ZWUzYyIsIm5iZiI6MTc0ODI2ODgyMi41NDU5OTk4LCJzdWIiOiI2ODM0NzcxNjgxMjFjZjViNmY3MzAyMDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nQjv-fpdTzksLvd6y1JvNuklgV5UEp7Q9IHJTOhDWgk",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";

      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
        movie.title
      }">
        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-date">개봉일: ${movie.release_date}</p>
          <p class="movie-rating">평점: ${movie.vote_average.toFixed(1)}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("에러 발생:", error);
    container.innerHTML = "<p>영화 데이터를 불러오지 못했습니다.</p>";
  });
