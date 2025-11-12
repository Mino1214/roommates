import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Footer from "../components/layout/Footer.tsx";
import {useEffect, useRef} from "react";
import {texts} from "../i18n/text.ts";

export default function Studio() {
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const userLang = typeof navigator !== "undefined"
        ? navigator.language || (navigator.languages && navigator.languages[0]) || "ko"
        : "ko";
    const lang = userLang.startsWith("en") ? "en" : "ko";
    const t = texts[lang].studio;
    // ✅ 새로고침 시 스크롤 초기화 + snap 계산 지연
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 100);
    }, []);
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = scrollRef.current;
        if (!element) return;
        isDragging.current = true;
        startX.current = e.pageX - element.offsetLeft;
        scrollLeft.current = element.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };


    const projects = [
        {
            image: "portfolio/roomi_seo.png",
            title: lang === "en" ? "Roomi – Short-term Stay Platform" : "Roomi – 단기거주 플랫폼",
            desc:
                lang === "en"
                    ? "A global short-term stay platform connecting spaces and stays."
                    : "숙박과 공간 대여를 연결하는 글로벌 단기거주 서비스",
            tags: ["Flutter", "NestJS", "AWS"],
            link: "https://roomi.co.kr",
        },
        {
            image: "https://framerusercontent.com/images/i3a7zTxcVbPdACO83bQwUd3pKQ.png",
            title: lang === "en" ? "ifdot – Beauty Booking Platform" : "ifdot – 뷰티 예약 플랫폼",
            desc:
                lang === "en"
                    ? "A booking system connecting K-Beauty professionals and clients."
                    : "K-Beauty 전문가와 고객을 연결하는 예약 시스템",
            tags: ["Flutter", "NestJS", "AWS"],
            link: "https://if-dot.com",
        },
        {
            image: "portfolio/kpmg_seo.png",
            title:
                lang === "en"
                    ? "cleanupsystems.shop – Corporate Welfare Mall"
                    : "cleanupsystems.shop – 임직원 복지몰",
            desc:
                lang === "en"
                    ? "A welfare shopping platform built for corporate employees."
                    : "임직원 전용 복지몰 플랫폼 구축 프로젝트",
            tags: ["NestJS", "Vite", "Redis"],
            link: "https://cleanupsystems.shop",
        },
    ];

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };
    return (
        <>
            <Helmet>
                <title>{t.meta.title}</title>
                <link rel="canonical" href="https://roomi.co.kr/studio" />
                <meta name="description" content={t.meta.desc} />
                <meta property="og:title" content={t.meta.ogTitle} />
                <meta property="og:description" content={t.meta.ogDesc} />
                <meta
                    property="og:image"
                    content="https://roomfiles.s3.ap-northeast-2.amazonaws.com/uploads/image.png"
                />
                <meta property="og:url" content="https://roomi.co.kr/studio" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className="h-screen snap-y snap-mandatory overflow-y-scroll text-white">
                {/* ✅ Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen snap-start bg-gradient-to-b from-[#111113] to-[#1a1a1d]">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            {t.heroTitle}
                        </h1>
                        <p className="text-gray-400 text-xl md:text-2xl mb-10">{t.heroSubtitle}</p>
                        <motion.button
                            whileHover={{scale: 1.07}}
                            whileTap={{scale: 0.95}}
                            onClick={() => navigate("/contact")}
                            className="px-10 py-4 bg-[#ff486f] text-white font-semibold rounded-full shadow-[0_0_30px_#ff486f70] hover:shadow-[0_0_45px_#ff486fb0] transition-all duration-300"
                        >
                            {t.heroButton}
                        </motion.button>
                    </motion.div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f20,transparent_70%)]"/>
                </section>

                {/* ✅ Projects Section */}
                <section
                    className="relative min-h-[calc(var(--vh,1vh)*100)] snap-start flex flex-col justify-center bg-white py-16 px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-black mb-3 text-gray-900">{t.worksTitle}</h2>
                        <p className="text-gray-600 text-lg">{t.worksDesc}</p>
                    </motion.div>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-8 no-scrollbar cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.02}}
                                className="snap-center shrink-0 w-[100%] sm:w-[70%] md:w-[45%] lg:w-[32.5%] aspect-[4/4] bg-[#f9f9fb] rounded-2xl border border-[#e0e0e5] overflow-hidden hover:shadow-[0_0_40px_#ff486f30] transition-all duration-500 flex flex-col cursor-pointer"
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        draggable="false"
                                    />
                                </div>
                                <div className="p-5 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900 line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed line-clamp-3">
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-[#ff486f10] text-[#ff486f] border border-[#ff486f30]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                <style>{`
    .no-scrollbar {
        -ms-overflow-style: none; /* IE/Edge */
        scrollbar-width: none; /* Firefox */
        overflow: -moz-scrollbars-none;
    }
    .no-scrollbar::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
        display: none !important;
        background: transparent;
    }
`}</style>
                <section
                    className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen snap-start bg-gradient-to-b from-[#111113] to-[#1a1a1d]">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
                            {t.ctaTitle}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl mb-10">{t.ctaDesc}</p>
                        <motion.button
                            whileHover={{scale: 1.07}}
                            whileTap={{scale: 0.95}}
                            onClick={() => navigate("/contact")}
                            className="px-10 py-4 bg-[#ff486f] text-white font-semibold rounded-full shadow-[0_0_30px_#ff486f70] hover:shadow-[0_0_45px_#ff486fb0] transition-all duration-300"
                        >
                            {t.ctaButton}
                        </motion.button>
                    </motion.div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f20,transparent_70%)]"/>
                </section>

                <footer className="hidden md:block snap-start h-auto min-h-[40vh]">
                    <Footer/>
                </footer>
            </div>
        </>
    );
}