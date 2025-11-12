import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import EstimateWizard from "../components/ui/EstimateWizard.tsx";
import Footer from "../components/layout/Footer.tsx";
import { texts } from "../i18n/text.ts";

export default function TerminalBuildHero() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentText, setCurrentText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [loop, setLoop] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // ✅ 브라우저 언어 감지
    const userLang =
        typeof navigator !== "undefined"
            ? navigator.language || (navigator.languages && navigator.languages[0]) || "ko"
            : "ko";
    const lang = userLang.startsWith("en") ? "en" : "ko";
    const t = texts[lang];

    // ✅ 타이핑 효과
    useEffect(() => {
        if (lineIndex >= t.messages.length) {
            setTimeout(() => {
                setDisplayedLines([]);
                setLineIndex(0);
                setCharIndex(0);
                setCurrentText("");
                setLoop((prev) => prev + 1);
            }, 2000);
            return;
        }

        if (charIndex < t.messages[lineIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + t.messages[lineIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 35);
            return () => clearTimeout(timeout);
        } else {
            const lineTimeout = setTimeout(() => {
                setDisplayedLines((prev) => [...prev, t.messages[lineIndex]]);
                setCurrentText("");
                setCharIndex(0);
                setLineIndex((prev) => prev + 1);
            }, 300);
            return () => clearTimeout(lineTimeout);
        }
    }, [charIndex, lineIndex, loop, t.messages]);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <Helmet>
                <title>{t.meta.title}</title>
                <link rel="canonical" href="https://roomi.co.kr/" />
                <meta name="description" content={t.meta.desc} />
                <meta property="og:title" content={t.meta.title} />
                <meta property="og:description" content={t.meta.ogDesc} />
                <meta property="og:image" content="https://roomfiles.s3.ap-northeast-2.amazonaws.com/uploads/image.png" />
                <meta property="og:url" content="https://roomi.co.kr/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className="w-full h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory bg-gradient-to-b from-[#111113] to-[#1a1a1d] text-white">
                {/* ✅ 1️⃣ 첫 섹션 - 터미널 */}
                <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f20,transparent_70%)]" />

                    <motion.div
                        key={loop}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-white text-[#111113] w-[90%] max-w-3xl rounded-lg shadow-[0_0_40px_#ff486f30] border border-[#111113]/20 font-mono overflow-hidden"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f5] border-b border-[#e0e0e0]">
                            <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                            <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                            <span className="ml-3 text-gray-500 text-sm select-none">Roommate.exe</span>
                        </div>

                        <div className="p-6 md:p-8 min-h-[220px]">
                            {displayedLines.map((line, i) => (
                                <p key={i} className="whitespace-pre text-sm md:text-lg mb-1 tracking-tight">
                                    {line}
                                </p>
                            ))}
                            <p className="whitespace-pre text-sm md:text-lg tracking-tight inline">
                                {currentText}
                                <motion.span
                                    className="inline-block w-3 h-5 bg-[#ff486f] ml-1"
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                />
                            </p>
                        </div>
                    </motion.div>

                    {/* 스크롤 유도 */}
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-6 text-gray-400 text-sm flex flex-col items-center"
                    >
                        <span className="mb-2">{t.moreText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </section>

                {/* ✅ 2️⃣ Hero 섹션 */}
                <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start bg-gradient-to-b from-[#f6f6f6] to-[#eaeaea] text-center text-[#111113]">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-black mb-8"
                    >
                        {lang === "ko" ? (
                            <><span className="text-[#ff486f]">앱 · 웹</span> 개발해줘</>
                        ) : (
                            <><span className="text-[#ff486f]">App · Web</span> Development</>
                        )}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-2xl md:text-3xl mb-12 leading-relaxed"
                    >
                        {lang === "ko" ? (
                            <>아이디어만 주세요.<br/>실제 서비스로 만들어드릴게요.</>
                        ) : (
                            <>Just give us your idea.<br/>We'll make it a real service.</>
                        )}
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                        className="px-12 py-5 bg-[#ff486f] text-white font-bold text-lg rounded-full shadow-[0_0_25px_#ff486f90] hover:shadow-[0_0_40px_#ff486fb0] transition-all duration-300"
                    >
                        {t.quoteButton}
                    </motion.button>

                    {/* ✅ 모달 */}
                    <AnimatePresence>
                        {showModal && (
                            <>
                                <motion.div
                                    key="backdrop"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.6 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                                    onClick={() => setShowModal(false)}
                                />

                                <motion.div
                                    key="modal"
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                                >
                                    <div className="relative bg-[#1a1a1a] rounded-2xl max-w-lg w-full overflow-hidden">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-400 text-2xl"
                                        >
                                            ✕
                                        </button>

                                        <div className="text-center pt-8 pb-4 border-b border-white/10">
                                            <h2 className="text-2xl font-bold text-[#ff486f] tracking-tight">
                                                {t.modalTitle}
                                            </h2>
                                            <p className="text-sm text-gray-400 mt-1">
                                                {t.modalDesc}
                                            </p>
                                        </div>

                                        <EstimateWizard
                                            onFinish={() => {
                                                setShowModal(false);
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </section>

                {/* ✅ FAQ Section */}
                <section className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start bg-[#f9f9f9] text-[#111113] px-4 sm:px-6 py-20">
                    <motion.div
                        className="container mx-auto text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-black mb-3 text-[#111113]">
                            {t.faqTitle}
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg">
                            {t.faqDesc}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 container mx-auto max-w-6xl">
                        {Array.isArray(t.faq) &&
                            t.faq.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="group p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 hover:shadow-[0_0_15px_rgba(255,72,111,0.15)] hover:border-[#ff486f40] transition-all duration-300"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    <h4 className="font-semibold text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#ff486f] transition-colors">
                                        {faq.q}
                                    </h4>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                    </div>
                </section>

                <footer className="hidden md:block snap-start h-auto min-h-[40vh]">
                    <Footer />
                </footer>

                {/* ✅ Floating Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowModal(true)}
                    className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-[#ff486f] text-white font-bold rounded-full shadow-[0_0_25px_#ff486f70] hover:shadow-[0_0_40px_#ff486fb0] transition-all duration-300 flex items-center gap-2"
                >
                    {t.quickQuote}
                </motion.button>
            </div>
        </>
    );
}