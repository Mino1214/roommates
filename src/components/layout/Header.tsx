import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Palette, Phone } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [, setScrolled] = useState(false);
    const [, setHoveredItem] = useState<number | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const navItems = [
        { label: 'Home', path: '/', icon: Home, description: '메인 페이지' },
        { label: 'Portfolios', path: '/studio', icon: Palette, description: '창작 스튜디오' },
        { label: 'Contact', path: '/contact', icon: Phone, description: '문의하기' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <header
                className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[90%] md:w-[80%]`}
            >
                <div className="container mx-auto px-5">
                    <div className="flex items-center justify-between py-2 md:py-3">
                        {/* 로고 */}
                        <Link to="/" className="group flex items-center space-x-3">
                            {/*<img*/}
                            {/*    src="/logo.png"*/}
                            {/*    alt="Roommates Logo"*/}
                            {/*    className="w-10 h-10 object-contain transform transition-transform duration-300 group-hover:scale-110"*/}
                            {/*/>*/}
                            <div className="relative">
                                <h1 className="text-2xl font-extrabold text-[#ff486f] tracking-tight">
                                    ROOMMATES
                                </h1>
                                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff486f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </Link>

                        {/* 데스크탑 내비 */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map((item, index) => {
                                // const Icon = item.icon;
                                return (
                                    <div
                                        key={item.path}
                                        className="relative group"
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`flex items-center space-x-2 font-semibold transition-all duration-300 ${
                                                isActive(item.path)
                                                    ? 'text-[#ff486f] hover:opacity-100 hover:text-[#ff486f]'
                                                    : 'text-[#ff486f] opacity-80 hover:opacity-100 hover:text-[#ff486f]'
                                            }`}
                                        >
                                            {/*<Icon size={18} color="#ff486f" />*/}
                                            <span>{item.label}</span>
                                        </Link>
                                    </div>
                                );
                            })}
                        </nav>

                        {/* 모바일 메뉴 버튼 */}
                        <button
                            className="md:hidden p-1 text-[#ff486f] transition-transform duration-300 hover:scale-110"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={26} color="#ff486f" /> : <Menu size={26} color="#ff486f" />}
                        </button>
                    </div>

                    {/* 모바일 내비 (글자만 보이게) */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-500 ${
                            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <nav className="py-3 space-y-2">
                            {navItems.map((item) => {
                                // const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center space-x-3 px-2 py-2 font-semibold transition-colors duration-200 ${
                                            isActive(item.path)
                                                ? 'text-[#ff486f]'
                                                : 'text-[#ff486f] opacity-80 hover:opacity-100 hover:text-[#ff486f]'
                                        }`}
                                    >
                                        {/*<Icon size={20} color="#ff486f" />*/}
                                        <span className="text-sm">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
