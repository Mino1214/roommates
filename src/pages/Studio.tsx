import { Code, Clock, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function Studio() {
    const navigate = useNavigate();
    const services = [
        {
            icon: Code,
            title: 'Full Stack Development',
            description: 'React, Node.js, Python 등 최신 기술 스택을 활용한 개발',
            price: '저렴한 가격',
        },
        {
            icon: Clock,
            title: 'Rapid Development',
            description: '빠른 개발 주기로 아이디어를 빠르게 실현',
            price: '탁월한 효율',
        },
        {
            icon: Zap,
            title: 'MVP Excellence',
            description: 'MVP부터 프로덕션까지 완벽한 파트너십',
            price: '확장 가능',
        },
    ];

    const benefits = [
        '경험 많은 개발팀과 빠른 상담',
        '비용 효율적인 개발 프로세스',
        '품질 보증 및 기술 지원',
        '민첩한 개발 방식 (Agile)',
        '완벽한 문서화',
        '24/7 기술 지원',
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* ✅ Hero Section */}
            <section className="text-center py-20 bg-gray-50 border-b border-gray-200">
                <motion.div
                    className="container mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-[#ff486f] mb-4">
                        Roommates Studio
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6">
                        스타트업을 위한 빠르고 효율적인 MVP 개발 서비스
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                        당신의 아이디어를 현실로 만드는 개발 파트너. 합리적인 비용으로 빠르고 안정적인 결과를 제공합니다.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-3 bg-[#ff486f] text-white font-semibold rounded-lg hover:opacity-90 transition-all"
                    >
                        상담 신청하기
                    </button>
                </motion.div>
            </section>

            {/* ✅ Services Section */}
            <section className="py-20 px-6 bg-white">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-3">우리가 제공하는 서비스</h2>
                    <p className="text-gray-600 text-lg">
                        스타트업 성공을 위한 핵심 개발 솔루션
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                className="p-8 rounded-2xl bg-gray-50 hover:bg-[#ff486f] transition-all duration-300 hover:text-white border border-gray-100 hover:shadow-xl"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div className="w-12 h-12 bg-[#ff486f]/10 rounded-xl flex items-center justify-center mb-6">
                                    <Icon className="text-[#ff486f]" size={28} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <p className="text-[#ff486f] font-semibold">{service.price}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ✅ Benefits Section */}
            <section className="py-20 px-6 bg-gray-50">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-3">
                        왜 Roommates Studio를 선택해야 할까?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <CheckCircle className="text-[#ff486f] flex-shrink-0 mt-1" size={24} />
                            <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ✅ Process Section */}
            <section className="py-20 px-6 bg-white">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-3">
                        개발 프로세스
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto">
                    {['상담', 'UI/UX 설계', '개발', '배포'].map((step, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div className="w-16 h-16 bg-[#ff486f] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                {index + 1}
                            </div>
                            <h4 className="font-semibold mb-2">{step}</h4>
                            <p className="text-sm text-gray-600">
                                {['요구사항 분석', '디자인 및 프로토타입', '풀스택 개발', '배포 및 유지보수'][index]}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ✅ CTA Section */}
            <motion.section
                className="py-20 text-center bg-gray-900 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                    당신의 스타트업을 다음 단계로
                </h2>
                <p className="text-gray-300 mb-8">
                    지금 바로 상담을 받고 아이디어를 현실로 만들어보세요
                </p>
                <button className="px-8 py-3 bg-[#ff486f] text-white font-semibold rounded-lg hover:opacity-90 transition-all">
                    지금 연락하기
                </button>
            </motion.section>
        </div>
    );
}