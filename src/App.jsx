import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import SearchFilmsESeries from './components/SearchFilmsESeries'
import { ApiProvider } from './context/ApiProvider'
import Layout from './pages/Layout'
import Home from './pages/Home'
import SerieTv from './pages/SerieTv'
import Film from './pages/Film'




function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/' element={<SearchFilmsESeries />}/>
            <Route path='/serieTv' element={<SerieTv />}/>
            <Route path='/film' element={<Film />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App
