$(document).ready(function() {
    console.log("Up and running");
    $("#movie-search").on("click", function(e) {
        e.preventDefault();
        const movieName = $("#movie-name").val().trim();
        const queryURL = "https://www.omdbapi.com/?s=" + movieName + "&plot=short&apikey=aaa8096b";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
            // console.log(response);
            if (response.Response === "True") {
                response.Search.map((movie) => {
                    console.log(movie.Title)
                    $('#search-results').append(`<p>${movie.Title}</p>`)
                })
            }
            else {
                console.log("No results found");
            }
            
        });
    });

});