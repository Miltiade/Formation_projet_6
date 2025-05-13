document.addEventListener("DOMContentLoaded", () => {
    // Wait for the DOM to fully load before executing the script

    // Fetch the best movie from the API, sorted by IMDb score in descending order
    fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log("API Response:", data); // Log the API response for debugging

            // Get the first movie from the results (the best movie)
            const bestMovie = data.results[0];

            // Fetch detailed information about the best movie using its ID
            fetchMovieDetails(bestMovie.id);
        })
        .catch(error => console.error("Error fetching data:", error)); // Log any errors during the fetch
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
    const imageUrl = movie.image_url || "https://via.placeholder.com/200x300?text=Image+non+disponible"; // Default image if not available
    const description = movie.description || "Description non disponible."; // Default description if not available
    const details = JSON.stringify(movie, null, 2); // Movie's detailed info as displayed in JSON file

    // Update the HTML content of the best movie section with the movie details
    bestMovieSection.innerHTML = `
        <h1>Meilleur film</h1>
        <h1>${title}</h1>
        <img src="${imageUrl}" alt="${title}">
        <p>${description}</p>
        <button>Détails</button>
    `;
}