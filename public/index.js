$(document).ready(function() {
    console.log("Up and running");
    let movieResults = [];
    // Handle search form submit //
    $("#movie-search").on("click", function(e) {
        e.preventDefault();
        const movieName = $("#movie-name").val().trim();
        const queryURL = "https://www.omdbapi.com/?s=" + movieName + "&apikey=aaa8096b";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
            console.log(response);
            movieResults = response.Search;
            console.log(movieResults);
            if (response.Response === "True") {
                movieResults.map((movie) => {
                    $('#search-results').append(`<p id=${movie.imdbID}>${movie.Title}</p>`)
                })
            }
            else {
                console.log("No results found");
            }
        });
    });
    // Display Additional Information when title is clicked //
    $('#search-results').on('click', 'p', function(e) {        
        const movieID = e.target.id;
        const queryURL = "https://www.omdbapi.com/?i=" + movieID + "&plot=short&apikey=aaa8096b";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
            console.log(response);
            $(`#${e.target.id}`).append(`<ul><li>Director: ${response.Director}</li><li>Year: ${response.Year}</li><li>IMDB Rating: ${response.imdbRating}</li><li>Plot: ${response.Plot}</li></ul><img src=${response.Poster}/>`);
        });
        
    })


});