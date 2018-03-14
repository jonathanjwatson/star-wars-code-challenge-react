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

                        var movieRow = $("<div>");
                        movieRow.addClass("row");
                        movieRow.attr('id', `${movie.imdbID}`);
                        movieRow.append(`<h3 data-id=${movie.imdbID}>${movie.Title} (Click to see more...)</h3>`);
                        $('#search-results').append(movieRow);
                })
            }
            else {
                console.log("No results found");
            }
        });
    });
    // Display Additional Information when title is clicked //
    $('#search-results').on('click', 'h3', function(e) {       
        const movieID = $(this).attr("data-id");
        console.log(movieID);
        const queryURL = "https://www.omdbapi.com/?i=" + movieID + "&plot=short&apikey=aaa8096b";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
            console.log(response);
            var infoRow = $("<div>");
            infoRow.addClass("col-sm-6");
            infoRow.attr('id', `${movie.imdbID}`);
            infoRow.append(`<p><ul><li>Director: ${response.Director}</li><li>Year: ${response.Year}</li><li>IMDB Rating: ${response.imdbRating}</li><li>Plot: ${response.Plot}</li></ul></p>`);
            infoRow.append(`<button data-id=${response.imdbID} data-name="${response.Title}">Add to Favorites</button>`);
            var picRow = $("<div>");
            picRow.addClass("col-sm-6");
            picRow.append(`<img src=${response.Poster}/>`)
            $(`#${movieID}`).append(infoRow);
            $(`#${movieID}`).append(picRow);
        });
    })
    // Add a movie to favorites array //
    $('#search-results').on('click', 'button', function(e) {
        e.preventDefault();
        console.log("Button click!")
        const movieID = $(this).attr("data-id");
        const movieTitle = $(this).attr("data-name");
        const movieData = {
            name: movieTitle,
            oid: movieID
        }

        $.post("/favorites", movieData,
        function(response) {
            console.log(response);
        })
    });

});