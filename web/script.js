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
    const details = JSON.stringify(movie, null, 2); // Movie's detailed info as displayed in JSON file

    // Update the HTML content of the best movie section with the movie details
    bestMovieSection.innerHTML = `
        <h1>Meilleur film</h1>
        <h1>${title}</h1>
        <img src="${imageUrl}" alt="${title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG';">
        <p>${description}</p>
        <button>Détails</button>
    `;
}

function displayBestRatedMovies(movies) {
    // Get the HTML element where the best rated movies will be displayed
    const topRatedSection = document.getElementById("best-rated");

    // Clear any existing content in the section exept the title
    topRatedSection.innerHTML = "<h1>Films les mieux notés</h1>";

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
    topRatedSection.innerHTML = "<h1>Catégorie 2</h1>";

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