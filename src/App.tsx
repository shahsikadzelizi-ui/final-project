import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import BackgroundPages from "./pages/BackgroundPages";
import HomePages from "./pages/HomePages";

export function App() {
    return (
        <section>
            <BackgroundPages />
            <HomePages />
            <Footer/>
            <Navbar />

        </section>
    );
}