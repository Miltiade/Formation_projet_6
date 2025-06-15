document.addEventListener("DOMContentLoaded", () => {
    // Wait for the DOM to fully load before executing the script

    // From the API: FETCH & DISPLAY BEST MOVIE (sorted by IMDb score in descending order)
    fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Get the first movie from the results (the best movie)
            const bestMovie = data.results[0];

            // Fetch detailed information about the best movie using its ID
            bestmoviedetails = fetchMovieDetails(bestMovie.id);
        })
        .catch(error => console.error("Error fetching data:", error)); // Log any errors during the fetch

    // From the API: FETCH & DISPLAY the 6 top-rated movies, sorted by IMDb score in descending order, excluding the best-rated movie
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {

            // From the results: get the last 6 movies
            const bestRatedMovies = data.results.slice(1, 7); // Get the last 6 movies

            // Display the last 6 movies
            displayBestRatedMovies(bestRatedMovies);
        })
        .catch(error => console.error("Error fetching top-rated movies:", error)); // Log any errors during the fetch

    // From the API: FETCH & DISPLAY the 6 top-rated movies of the "Mystery" genre, sorted by IMDb score in descending order
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Mystery&page_size=6")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Get the movies from the results
            const mysteryMovies = data.results;

            // Display the mystery movies
            displayCat1Movies(mysteryMovies);
        })
        .catch(error => console.error("Error fetching mystery movies:", error)); // Log any errors during the fetch

    // From the API: FETCH & DISPLAY the 6 top-rated movies of the "Action" genre, sorted by IMDb score in descending order
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action&page_size=6")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Get the movies from the results
            const actionMovies = data.results;

            // Display the action movies
            displayCat2Movies(actionMovies);
        })
        .catch(error => console.error("Error fetching action movies:", error)); // Log any errors during the fetch

});

function fetchMovieDetails(movieId) {
    // Fetch detailed information for a specific movie by its ID
    fetch(`http://127.0.0.1:8000/api/v1/titles/${movieId}`)
        .then(response => response.json()) // Parse the JSON response
        .then(movieDetails => {
            // Pass the detailed movie data to the display function
            displayBestMovie(movieDetails);
        })
        .catch(error => console.error("Error fetching movie details:", error)); // Log any errors during the fetch
}

function displayBestMovie(movie) {
    // Get the HTML element where the best movie details will be displayed
    const bestMovieSection = document.getElementById("best-movie");

    // Extract movie details with fallback values if data is unavailable
    const title = movie.title || "Titre non disponible"; // Default title if not available
    const imageUrl = movie.image_url || "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG"; // Default image if not available
    const description = movie.description || "Description non disponible."; // Default description if not available
    
    // Update the HTML content of the best movie section with the movie details
    bestMovieSection.innerHTML = `
        <h1>Meilleur film</h1>
        <div class="best-movie-container">
            <div class="col1" rowspan ="3">
                <img class="movie-image" src="${imageUrl}" alt="${title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG';">
            </div>
            <div class="col2"><h2 class="movie-title">${title}</h2></div>
            <div class="col2"><p class="movie-description">${description}</p></div>
            <div class="col2"><button class="movie-details-button">Détails</button></div>
        </div>
    `;

    // Attach event to the "Détails" button
    const btn = bestMovieSection.querySelector(".movie-details-button");
    btn.onclick = () => showMovieModal(movie);
}

function displayBestRatedMovies(movies) {
    const topRatedSection = document.getElementById("best-rated");
    topRatedSection.innerHTML = "<h1>Films les mieux notés</h1>";

    // Create a single container for the grid
    const container = document.createElement("div");
    container.classList.add("best-rated-container");

    movies.forEach(movie => {
        const title = movie.title || "Titre non disponible";
        const imageUrl = movie.image_url || "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG";

        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie-box");
        movieDiv.innerHTML = `
            <img src="${imageUrl}" alt="${title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG';">
            <div class="movie-box-header">
                <span class="movie-box-title">${title}</span>
                <button class="movie-box-details-button">Détails</button>
            </div>
        `;
        container.appendChild(movieDiv);
    });

    // Append the grid container to the section
    topRatedSection.appendChild(container);
}

// Fonction "displayCat1Movies" : affiche les 6 films les mieux notés de la catégorie 1 ("Mystery")
function displayCat1Movies(movies) {
    // Get the HTML element where the top-rated movies will be displayed
    const topRatedSection = document.getElementById("category-mystery");

    // Clear any existing content in the section exept the title
    topRatedSection.innerHTML = "<h1>Mystery</h1>";

    // Loop through each movie and create HTML elements to display them
    movies.forEach(movie => {
        const title = movie.title || "Titre non disponible"; // Default title if not available
        const imageUrl = movie.image_url || "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG"; // Default image if not available

        // Create a new div for each movie with its details
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `            
            <h2>${title}</h2>
            <img src="${imageUrl}" alt="${title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG';">
            <button>Détails</button>
        `;

        // Append the new movie div to the top-rated section
        topRatedSection.appendChild(movieDiv);
    });
}

// Fonction "displayCat2Movies" : affiche les 6 films les mieux notés de la catégorie 2 ("Action")
function displayCat2Movies(movies) {
    // Get the HTML element where the top-rated movies will be displayed
    const topRatedSection = document.getElementById("category-2");

    // Clear any existing content in the section exept the title
    topRatedSection.innerHTML = "<h1>Action</h1>";

    // Loop through each movie and create HTML elements to display them
    movies.forEach(movie => {
        const title = movie.title || "Titre non disponible"; // Default title if not available
        const imageUrl = movie.image_url || "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG"; // Default image if not available

        // Create a new div for each movie with its details
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `            
            <h2>${title}</h2>
            <img src="${imageUrl}" alt="${title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG';">
            <button>Détails</button>
        `;

        // Append the new movie div to the top-rated section
        topRatedSection.appendChild(movieDiv);
    });
}

// Show the modal with movie details
function showMovieModal(movie) {
    const modal = document.getElementById("movie-modal");
    const modalBody = document.getElementById("modal-body");

    // Use fallback values for missing data
    const title = movie.title || "Titre non disponible";
    const year = movie.date_published || "Année non disponible";
    const genres = movie.genres ? movie.genres.join(', ') : "Genre non disponible";
    const classification = movie.rated || "Classification non disponible";
    const duration = movie.duration ? movie.duration + " min" : "Durée non disponible";
    const country = movie.countries ? movie.countries.join(', ') : "Pays non disponible";
    const imdb = movie.imdb_score || "Score IMDB non disponible";
    const boxoffice = movie.worldwide_gross_income || "Box-office non disponible";
    const director = movie.directors ? movie.directors.join(', ') : "Réalisateur non disponible";
    const description = movie.description || "Résumé non disponible";
    const actors = movie.actors ? movie.actors.join(', ') : "Acteurs non disponibles";
    const image = movie.image_url || "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG";

    // Build the HTML for the modal content using two tables
    modalBody.innerHTML = `
        <!-- First table: 2 rows, 2 columns (image on right, info on left) -->
        <table style="width:100%; border-collapse:collapse; background:none;">
          <tr>
            <td style="vertical-align:top; padding-right:1em;">
              <!-- All lines from title to box-office are bold, title is h1 -->
              <div style="font-weight:bold;">
                <h1 style="margin:0;">${title}</h1> <!-- Movie title as h1 -->
                <div>${year} &mdash; ${genres}</div>
                <div>${classification}, ${duration}, ${country}</div>
                <div>IMDB : ${imdb}</div>
                <div>Box-office : ${boxoffice}</div>
              </div>
            </td>
            <td rowspan="2" style="width:180px; text-align:center; vertical-align:top;">
              <img src="${image}" alt="${title}" style="max-width:160px; max-height:220px; object-fit:cover;">
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top;">
              <div style="margin-top:1.5em;"><strong>Réalisé par :</strong> ${director}</div>
            </td>
          </tr>
        </table>
        <!-- Second table: 2 rows, 1 column (description, then actors) -->
        <table style="width:100%; margin-top:1em; border-collapse:collapse; background:none;">
          <tr>
            <td>
              <div> ${description}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="margin-top:1.5em;"><strong>Avec :</strong> ${actors}</div>
            </td>
          </tr>
        </table>
    `;

    // Show the modal
    modal.style.display = "flex";
}

// Hide the modal
function hideMovieModal() {
    document.getElementById("movie-modal").style.display = "none";
}

// Attach modal close events after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modal-close").onclick = hideMovieModal;
    // Optional: close modal when clicking outside content
    document.getElementById("movie-modal").onclick = function(e) {
        if (e.target === this) hideMovieModal();
    };
});

