import './App.css'
/* import {useState, useEffect} from 'react' */
import FilmsList from './components/FilmsList'
import { ApiProvider } from './components/ApiProvider'



function App() {
 /*  const [films, setFilms] = useState([])

  function fetchFi(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=ritorno+al+futuro')
      .then(res => res.json())
      .then(page => {
        console.log(page.results)
        setFilms(page.results)
      })
  }

  useEffect(() => {
     fetchFi()
  }, []) */
   

  return (
    <ApiProvider>
      <div>
        <h1>BoolFix</h1>
       <FilmsList/>
      {/*  {films.map(film => <p key={film.id}> {film.title}</p>)} */}
      </div>
    </ApiProvider>
  )
}

export default App
