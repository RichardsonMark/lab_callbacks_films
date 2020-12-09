const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};


Cinema.prototype.findFilmByTitle = function(title) {
  const foundMovie = (element) => element === title;

  const filmList = this.getFilmTitles();
  const filmIndex = filmList.findIndex(foundMovie);
  return this.films[filmIndex];
};


Cinema.prototype.filterByGenre =function(genre) {
  const filteredMovies = this.films.filter(film => film["genre"] === genre);
  return filteredMovies;
};


Cinema.prototype.filterByYear =function(year) {
  const filteredMovies = this.films.filter(film => film["year"] === year);
  return filteredMovies;
};


Cinema.prototype.filterByLength =function(length) {
  const filteredMovies = this.films.filter(film => film["length"] > length);
  return filteredMovies;
};


Cinema.prototype.totalMoviesLength =function() {
  const result = this.films.map((film) => {
    return film.length;
  });

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return result.reduce(reducer, 0);

};


Cinema.prototype.filterByProperty =function(property, value) {
  const filteredMovies = this.films.filter(film => film[`${property}`] === value);
  return filteredMovies;
};

module.exports = Cinema;
