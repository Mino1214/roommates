// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";

import Header from "./components/layout/Header";
import Home from "./pages/Home";

export default function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors">
                    <Header />

                    {/* ✅ 메인 영역이 남은 공간 전부 차지 */}
                    <main
                        className={`flex-grow ${
                            location.pathname === "/"
                                ? "p-0 m-0"
                                : "container mx-auto px-4 py-8 md:py-12"
                        }`}
                    >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/studio" element={<Studio />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>


                </div>
            </Router>
        </HelmetProvider>
    );
}