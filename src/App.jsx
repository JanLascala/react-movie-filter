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
  //select by title const 
  const [selectTitle, setSelectTitle] = useState('');
  //select by genre const
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  //drowpdown filter by gerne
  function GenreFilter({ selectedGenre, setSelectedGenre }) {
    return (
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Select a genre</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
    );
  }
  //filter movies by title
  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(selectTitle.toLowerCase())
      )
    );
  }, [selectTitle, selectedGenre]);

  return (
    <>
      <h1>Movie Filter</h1>
      <input
        type="text"
        placeholder="Enter a movie..."
        value={selectTitle}
        onChange={(e) => setSelectTitle(e.target.value)}

      />
      <select onChange={(e) => setSelectGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title}>{movie.title} - {movie.genre}</li>
        ))}
      </ul>
    </>
  )
}

export default App
