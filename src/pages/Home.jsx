/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useContext } from "react"
import ApiContext from "../context/ApiContext"


export default function Home() {
    const { api_key_films, api_key_series } = useContext(ApiContext)
    const [film, setFilm] = useState([])
    const [serie, setSerie] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key_films}&query=suspen`)
            .then(res => res.json())
            .then(page => {
                setFilm(page.results)
            })

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key_series}&query=love`)
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setSerie(page.results)
            })
    }, [])

    return (
        <>
            <div className="container py-4">
                <h1 className="text-white fs-4 py-4">ORIGINALI BOOLFLIX</h1>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex">
                                {film.map((film) => (
                                    <img
                                        key={film.id}
                                        src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                                        alt={film.title}
                                        className="img-fluid"
                                        style={{ width: '15%' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex py-5">
                                {serie.map((serie) => (
                                    <img
                                        key={serie.id}
                                        src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
                                        alt={serie.title}
                                        className="img-fluid"
                                        style={{ width: '15%' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}