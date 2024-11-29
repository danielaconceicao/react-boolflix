import { useContext, useState, useEffect } from "react" 
import ApiContext from "../context/ApiContext"

export default function LayoutPage(){
    const { films } = useContext(ApiContext)
    const [searchFilm, setSearchFilm] = useState('')
    const [filmsFilter, setFilmsFilter] = useState([])
        
    function handleSearchFilm(){
        const filtered = films.filter(film => film.title.toLowerCase().includes(searchFilm.toLowerCase()))
        setFilmsFilter(filtered)
    }

    useEffect(() => {
        handleSearchFilm()
    }, [films]) 
   
    return(
        <>

            <div className="d-flex justify-content-between align-items-center">
                <h1>Films</h1>
                <div className="input-group mb-3">
                    <input
                     type="search"
                     name="searchText" 
                     id="searchText" 
                     className="form-control" 
                     placeholder="search for your movie" 
                     aria-label="Recipient's username" 
                     aria-describedby="button-addon2" 
                     value={searchFilm} 
                     onChange={e => setSearchFilm(e.target.value)}/>
                    <button onClick={handleSearchFilm} className="btn btn-outline-secondary" type="submit" id="button-addon2">search</button>
                </div>
            </div>

            <ul>
                {filmsFilter.map(film => (<li key={film.id}>
                    {film.title}, {film.original_title}, {film.vote_average}, {film.original_language}
                </li>))}
            </ul>
        </>
    )
}