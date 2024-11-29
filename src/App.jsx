import './App.css'
/* import {useState, useEffect} from 'react' */
import FilmsList from './components/SearchFilmsESeries'
import { ApiProvider } from './components/ApiProvider'



function App() {
  return (
    <ApiProvider>
      <div>
        <h1>BoolFix</h1>
       <FilmsList/>
      </div>
    </ApiProvider>
  )
}

export default App
