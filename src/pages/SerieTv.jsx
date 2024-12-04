import { useState, useEffect } from "react"

export default function SerieTv(){
    const [serieSuspense, setSerieSuspense] = useState([])
    const [serieAction, setSerieAction] = useState([])
    const [serieRomance, setSerieRomance] = useState([])
    const [serieChristiman, setserieChristiman] = useState([])


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=romance')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setSerieRomance(page.results)
            })

        fetch('https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=suspens')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setSerieSuspense(page.results)
            }) 
            
        fetch('https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=action')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setSerieAction(page.results)
            })
            
        fetch('https://api.themoviedb.org/3/search/movie?api_key=d4bad6889ca363a569b4c048485b5ece&query=christm')
            .then(res => res.json())
            .then(page => {
                console.log(page.results)
                setserieChristiman(page.results)
            })
    }, [])
    return(
        <div className="container">
            <h1 className="text-white fs-4 pt-4">Suspense</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {serieSuspense.map((serie) => (
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
            <h1 className="text-white fs-4 pt-4">Action</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {serieAction.map((serie) => (
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
            <h1 className="text-white fs-4 pt-4">Romance</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {serieRomance.map((serie) => (
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

            <h1 className="text-white fs-4 pt-4">Christiman</h1>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex py-4">
                            {serieChristiman.map((serie) => (
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