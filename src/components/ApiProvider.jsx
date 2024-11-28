import { useState, useEffect} from "react"
import ApiContext from "../context/ApiContext"

// eslint-disable-next-line react/prop-types
export function ApiProvider({ children }) {/* (E um componente)funcao responsavel por fornecer os dados necessarios para os componentes filhos */
    const [films, setFilms] = useState([])

    function fetchFilms() {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=ritorno+al+futuro')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setFilms(page.results)
            })
    }

    useEffect(() => fetchFilms(), [])

    /* Dando acesso a outros componentes */
    return (
        <ApiContext.Provider value={{ films }}>
            {children}
        </ApiContext.Provider>
    )
}