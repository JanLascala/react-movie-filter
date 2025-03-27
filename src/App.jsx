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
  const [selectGenre, setSelectGenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  return (
    <>
      <h1>Movie Filter</h1>
      <input
        type="text"
        placeholder="Enter a genre..."
        value={selectGenre}
        onChange={(e) => setSelectGenre(e.target.value)}
      />
    </>
  )
}

export default App
