import imgLogo from '/boolflix.png'
import imgUser from '/user.png'
import NavMenu from '../components/NavMenu'
import { useContext } from "react"
import ApiContext from "../context/ApiContext"


export default function AppHeader(){
    const { handleSearchSubmit, setSearchText, searchText, searchTextVisibible, setSearchTextVisibible } = useContext(ApiContext)

    function handleFormClick(){
        setSearchTextVisibible(!searchTextVisibible)
    }
    return(
        <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <img src={imgLogo} alt="Logo boolflix" />
                <NavMenu />
            </div>

            <div className='d-flex align-items-center justify-content-between'>

                <form onSubmit={handleSearchSubmit} className={searchTextVisibible ? 'd-block' : 'd-none'}>
                    <div className="input-group mb-0">
                        <input
                            type="search"
                            name="searchText"
                            id="searchText"
                            className="form-control"
                            placeholder="search for your movie"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)} />
                    </div>
                </form>

                <i onClick={handleFormClick} className="bi bi-search px-3"></i>
                
                <p  className='my-0 px-1 text-white'>BAMBINI</p>
                
                <i className="bi bi-bell px-3"></i>
                
                <img className='img-user pe-0' src={imgUser} alt="image user" />
                <i className="bi bi-chevron-down px-2"></i>
            </div>
            
        </div>
    )
}