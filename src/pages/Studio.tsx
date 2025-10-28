import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet-async";

export default function Studio() {
    const navigate = useNavigate();

    const projects = [
        {
            image: "https://placehold.co/600x400",
            title: "Roomi – 단기거주 플랫폼",
            desc: "숙박과 공간 대여를 연결하는 글로벌 단기거주 서비스",
            tags: ["Flutter", "NestJS", "MariaDB"],
        },
        {
            image: "https://placehold.co/600x400",
            title: "ifdot – 뷰티 예약 플랫폼",
            desc: "K-Beauty 전문가와 고객을 연결하는 예약 시스템",
            tags: ["Next.js", "Prisma", "AWS"],
        },
        {
            image: "https://placehold.co/600x400",
            title: "Evolution Quant",
            desc: "AI 기반 1분 스캘핑 자동매매 시스템",
            tags: ["Python", "TensorFlow", "Binance API"],
        },
        {
            image: "https://placehold.co/600x400",
            title: "Roomi Admin Panel",
            desc: "호스트 승인, 정산, CS 대응을 위한 관리자 페이지",
            tags: ["React", "Node.js", "MySQL"],
        },
        {
            image: "https://placehold.co/600x400",
            title: "ifdot Marketing Dashboard",
            desc: "마케팅 트래킹 및 고객 분석용 웹 대시보드",
            tags: ["React", "Recharts", "TypeScript"],
        },
        {
            image: "https://placehold.co/600x400", // 임시 이미지 링크
            title: "cleanupsystems.shop – 임직원 복지몰",
            desc: "임직원 전용 복지몰 플랫폼 구축 프로젝트",
            tags: ["Shopify", "Headless CMS", "K-benefit"]
        }
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <><Helmet>
            <title>포트폴리오 | ROOMMATES Studio</title>
            <link rel="canonical" href="https://roomi.co.kr/studio" />
            <meta name="description" content="실제 수행한 프로젝트와 결과물 — Roomi, ifdot, Evolution Quant 등" />
            <meta property="og:title" content="포트폴리오 | ROOMMATES Studio" />
            <meta property="og:description" content="스타트업과 브랜드를 위한 실제 작업물 모음" />
            <meta property="og:image" content="https://roomfiles.s3.ap-northeast-2.amazonaws.com/uploads/image.png" />
            <meta property="og:url" content="https://roomi.co.kr/studio" />
            <meta name="twitter:card" content="summary_large_image" />
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
            <section className="relative min-h-screen snap-start flex flex-col justify-center bg-[#1a1a1d] py-16 px-6">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={fadeUp}
                >
                    <h2 className="text-4xl font-black mb-3">
                        Recent <span className="text-[#ff486f]">Works</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        스타트업과 브랜드를 위한 우리의 프로젝트를 소개합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="group bg-[#18181b] rounded-2xl border border-[#2e2e32] overflow-hidden hover:shadow-[0_0_40px_#ff486f50] transition-all duration-500"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-[#ff486f20] text-[#ff486f] border border-[#ff486f40]"
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

            <section className="min-h-screen snap-start flex flex-col items-center justify-center bg-white text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                    당신의 <span className="text-[#ff486f]">아이디어</span>를 실현할 차례입니다.
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                    단순한 외주가 아니라, 함께 성장하는 파트너십을 제공합니다.
                </p>
                <motion.button
                    whileHover={{scale: 1.07}}
                    whileTap={{scale: 0.95}}
                    onClick={() => navigate("/contact")}
                    className="px-10 py-4 bg-[#ff486f] text-white font-bold rounded-full shadow-[0_0_25px_#ff486f50] hover:shadow-[0_0_40px_#ff486f90] transition-all duration-300"
                >
                    상담 신청하기 →
                </motion.button>
            </section>
        </div>
        </>
    );
}