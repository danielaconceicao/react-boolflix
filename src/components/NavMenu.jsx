import { NavLink } from "react-router-dom";

export default function NavMenu(){
    return(
        <>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/serieTv'>Serie TV</NavLink>
                <NavLink to='/film'>Film</NavLink>
                <NavLink to='/originali'>Originali</NavLink>
                <NavLink to='/aggiunt'>Aggiunti di ricente</NavLink>
            </nav>
        
        </>
    )
}