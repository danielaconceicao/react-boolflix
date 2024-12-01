import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader'


export default function Layout() {
    return (
        <>
            <header>
                <AppHeader />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>
                    Created by Daniela Conceição, &copy; {new Date().getFullYear()}
                </p>
            </footer>

        </>
    );
}