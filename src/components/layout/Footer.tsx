import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white mt-12">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* ✅ Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="relative">
                                {/* 포인트 컬러 로고 */}
                                <div className="absolute inset-0 bg-[#ff486f] rounded-xl blur-lg opacity-40"></div>
                                <div className="relative w-10 h-10 bg-[#ff486f] rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-lg">R</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-[#ff486f] tracking-wide">
                                ROOMMATES
                            </h3>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            단기거주와 공간대여를 위한 글로벌 플랫폼
                        </p>
                    </div>

                    {/* ✅ Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="/" className="hover:text-[#ff486f] transition">Home</a></li>
                            <li><a href="/studio" className="hover:text-[#ff486f] transition">Roomi Studio</a></li>
                            <li><a href="/contact" className="hover:text-[#ff486f] transition">Contact</a></li>
                            <li><a href="#" className="hover:text-[#ff486f] transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* ✅ Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li className="flex items-center space-x-2">
                                <Mail size={16} className="text-slate-400" />
                                <a href="mailto:contact@roomi.co.kr" className="hover:text-[#ff486f] transition">
                                    bussiness@roomi.co.kr
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone size={16} className="text-slate-400" />
                                <span>+82-2-XXXX-XXXX</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={16} className="text-slate-400" />
                                <span>Seoul, South Korea</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ✅ Bottom Line */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-slate-500 text-sm mb-4 md:mb-0">
                            © {currentYear} ROOMMATES Co. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-slate-400 hover:text-[#ff486f] transition">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-[#ff486f] transition">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-[#ff486f] transition">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}