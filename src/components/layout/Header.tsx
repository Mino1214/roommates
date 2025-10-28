import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Palette, Phone } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const navItems = [
        { label: 'Home', path: '/', icon: Home },
        { label: 'Portfolios', path: '/studio', icon: Palette },
        { label: 'Contact', path: '/contact', icon: Phone },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] transition-all duration-500">
            <div className="container mx-auto px-5 relative">
                <div className="flex items-center justify-between py-2 md:py-3">
                    {/* 로고 */}
                    <Link to="/" className="group flex items-center space-x-3 no-underline select-none">
                        <div className="relative">
                            <h1 className="text-2xl font-black text-[#ff486f] mb-4">
                                ROOMMATE <span className="text-xl text-white font-semibold">studio</span>
                            </h1>
                            <div className="absolute left-0 right-0 h-0.5 bg-[#ff486f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    </Link>

                    {/* 데스크탑 내비 */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative flex items-center space-x-2 font-semibold no-underline select-none transition-all duration-300 ${
                                    isActive(item.path)
                                        ? 'text-[#ff486f] font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#ff486f] after:rounded-full'
                                        : 'text-[#ff486f]/70 hover:text-[#ff486f]'
                                }`}
                                style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* 모바일 메뉴 버튼 */}
                    <button
                        className="md:hidden p-1 text-[#ff486f] transition-transform duration-300 hover:scale-110 select-none outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                        {isOpen ? <X size={26} color="#ff486f" /> : <Menu size={26} color="#ff486f" />}
                    </button>
                </div>

                {/* ✅ 모바일 내비 (배경/텍스트 동시 전환) */}
                <div
                    className={`md:hidden absolute top-full left-0 right-0 rounded-xl overflow-hidden transform-gpu transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-3 pointer-events-none'
                    }`}
                >
                    {/* ✅ 수정된 버전 */}
                    <div
                        className="relative flex flex-col py-4 px-5 space-y-3 bg-[#0b0b0c]/40 backdrop-blur-md rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block font-semibold text-base no-underline select-none transition-all duration-200 ${
                                    isActive(item.path)
                                        ? 'text-[#ff486f] font-bold after:content-[""] after:block after:w-6 after:h-[2px] after:bg-[#ff486f] after:mt-1 after:rounded-full'
                                        : 'text-[#ff486f]/80 hover:text-[#ff486f]'
                                }`}
                                style={{WebkitTapHighlightColor: 'transparent'}}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}