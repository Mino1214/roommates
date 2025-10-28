import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-[#0b0b0c] to-[#1a1a1d] text-white border-t border-[#2a2a2d]">
            {/* glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f15,transparent_70%)] pointer-events-none" />

            <div className="relative container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* ✅ Brand */}
                    <div>
                        <h3 className="text-3xl font-black text-[#ff486f] mb-4">
                            ROOMMATES
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            빠르고 효율적인 MVP 개발을 위한 전문 스튜디오.
                            <br />당신의 아이디어를 현실로 만들어 드립니다.
                        </p>
                    </div>

                    {/* ✅ Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/" className="hover:text-[#ff486f] transition">Home</a></li>
                            <li><a href="/studio" className="hover:text-[#ff486f] transition">Portfolios</a></li>
                            <li><a href="/contact" className="hover:text-[#ff486f] transition">Contact</a></li>
                            <li>
                                <a href="https://cleanupsystems.shop" target="_blank" rel="noreferrer" className="hover:text-[#ff486f] transition">
                                    CleanUp Systems (임직원 복지몰)
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* ✅ Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center space-x-2">
                                <Mail size={16} className="text-gray-400" />
                                <a href="mailto:bussiness@roomi.co.kr" className="hover:text-[#ff486f] transition">
                                    bussiness@roomi.co.kr
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone size={16} className="text-gray-400" />
                                <span>+82 10-9566-6385</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={16} className="text-gray-400" />
                                <span>Seoul, South Korea</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ✅ Bottom Line */}
                <div className="border-t border-[#2a2a2d] pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {currentYear} ROOMMATES Studio. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-400 hover:text-[#ff486f] transition">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#ff486f] transition">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#ff486f] transition">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}