import { useContext } from "react" 
import ApiContext from "../context/ApiContext"
import Flag from 'react-world-flags' 


export default function LayoutPage(){
    // eslint-disable-next-line no-unused-vars
    const { films, searchText, setSearchText, series, setSeries, handleSearchSubmit, VoteAverage } = useContext(ApiContext)

    return(
        <>
            <form onSubmit={handleSearchSubmit}>
                <div className="input-group mb-3">
                    <input
                     type="search"
                     name="searchText" 
                     id="searchText" 
                     className="form-control" 
                     placeholder="search for your movie" 
                     aria-label="Recipient's username" 
                     aria-describedby="button-addon2" 
                     value={searchText} 
                     onChange={e => setSearchText(e.target.value)}/>
                </div>
            </form>

            <ul>
                {films.map(film => (<li key={film.id}>
                    {film.title}, {film.original_title}, {VoteAverage(film)} <Flag code={film.original_language.toUpperCase()} style={{ width: '30px', height: '20px', marginLeft: '10px' }} />  
                </li>))}
            </ul>

            <ul>
                {series.map(serie => (
                    <li key={serie.id}>
                        {serie.name}, {serie.original_name}, {VoteAverage(serie)} <Flag code={serie.original_language.toUpperCase()} style={{ width: '30px', height: '20px', marginLeft: '10px' }} />  
                    </li>
                ))}
            </ul>
        </>
    )
}
