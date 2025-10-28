import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import Footer from "./components/layout/Footer.tsx";
import Header from "./components/layout/Header.tsx";
import Home from "./pages/Home.tsx";

export default function App() {
    return (
        <Router>
            <div
                className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors">
                <Header/>
                <main
                    className={`flex-1 ${location.pathname === "/" ? "p-0 m-0" : "container mx-auto px-4 py-8 md:py-12"}`}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/studio" element={<Studio/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <div className="hidden md:block">
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}