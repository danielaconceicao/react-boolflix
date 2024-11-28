import { useContext } from "react" 
import ApiContext from "../context/ApiContext"

export default function LayoutPage(){
    const { films } = useContext(ApiContext)

    return(
        <>

            <div className="d-flex justify-content-between align-items-center">
                <h1>Films</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="search for your movie" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
                </div>
            </div>

            <ul>
                {films.map(film => (<li key={film.id}>
                    {film.title}, {film.original_title}, {film.vote_average}, {film.original_language}
                </li>))}
            </ul>
        </>
    )
}