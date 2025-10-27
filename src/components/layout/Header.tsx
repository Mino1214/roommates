import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Palette, Phone, Sparkles, ChevronRight } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();

    // 스크롤 감지
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 페이지 변경 시 모바일 메뉴 닫기
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        {
            label: 'Home',
            path: '/',
            icon: Home,
            description: '메인 페이지'
        },
        {
            label: 'RM Studio',
            path: '/studio',
            icon: Palette,
            description: '창작 스튜디오'
        },
        {
            label: 'Contact',
            path: '/contact',
            icon: Phone,
            description: '문의하기'
        },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* 헤더 배경 블러 효과 */}
            <div className={`fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none transition-opacity duration-500 ${
                scrolled ? 'opacity-100' : 'opacity-0'
            }`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-900/80 backdrop-blur-xl"></div>
            </div>

            <header className={`sticky top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl'
                    : 'bg-white dark:bg-slate-900'
            }`}>
                <div className="container mx-auto px-4">
                    <div className={`flex items-center justify-between transition-all duration-500 ${
                        scrolled ? 'py-3' : 'py-5'
                    }`}>
                        {/* Animated Logo */}
                        {/* Animated Logo (수정됨) */}
                        <Link
                            to="/"
                            className="group flex items-center space-x-3 cursor-pointer"
                        >
                            <div className="relative">
                                {/* 틀 제거 → 이미지 단독 */}
                                <img
                                    src="/logo.png"
                                    alt="Roommates Logo"
                                    className="w-12 h-12 object-contain transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="relative">
                                <h1 className="text-2xl font-black text-[#ff486f]">
                                    ROOMMATES
                                </h1>
                                <div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff486f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </Link>


                        {/* Desktop Navigation with Enhanced Effects */}
                        <nav className="hidden md:flex items-center space-x-2">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.path}
                                        className="relative"
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        style={{
                                            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                                                isActive(item.path)
                                                    ? 'text-white'
                                                    : 'text-gray-700 dark:text-gray-300 hover:text-[#ff486f]'
                                            }`}
                                            style={{color: isActive(item.path) ? 'white' : 'inherit'}} // 추가
                                        >
                                            {/* 배경 */}
                                            <div
                                                className={`absolute inset-0 bg-[#ff486f] rounded-xl transition-all duration-300 ${
                                                    isActive(item.path)
                                                        ? 'opacity-100 scale-100'
                                                        : 'opacity-0 scale-95 hover:opacity-100 hover:scale-100'
                                                }`}></div>

                                            {/* 호버 글로우 효과 */}
                                            {hoveredItem === index && !isActive(item.path) && (
                                                <div
                                                    className="absolute inset-0 bg-[#ff486f] rounded-xl blur-xl opacity-20 animate-pulse"></div>
                                            )}

                                            {/* 콘텐츠 */}
                                            <div className="relative flex items-center space-x-2">
                                                <Icon size={18} className={`transition-transform duration-300 ${
                                                    hoveredItem === index ? 'rotate-12 scale-110' : ''
                                                } ${hoveredItem === index && !isActive(item.path) ? 'text-[#ff486f]' : ''}`}/>
                                                <span>{item.label}</span>
                                            </div>

                                            {/* 액티브 인디케이터 */}
                                            {isActive(item.path) && (
                                                <div
                                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                                            )}
                                        </Link>

                                        {/* 툴팁 */}
                                        {hoveredItem === index && !isActive(item.path) && (
                                            <div
                                                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#ff486f] text-white text-xs rounded-lg whitespace-nowrap opacity-0 animate-fadeIn pointer-events-none">
                                                {item.description}
                                                <div
                                                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#ff486f] rotate-45"></div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* CTA 버튼 */}
                            {/*<button className="group relative ml-4 px-6 py-2.5 bg-[#ff486f] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">*/}
                            {/*    <span className="relative z-10 flex items-center space-x-2">*/}
                            {/*        <span>시작하기</span>*/}
                            {/*        <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />*/}
                            {/*    </span>*/}
                            {/*    <div className="absolute inset-0 bg-[#ff2851] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>*/}
                            {/*</button>*/}
                        </nav>

                        {/* Enhanced Mobile Menu Button */}
                        <button
                            className={`md:hidden relative p-3 rounded-xl transition-all duration-300 ${
                                isOpen
                                    ? 'bg-[#ff486f] text-white'
                                    : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
                            }`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="relative w-6 h-6">
                                <Menu
                                    size={24}
                                    className={`absolute inset-0 transform transition-all duration-300 ${
                                        isOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                                    }`}
                                />
                                <X
                                    size={24}
                                    className={`absolute inset-0 transform transition-all duration-300 ${
                                        isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'
                                    }`}
                                />
                            </div>
                            {isOpen && (
                                <div
                                    className="absolute inset-0 bg-[#ff486f] rounded-xl blur-xl opacity-30 animate-pulse"></div>
                            )}
                        </button>
                    </div>

                    {/* Enhanced Mobile Navigation */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <nav className="py-3 space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                                            isActive(item.path)
                                                ? 'bg-[#ff486f] text-white'
                                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <Icon size={20}
                                              className={isActive(item.path) ? 'text-white' : 'text-[#ff486f]'}/>
                                        <span className="font-medium text-sm">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}