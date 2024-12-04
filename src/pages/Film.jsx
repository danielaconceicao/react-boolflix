import { useState, useEffect } from "react"

export default function Film() {
    const [filmSuspense, setFilmSuspense] = useState([])
    const [filmAction, setFilmAction] = useState([])
    const [filmRomance, setFilmRomance] = useState([])
    const [filmChristiman, setFilmChristiman] = useState([])


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=romance')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setFilmRomance(page.results)
            })

        fetch('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=suspe')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setFilmSuspense(page.results)
            })

        fetch('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=action')
            .then(res => res.json())
            .then(page => {
                setFilmAction(page.results)
            })

        fetch('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=christi')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setFilmChristiman(page.results)
            })
    }, [])
    return (
        <div className="container">
            <h1 className="text-white fs-4 pt-4">Suspense Movie</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {filmSuspense.map((serie) => (
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
            <h1 className="text-white fs-4 pt-4">Action Movie</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {filmAction.map((serie) => (
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
            <h1 className="text-white fs-4 pt-4">Action Movie</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {filmRomance.map((serie) => (
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

            <h1 className="text-white fs-4 pt-4">Action Movie</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {filmChristiman.map((serie) => (
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
    )
}