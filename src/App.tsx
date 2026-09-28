import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";


export function App() {
    return (
        <section>
            
            <Navbar />
            <Outlet />
            <Footer/>

        </section>
    );
}