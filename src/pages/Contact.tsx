import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            setIsSubmitted(false);
        }, 3000);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* ✅ Hero Section */}
            <section className="text-center py-20 bg-gray-50 border-b border-gray-200">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-[#ff486f] mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        궁금한 점이 있으시면 언제든지 연락주세요
                    </p>
                </motion.div>
            </section>

            {/* ✅ Info & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto py-20 px-6">
                {/* Info Cards */}
                <motion.div
                    className="lg:col-span-1 space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    {[
                        {
                            icon: Mail,
                            color: 'text-blue-600',
                            bg: 'from-blue-100 to-blue-200',
                            title: 'Email',
                            content: (
                                <>
                                    <a href="mailto:business@roomi.co.kr" className="text-blue-600 hover:underline font-medium">
                                        business@roomi.co.kr
                                    </a>
                                    <p className="text-gray-600 text-sm mt-2">보통 24시간 내에 답변해드립니다</p>
                                </>
                            ),
                        },
                        {
                            icon: Phone,
                            color: 'text-green-600',
                            bg: 'from-green-100 to-green-200',
                            title: 'Phone',
                            content: (
                                <>
                                    <a href="tel:+82-2-XXXX-XXXX" className="text-green-600 hover:underline font-medium">
                                        +82-2-XXXX-XXXX
                                    </a>
                                    <p className="text-gray-600 text-sm mt-2">평일 09:00 ~ 18:00</p>
                                </>
                            ),
                        },
                        {
                            icon: MapPin,
                            color: 'text-red-600',
                            bg: 'from-red-100 to-red-200',
                            title: 'Location',
                            content: (
                                <>
                                    <p className="text-gray-700 font-medium">Seoul, South Korea</p>
                                    <p className="text-gray-600 text-sm mt-2">온라인 상담 및 오프라인 방문 가능</p>
                                </>
                            ),
                        },
                    ].map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${card.bg} rounded-lg flex items-center justify-center mb-4`}>
                                    <Icon className={card.color} size={24} />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">{card.title}</h3>
                                {card.content}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Form */}
                <motion.div
                    className="lg:col-span-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">메시지 보내기</h2>

                        {isSubmitted ? (
                            <motion.div
                                className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-14 h-14 bg-[#ff486f] rounded-full flex items-center justify-center mx-auto">
                                    <Send className="text-white" size={24} />
                                </div>
                                <h3 className="font-semibold text-[#ff486f] text-lg">
                                    메시지가 전송되었습니다!
                                </h3>
                                <p className="text-gray-600">
                                    빠른 시간 내에 연락드리겠습니다.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">성명 *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                            placeholder="이름을 입력하세요"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">이메일 *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                            placeholder="이메일을 입력하세요"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">연락처</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                            placeholder="010-XXXX-XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">문의 유형 *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                        >
                                            <option value="">선택해주세요</option>
                                            <option value="roomi-inquiry">Roommates 관련 문의</option>
                                            <option value="studio-inquiry">Studio 관련 문의</option>
                                            <option value="partnership">파트너십 제안</option>
                                            <option value="other">기타</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">메시지 *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent resize-none"
                                        placeholder="메시지를 입력하세요"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#ff486f] text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>문의하기</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* ✅ FAQ Section */}
            <section className="py-20 bg-gray-50">
                <motion.div
                    className="container mx-auto text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-3">자주 묻는 질문</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-6">
                    {[
                        {
                            q: 'Roomi 서비스는 어떻게 시작하나요?',
                            a: '회원가입 후 간단한 정보 입력만으로 바로 시작할 수 있습니다. 자세한 가이드는 이메일로 보내드립니다.',
                        },
                        {
                            q: 'MVP 개발 비용은 얼마인가요?',
                            a: '프로젝트 규모와 요구사항에 따라 다릅니다. 무료 상담을 통해 정확한 견적을 제공해드립니다.',
                        },
                        {
                            q: '개발 기간은 얼마나 걸리나요?',
                            a: '일반적으로 3~12주 정도 소요되며, 복잡도에 따라 조정됩니다.',
                        },
                        {
                            q: '사후 지원은 받을 수 있나요?',
                            a: '네, 배포 후 12개월간 무료 유지보수 및 기술 지원을 제공합니다.',
                        },
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            className="p-5 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-all"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                            <p className="text-gray-600 text-sm">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}