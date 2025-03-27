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
  //select by genre const 
  const [selectTitle, setSelectTitle] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);
  //filter movies
  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(selectTitle.toLowerCase())
      )
    );
  }, [selectTitle]);

  return (
    <>
      <h1>Movie Filter</h1>
      <input
        type="text"
        placeholder="Enter a movie..."
        value={selectTitle}
        onChange={(e) => setSelectTitle(e.target.value)}
      />

      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title}>{movie.title} - {movie.genre}</li>
        ))}
      </ul>
    </>
  )
}

export default App
