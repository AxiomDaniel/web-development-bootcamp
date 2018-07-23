function printMovieStatus(movieObject) {
    var string = "You have ";
    if (movieObject.hasWatched) {
        string += "seen ";
    } else {
        string += "not seen ";
    }
    string += "\"" + movieObject.name + "\""+ " - " + movieObject.rating + ' stars.';
    return(string);
}

movies = [
    {
        name: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        name: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

movies.forEach(
    (movie) => console.log(printMovieStatus(movie)));
