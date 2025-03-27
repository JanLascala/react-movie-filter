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
  const [selectGenre, setSelectgenre] = useState('')




  return (
    <>
      <h1>Movie Filter</h1>

      <select name="movies" id="movies"
        value={(selectGenre)} onChange={(e) => setSelectgenre(e.target.value)}>

        <option value="">Select a genre</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

    </>
  )
}

export default App
