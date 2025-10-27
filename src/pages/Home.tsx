import {
    Code,
    Rocket,
    Clock,
    Shield,
    Smartphone,
    Globe,
    Zap,
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
    const [, setHoveredCard] = useState<number | null>(null);

    const features = [
        { icon: Rocket, title: '빠른 MVP 개발', description: '아이디어를 2-4주 안에 실제 제품으로 구현합니다' },
        { icon: Code, title: '전문 개발팀', description: '10년+ 경력의 시니어 개발자들이 프로젝트를 담당합니다' },
        { icon: Shield, title: '품질 보증', description: '6개월 무상 유지보수와 버그 수정을 제공합니다' },
        { icon: Clock, title: '정시 납품', description: '약속된 일정을 지키며, 주 단위 진행상황을 공유합니다' },
    ];

    const services = [
        {
            icon: Smartphone,
            title: '모바일 앱',
            description: 'iOS/Android 네이티브 & 크로스플랫폼',
            tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
        },
        {
            icon: Globe,
            title: '웹 애플리케이션',
            description: '반응형 웹사이트 & SaaS 플랫폼',
            tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
        },
        {
            icon: Zap,
            title: 'AI/ML 솔루션',
            description: 'ChatGPT 연동 & 맞춤형 AI 모델',
            tech: ['OpenAI', 'Python', 'TensorFlow', 'LangChain'],
        },
    ];

    const process = [
        { step: '1', title: '무료 상담', description: '프로젝트 요구사항 분석' },
        { step: '2', title: '견적 & 일정', description: '투명한 가격과 명확한 일정' },
        { step: '3', title: '개발 진행', description: '애자일 방식의 빠른 개발' },
        { step: '4', title: '배포 & 지원', description: '런칭과 지속적인 유지보수' },
    ];

    const stats = [
        { value: '2', label: '완료된 프로젝트 (Roomi, ifdot)' },
        { value: '100%', label: '고객 만족도' },
        { value: '3~4주', label: '평균 개발 기간' },
        { value: '24/7', label: '지원 서비스' },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-white">
            {/* ✅ Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <motion.div
                    className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-[#ff486f] bg-[#ff486f]/10 rounded-full border border-[#ff486f]/20">
                        🚀 스타트업 MVP 전문 개발사
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        아이디어를
                        <span className="block text-[#ff486f]">현실로 만드는</span>
                        <span className="block">룸메이트</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        스타트업의 MVP를 빠르고 안정적으로 개발합니다.
                        <br />최고의 개발팀과 함께 당신의 비즈니스를 시작하세요.
                    </p>
                </motion.div>
            </section>

            {/* ✅ Features */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            왜 룸메이트인가?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            스타트업이 성공하는 데 필요한 모든 것을 제공합니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative"
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeUp}
                                    viewport={{ once: true }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                        <div className="w-12 h-12 bg-[#ff486f]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ff486f] transition-all duration-300">
                                            <Icon className="text-[#ff486f] group-hover:text-white transition-colors" size={24} />
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ✅ Services */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">우리가 만드는 것</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            최신 기술스택으로 모든 플랫폼을 지원합니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group bg-gray-50 p-8 rounded-2xl hover:bg-[#ff486f] transition-all duration-300"
                                    whileHover={{ scale: 1.03 }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    <Icon className="text-[#ff486f] group-hover:text-white mb-4" size={32} />
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-white/90 mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white group-hover:bg-white/20 text-xs font-medium text-[#ff486f] group-hover:text-white rounded-full border border-gray-200 group-hover:border-white/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ✅ Process */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">개발 프로세스</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            4단계로 완성되는 당신의 MVP
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div className="w-16 h-16 bg-[#ff486f] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ Stats */}
            <section className="py-12 px-6 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        {stats.map((stat, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.1 }}>
                                <p className="text-3xl font-bold text-[#ff486f]">{stat.value}</p>
                                <p className="text-gray-400 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}