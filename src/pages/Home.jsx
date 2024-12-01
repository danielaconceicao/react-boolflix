import { useEffect, useState } from "react"

export default function Home(){
  const [film, setFilm] = useState([])

  function feachFilm(){
      fetch('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=suspen')
      .then(res => res.json())
      .then(page => {
        setFilm(page.results)
      })
  }

  

    useEffect(() => (feachFilm()), [])
    return(
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
                                        style={{width: '15%'}}
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