/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import ApiContext from "../context/ApiContext"

// eslint-disable-next-line react/prop-types
export function ApiProvider({ children }) {/* (E um componente)funcao responsavel por fornecer os dados necessarios para os componentes filhos */
    const [films, setFilms] = useState([])
    const [series, setSeries] = useState([])
    const [searchText, setSearchText] = useState('')

    const api_key_films = import.meta.env.VITE_MOVIE_DB_API_KEY
    const api_key_series = import.meta.env.VITE_SERIES_DB_API_KEY
    const films_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key_films}&query=${searchText}`
    const series_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key_series}&query=${searchText}`

    function handleSearchSubmit(e) {
        e.preventDefault()
    }

    function VoteAverage(film) {
        const vote = parseInt(film.vote_average)
        const stars = []

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    className={i <= vote ? "bi bi-star-fill" : "bi bi-star"} 
                    style={{ color: i <= vote ? "#FFD700" : "#D3D3D3" }} 
                ></i>
            )
        }

        return <>{stars}</>


    }

    useEffect(() => {
        fetch(films_api_url)
            .then(res => res.json())
            .then(page => {
                setFilms(page.results)
            })

        fetch(series_api_url)
            .then(res => res.json())
            .then(page => {
                setSeries(page.results)
            })
    }, [searchText])


    const values = {
        films,
        searchText,
        setSearchText,
        series,
        setSeries,
        handleSearchSubmit,
        VoteAverage
    }

    /* Dando acesso a outros componentes */
    return (
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    )
}

/* https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=ritorno+al+futuro */