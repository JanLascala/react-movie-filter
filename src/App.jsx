import { useState, useEffect } from 'react'

function App() {
  //array
  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  // by genre
  const [selectGenre, setSelectgenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // filter
  useEffect(() => {
    if (selectGenre === '') {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectGenre)
      );
    }
  }, [selectGenre]);

  return (
    <>
      <h1>Movie Filter</h1>

      <select
        value={selectGenre}
        onChange={(e) => setSelectgenre(e.target.value)}
      >
        <option value="">Select a genre</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
