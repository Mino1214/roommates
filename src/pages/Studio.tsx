import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Footer from "../components/layout/Footer.tsx";
import {useEffect, useRef} from "react";

export default function Studio() {
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
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
            title: "Roomi – 단기거주 플랫폼",
            desc: "숙박과 공간 대여를 연결하는 글로벌 단기거주 서비스",
            tags: ["Flutter", "NestJS", "AWS"],
            link: "https://roomi.co.kr",
        },
        {
            image: "https://framerusercontent.com/images/i3a7zTxcVbPdACO83bQwUd3pKQ.png",
            title: "ifdot – 뷰티 예약 플랫폼",
            desc: "K-Beauty 전문가와 고객을 연결하는 예약 시스템",
            tags: ["Flutter", "NestJS", "AWS"],
            link: "https://if-dot.com",
        },
        {
            image: "portfolio/kpmg_seo.png", // 임시 이미지 링크
            title: "cleanupsystems.shop – 임직원 복지몰",
            desc: "임직원 전용 복지몰 플랫폼 구축 프로젝트",
            tags: ["NestJS", "Vite", "Redis"],
            link: "https://cleanupsystems.shop",
        },
        // {
        //     image: "https://placehold.co/600x400",
        //     title: "Evolution Quant",
        //     desc: "AI 기반 1분 스캘핑 자동매매 시스템",
        //     tags: ["Python", "TensorFlow", "Binance API"],
        // },
        // {
        //     image: "https://placehold.co/600x400",
        //     title: "Roomi Admin Panel",
        //     desc: "호스트 승인, 정산, CS 대응을 위한 관리자 페이지",
        //     tags: ["React", "Node.js", "MySQL"],
        // },
        // {
        //     image: "https://placehold.co/600x400",
        //     title: "ifdot Marketing Dashboard",
        //     desc: "마케팅 트래킹 및 고객 분석용 웹 대시보드",
        //     tags: ["React", "Recharts", "TypeScript"],
        // },

    ];

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };
    return (
        <><Helmet>
            <title>포트폴리오 | ROOMMATES Studio</title>
            <link rel="canonical" href="https://roomi.co.kr/studio"/>
            <meta name="description" content="실제 수행한 프로젝트와 결과물 — Roomi, ifdot, Evolution Quant 등"/>
            <meta property="og:title" content="포트폴리오 | ROOMMATES Studio"/>
            <meta property="og:description" content="스타트업과 브랜드를 위한 실제 작업물 모음"/>
            <meta property="og:image" content="https://roomfiles.s3.ap-northeast-2.amazonaws.com/uploads/image.png"/>
            <meta property="og:url" content="https://roomi.co.kr/studio"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,"name":"홈","item":"https://roomi.co.kr/"},
              {"@type":"ListItem","position":2,"name":"포트폴리오","item":"https://roomi.co.krstudio"}
            ]
          }
        `}</script>
        </Helmet>
            <div className="h-screen snap-y snap-mandatory overflow-y-scroll text-white">
                {/* ✅ Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen snap-start bg-gradient-to-b from-[#111113] to-[#1a1a1d]">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Our <span className="text-[#ff486f]">Portfolio</span>
                        </h1>
                        <p className="text-gray-400 text-xl md:text-2xl mb-10">
                            우리가 만들어온 서비스, 당신의 아이디어가 될 수 있습니다.
                        </p>
                        <motion.button
                            whileHover={{scale: 1.07}}
                            whileTap={{scale: 0.95}}
                            onClick={() => navigate("/contact")}
                            className="px-10 py-4 bg-[#ff486f] text-white font-semibold rounded-full shadow-[0_0_30px_#ff486f70] hover:shadow-[0_0_45px_#ff486fb0] transition-all duration-300"
                        >
                            프로젝트 문의하기 →
                        </motion.button>
                    </motion.div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f20,transparent_70%)]"/>
                </section>

                {/* ✅ Projects Section */}
                {/* ✅ Projects Section */}
                <section
                    className="relative min-h-[calc(var(--vh,1vh)*100)] snap-start flex flex-col justify-center bg-white py-16 px-6"
                >
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeUp}
                    >
                        <h2 className="text-4xl font-black mb-3 text-gray-900">
                            Recent <span className="text-[#ff486f]">Works</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            스타트업과 브랜드를 위한 우리의 프로젝트를 소개합니다.
                        </p>
                    </motion.div>

                    {/* ✅ 좌우 스크롤 컨테이너 */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-8
    no-scrollbar cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.02}}
                                className="
      snap-center shrink-0
      w-[100%]
      sm:w-[70%]
      md:w-[45%]
      lg:w-[32.5%]
      aspect-[4/4]
      bg-[#f9f9fb] rounded-2xl border border-[#e0e0e5]
      overflow-hidden hover:shadow-[0_0_40px_#ff486f30]
      transition-all duration-500 flex flex-col
      cursor-pointer
    "
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                {/* 이미지 영역 */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        draggable="false"
                                    />
                                </div>

                                {/* 텍스트 영역 */}
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

                {/* ✅ 스크롤바 완전 숨김용 CSS */}
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }

                    .no-scrollbar {
                        -ms-overflow-style: none; /* IE/Edge */
                        scrollbar-width: none; /* Firefox */
                    }
                `}</style>

                {/* ✅ CTA Section */}
                {/*<section className="min-h-screen snap-start flex flex-col items-center justify-center bg-[#0b0b0c] text-center">*/}
                {/*    <h2 className="text-4xl md:text-5xl font-black mb-6">*/}
                {/*        당신의 <span className="text-[#ff486f]">아이디어</span>를 실현할 차례입니다.*/}
                {/*    </h2>*/}
                {/*    <p className="text-gray-400 mb-10 text-lg">*/}
                {/*        단순한 외주가 아니라, 함께 성장하는 파트너십을 제공합니다.*/}
                {/*    </p>*/}
                {/*    <motion.button*/}
                {/*        whileHover={{ scale: 1.07 }}*/}
                {/*        whileTap={{ scale: 0.95 }}*/}
                {/*        onClick={() => navigate("/contact")}*/}
                {/*        className="px-10 py-4 bg-[#ff486f] text-white font-bold rounded-full shadow-[0_0_30px_#ff486f70] hover:shadow-[0_0_50px_#ff486fb0] transition-all duration-300"*/}
                {/*    >*/}
                {/*        상담 신청하기 →*/}
                {/*    </motion.button>*/}
                {/*</section>*/}

                <section
                    className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen snap-start bg-gradient-to-b from-[#111113] to-[#1a1a1d]"
                >
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
                            당신의 <span className="text-[#ff486f]">아이디어</span>를 실현할 차례입니다.
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl mb-10">
                            단순한 외주가 아니라, 함께 성장하는 파트너십을 제공합니다.
                        </p>
                        <motion.button
                            whileHover={{scale: 1.07}}
                            whileTap={{scale: 0.95}}
                            onClick={() => navigate("/contact")}
                            className="px-10 py-4 bg-[#ff486f] text-white font-semibold rounded-full shadow-[0_0_30px_#ff486f70] hover:shadow-[0_0_45px_#ff486fb0] transition-all duration-300"
                        >
                            상담 신청하기 →
                        </motion.button>
                    </motion.div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f20,transparent_70%)]"/>
                </section>
                {/*hidden md:block*/}
                <footer className="hidden md:block snap-start h-auto min-h-[40vh]">
                    <Footer/>
                </footer>
            </div>
        </>
    );
}