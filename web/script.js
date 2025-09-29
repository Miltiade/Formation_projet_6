// --- Display movies for dynamic "Autres" category ---
// This function is responsible for displaying movies for the selected genre in the 'Autres' section.
// It is called when a user selects a genre from the dropdown menu.
// Parameters:
//   movies: an array of movie objects to display
//   genreName: the name of the selected genre (used for the section title)
function displayCatOthersMovies(movies, genreName) {
  // Get the container element for the 'Autres' section by its ID
  const section = document.getElementById('category-others');
  if (!section) {
    console.error('Section #category-others not found in HTML.');
    return;
  }
  const wrapper = section.querySelector('.movie-list-wrapper');
  if (!wrapper) {
      console.error('No .movie-list-wrapper found in this section.');
      return;
  }
  wrapper.innerHTML = '';
  if (!movies || movies.length === 0) {
    wrapper.innerHTML = '<p>Aucun film trouvé pour cette catégorie.</p>';
    return;
  }
  section.classList.add('movie-list-section');
  // If a genre name is provided, display it as the section title
  if (genreName) {
    let title = section.querySelector('.section-title');
    if (title) {
      title.textContent = genreName;
    }
  }
  renderMoviesWithVoirPlus(wrapper, movies, 'cat-others');
}

// --- Utility: Safe fetch with error handling ---
// This function fetches JSON data from a given URL using the fetch API.
// If the request fails (e.g., network error, server error), it logs the error and returns null.
// This prevents the app from crashing if the API is unavailable or returns an error.
// Parameter:
//   url: the URL to fetch JSON data from
// Returns: the parsed JSON object, or null if an error occurred
async function safeFetchJson(url) {
  try {
    // Send a GET request to the specified URL
    const res = await fetch(url);
    // Check if the response status is not OK (e.g., 404 or 500 error)
    if (!res.ok) {
      console.error('Network response was not ok for', url);
      return null;
    }
    // Parse and return the JSON data from the response
    return await res.json();
  } catch (err) {
    // Log any network or parsing errors
    console.error('Fetch error for', url, err);
    return null;
  }
}

// --- Helper: show only N movies unless expanded ---
// This function displays a list of movie boxes inside a given container.
// It shows only a limited number of movies by default (2 on mobile, 4 on tablet, 6 on desktop),
// and hides the rest unless the user clicks 'Voir plus'.
// The function also adds a 'Voir plus' button if there are more than 2 movies.
// Each movie box includes an image, the movie title, and a 'Détails' button.
// The 'data-movie-id' attribute is used for event delegation (to open the modal with details).
// Parameters:
//   container: the HTML element where the movies will be rendered
//   movies: an array of movie objects to display
//   sectionClass: a string for the section's CSS class (not used directly here, but can be used for styling)
function renderMoviesWithVoirPlus(container, movies, sectionClass) {
  // Clear previous content from the container
  container.innerHTML = '';

  // Loop through each movie and create its box
  movies.forEach((movie, idx) => {
    // Create a div for each movie
    const box = document.createElement('div');
    box.className = 'movie';
    box.setAttribute('data-movie-id', movie.id);

    // Hide extra movies by default (responsive classes)
    if (idx >= 2) box.classList.add('hidden-mobile');
    if (idx >= 4) box.classList.add('hidden-tablet');

    // Set up the movie box's inner HTML to match the mockup overlay/grid structure
    const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG";
    box.innerHTML = `
      <img src="${movie.image_url || fallbackImage}"
           alt="Affiche de ${movie.title}"
           onerror="this.onerror=null;this.src='${fallbackImage}';">
      <div class="movie-overlay">
        <div class="movie-overlay-grid">
          <div class="movie-title">${movie.title}</div>
          <button class="movie-details-button">Détails</button>
        </div>
      </div>
    `;

    // Add the movie box directly to the container
    container.appendChild(box);
  });

  // If there are more than 2 movies, add a 'Voir plus' button
  if (movies.length > 2) {
    let voirBtn = container.querySelector('.voir-plus-btn');
    if (!voirBtn) {
      voirBtn = document.createElement('button');
      voirBtn.className = 'voir-plus-btn';
      voirBtn.textContent = 'Voir plus';
      container.appendChild(voirBtn);
    }
  }
}

// --- Display functions for each section ---
// Display the 6 best rated movies (excluding the best movie)
function displayBestRatedMovies(movies) {
  // Get the section for best rated movies
  const section = document.getElementById('best-rated-movies');
  // Ensure correct CSS class for mobile hiding
  section.classList.add('movie-list-section');
    if (!section) {
        console.error('Container #best-rated-movies not found in HTML.');
        return;
    }

    // Find the wrapper for movie content inside the section
    const wrapper = section.querySelector('.movie-list-wrapper');
    if (!wrapper) {
        console.error('No .movie-list-wrapper found in this section.');
        return;
    }

    // Clear only the wrapper, not the whole section (so the title stays)
    wrapper.innerHTML = '';

    // If no movies, show a message in the wrapper
    if (!movies || movies.length === 0) {
        wrapper.innerHTML = '<p>Aucun film trouvé.</p>';
        return;
    }

    // Render the movies inside the wrapper
    renderMoviesWithVoirPlus(wrapper, movies, 'best-rated');
}

// Display the 6 best Mystery movies (or movies for selected genre)
function displayCat1Movies(movies, genreName) {
  const section = document.getElementById('cat1-movies');
  if (!section) {
    console.error('Section #cat1-movies not found in HTML.');
    return;
  }
  const wrapper = section.querySelector('.movie-list-wrapper');
  if (!wrapper) {
      console.error('No .movie-list-wrapper found in this section.');
      return;
  }
  wrapper.innerHTML = '';
  if (!movies || movies.length === 0) {
    wrapper.innerHTML = '<p>Aucun film trouvé pour cette catégorie.</p>';
    return;
  }
  section.classList.add('movie-list-section');
  // Optionally update section title if genreName is provided
  if (genreName) {
    let title = section.querySelector('.section-title');
    if (title) {
      title.textContent = genreName;
    }
  }
  renderMoviesWithVoirPlus(wrapper, movies, 'cat1');
}

// Display the 6 best Action movies
function displayCat2Movies(movies) {
  const section = document.getElementById('cat2-movies');
  if (!section) {
    console.error('Section #cat2-movies not found in HTML.');
    return;
  }
  const wrapper = section.querySelector('.movie-list-wrapper');
  if (!wrapper) {
      console.error('No .movie-list-wrapper found in this section.');
      return;
  }
  wrapper.innerHTML = '';
  if (!movies || movies.length === 0) {
    wrapper.innerHTML = '<p>Aucun film trouvé pour cette catégorie.</p>';
    return;
  }
  section.classList.add('movie-list-section');
  renderMoviesWithVoirPlus(wrapper, movies, 'cat2');
}

// --- Display best movie in the header section ---
function displayBestMovie(movie) {
    // Select elements
    const img = document.getElementById('best-movie-image');
    const title = document.getElementById('best-movie-title');
    const description = document.getElementById('best-movie-description');
    const button = document.getElementById('best-movie-details-button');

    // Fallback values
    const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/3/31/Image_non_disponible.JPG";
    const fallbackTitle = "Titre non disponible";
    const fallbackDescription = "Description non disponible.";

    // Update elements with data or fallback
    img.src = movie.image_url || fallbackImage;
    img.alt = movie.title || fallbackTitle;

    // If the image fails to load (404, broken link), use the fallback image
    img.onerror = function() {
      this.onerror = null; // Prevent infinite loop if fallback also fails
      this.src = fallbackImage;
    };

    title.textContent = movie.title || fallbackTitle;
    description.textContent = movie.description || fallbackDescription;

    // Add click event to the button to show movie details in a modal
    button.onclick = () => showMovieModal(movie);
}

// --- Show the modal with movie details ---
function showMovieModal(movie) {
  const modal = document.getElementById("movie-modal");
  const modalBody = document.getElementById("modal-body");
  const modalTitle = document.getElementById("modal-title"); // Get modal title element for header

  // Use fallback values for missing data
  const title = movie.title || "Titre non disponible";
  const year = movie.year || "Année non disponible";
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

  // Responsive layout: single-column for mobile/tablet, table for desktop
  const isMobile = window.innerWidth <= 900;
  if (isMobile) {
    // Mobile/tablet: inject title into modal header
    if (modalTitle) {
      modalTitle.textContent = title;
    }
    // Mobile/tablet: single-column layout
    // Note: Title is now injected into #modal-title in the header, not in modalBody.
    // Beginners: This keeps the cross and title on the same line.
    modalBody.innerHTML = `
      <div style="font-weight:bold;">
        <div>${year} &mdash; ${genres}</div>
        <div>${classification}, ${duration}, ${country}</div>
        <div>IMDB : ${imdb}</div>
        <div>Box-office : ${
          isNaN(Number(boxoffice))
            ? "Box-office non disponible"
            : "$" + (Number(boxoffice) / 1_000_000).toFixed(2).replace('.', ',') + "m"
        }</div>
      </div>
      <div style="margin-top:1.5em;"><strong>Réalisé par :</strong></div>
      <div>${director}</div>
      <div>${description}</div>
      <div style="margin:1.5em 0;">
        <img src="${image}" alt="${title}" style="max-width:160px; max-height:220px; object-fit:cover; display:block; margin:auto;">
      </div>
      <div style="margin-top:1.5em;"><strong>Avec :</strong></div>
      <div>${actors}</div>
    `;
  } else {
    // Desktop: clear modal header title so it is not visible or present for screen readers
    if (modalTitle) {
      modalTitle.textContent = "";
    }
    // Desktop: table-based layout
    modalBody.innerHTML = `
      <!-- First table: 2 rows, 2 columns (image on right, info on left) -->
      <table style="width:100%; border-collapse:collapse; background:none;">
        <tr>
          <td style="vertical-align:top; padding-right:1em;">
            <div style="font-weight:bold;">
              <h1 style="margin:0;">${title}</h1>
              <div>${year} &mdash; ${genres}</div>
              <div>${classification}, ${duration}, ${country}</div>
              <div>IMDB : ${imdb}</div>
              <div>Box-office : ${
                isNaN(Number(boxoffice))
                  ? "Box-office non disponible"
                  : "$" + (Number(boxoffice) / 1_000_000).toFixed(2).replace('.', ',') + "m"
              }</div>
            </div>
          </td>
          <td rowspan="2" style="width:180px; text-align:center; vertical-align:top;">
            <img src="${image}" alt="${title}" style="max-width:160px; max-height:220px; object-fit:cover;">
          </td>
        </tr>
        <tr>
          <td style="vertical-align:top;">
            <div style="margin-top:1.5em;"><strong>Réalisé par :</strong></div>
            <div>${director}</div>
          </td>
        </tr>
      </table>
      <table style="width:100%; margin-top:1em; border-collapse:collapse; background:none;">
        <tr>
          <td>
            <div> ${description}</div>
          </td>
        </tr>
        <tr>
          <td>
            <div style="margin-top:1.5em;"><strong>Avec :</strong></div>
            <div>${actors}</div>
          </td>
        </tr>
      </table>
    `;
  }
  
    // Show the modal
    modal.style.display = "flex";
}

// --- Hide the modal ---
function hideMovieModal() {
    document.getElementById("movie-modal").style.display = "none";
}

// --- Attach modal close events after DOM is loaded ---
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modal-close").onclick = hideMovieModal;
    // Optional: close modal when clicking outside content
    document.getElementById("movie-modal").onclick = function(e) {
        if (e.target === this) hideMovieModal();
    };
});

// --- Main app logic: fetch and render all sections ---
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Fetch and display the best movie (top rated overall)
    const bestData = await safeFetchJson("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score");
    if (bestData && Array.isArray(bestData.results) && bestData.results.length > 0) {
        const bestMovie = bestData.results[0];
        if (bestMovie && bestMovie.id) {
            const details = await safeFetchJson(`http://127.0.0.1:8000/api/v1/titles/${bestMovie.id}`);
            if (details) displayBestMovie(details);
        }
    }

    // 2. Fetch and display the next 6 best rated movies (excluding the best)
    const topData = await safeFetchJson("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7");
    if (topData && Array.isArray(topData.results)) {
        const bestRatedMovies = topData.results.slice(1, 7);
        displayBestRatedMovies(bestRatedMovies);
    }

    // 3. Fetch and display two static categories (Mystery and Action)
    const mysteryData = await safeFetchJson("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=Mystery&page_size=6");
    if (mysteryData && Array.isArray(mysteryData.results)) displayCat1Movies(mysteryData.results);

    const actionData = await safeFetchJson("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action&page_size=6");
    if (actionData && Array.isArray(actionData.results)) displayCat2Movies(actionData.results);

    // 4. Fetch genres dynamically and populate the 'Autres' dropdown
    const genresData = await safeFetchJson("http://127.0.0.1:8000/api/v1/genres");
  if (genresData && Array.isArray(genresData.results)) {
    // Find or create the dropdown menu container
    let dropdown = document.getElementById('dropdown-menu-1');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = 'dropdown-menu-1';
      document.body.appendChild(dropdown);
    }
    // Build the dropdown list using genre names
    dropdown.innerHTML = '<ul>' + genresData.results.map(g => `<li><button class="genre-select" data-genre="${g.name}">${g.name}</button></li>`).join('') + '</ul>';
  }

    // 5. Attach event delegation for all movie 'Détails' buttons and images
    document.body.addEventListener('click', async (ev) => {
        // Handle clicks on any 'Détails' button or movie image
        const btn = ev.target.closest('.movie-box-details-button, .movie .movie-details-button, .movie button, .movie img');
        if (btn) {
            // Find the movie id from a data attribute
            const movieElement = btn.closest('[data-movie-id]');
            const movieId = movieElement ? movieElement.getAttribute('data-movie-id') : null;
            if (movieId) {
                const details = await safeFetchJson(`http://127.0.0.1:8000/api/v1/titles/${movieId}`);
                if (details) showMovieModal(details);
            }
        }

    // Handle genre selection for dynamic categories
    const gbtn = ev.target.closest('.genre-select');
    if (gbtn) {
      const genre = gbtn.getAttribute('data-genre');
      // Fetch top movies for that genre and display in the 'Autres' section
      const mdata = await safeFetchJson(`http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&genre=${encodeURIComponent(genre)}&page_size=6`);
      if (mdata && Array.isArray(mdata.results)) {
        displayCatOthersMovies(mdata.results, genre); // Show in dedicated 'Autres' section
      }
    }

    // Handle 'Voir plus' / 'Voir moins' button clicks
    const voirBtn = ev.target.closest('.voir-plus-btn');
    if (voirBtn) {
      const section = voirBtn.closest('.movie-list-section');
      if (section) {
        // Toggle expanded class
        section.classList.toggle('expanded');
        // Update button text
        voirBtn.textContent = section.classList.contains('expanded') ? 'Voir moins' : 'Voir plus';

        // Find all movie boxes in this section
        const boxes = section.querySelectorAll('.movie-list-wrapper .movie');
        boxes.forEach((box, idx) => {
          if (section.classList.contains('expanded')) {
            // Show all movies: remove both hidden classes
            box.classList.remove('hidden-mobile');
            box.classList.remove('hidden-tablet');
          } else {
            const width = window.innerWidth;
            if (width < 600) {
              // Mobile: show 2 movies
              if (idx >= 2) {
                box.classList.add('hidden-mobile');
              } else {
                box.classList.remove('hidden-mobile');
              }
              box.classList.remove('hidden-tablet');
            } else if (width >= 600 && width < 900) {
              // Tablet: show 4 movies
              if (idx >= 4) {
                box.classList.add('hidden-tablet');
              } else {
                box.classList.remove('hidden-tablet');
              }
              box.classList.remove('hidden-mobile');
            } else {
              // Desktop: show all movies
              box.classList.remove('hidden-mobile');
              box.classList.remove('hidden-tablet');
            }
          }
        });
      }
    }
    });
});

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
    // Attach close event to mobile cross button
    const closeCross = document.getElementById("modal-close-cross");
    if (closeCross) {
      closeCross.onclick = hideMovieModal;
    } else {
      // If the cross button is not found, log a helpful error for debugging
      console.warn('Modal close cross button (#modal-close-cross) not found in DOM.');
    }
});

