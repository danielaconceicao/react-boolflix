import { useContext } from "react"
import ApiContext from "../context/ApiContext"
// eslint-disable-next-line no-unused-vars
import Flag from 'react-world-flags'


export default function LayoutPage() {
    const { films, series, VoteAverage } = useContext(ApiContext)


    return (
        <div className="container">
            <section className="films">
                <div className="row">

                    {films.map(film => (
                        <div key={film.id} className="col py-2">
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} className="card-img-top" alt={film.original_title} />
                                <div className="card-body">
                                    <p className="card-title"><strong>Titulo: </strong>{film.title}</p>
                                    <p className="card-text"><strong>Titulo Originale:</strong> {film.original_title}</p>
                                    <p className="card-text"><strong>Voto:</strong> {VoteAverage(film)}</p>
                                    <p><strong>Overview:</strong> {film.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*<Flag code={film.original_language.toUpperCase()} style={{ width: '30px', height: '20px', marginLeft: '10px' }} />
                </li>))} */}
            </section>

            <section className="series">
                <div className="row">
                    {series.map(serie => (
                        <div key={serie.id} className="col py-2">
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} className="card-img-top" alt={serie.name} />
                                <div className="card-body">
                                    <p className="card-title"><strong>Titulo: </strong>{serie.name}</p>
                                    <p className="card-text"><strong>Titulo Originale:</strong> {serie.original_name}</p>
                                    <p className="card-text"><strong>Voto:</strong> {VoteAverage(serie)}</p>
                                    <p><strong>Overview:</strong> {serie.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*
                {series.map(serie => (
                     <Flag code={serie.original_language.toUpperCase()} style={{ width: '30px', height: '20px', marginLeft: '10px' }} />
                    
                ))}
            */}
        </div>
    )
}
