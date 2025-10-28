import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet-async";
import Footer from "../components/layout/Footer.tsx";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        // ✅ 추가: 선택 사항 필드들
        affiliation: "", // 소속(회사/팀)
        position: "",    // 직책
        isRoommates: false, // 룸메이트(내부) 여부
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // ✅ input/textarea/select/checkbox 모두 처리
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                affiliation: "",
                position: "",
                isRoommates: false,
            });
            setIsSubmitted(false);
        }, 3000);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <><Helmet>
            <title>연락하기 | ROOMMATES Studio</title>
            <link rel="canonical" href="https://roomi.co.kr/contact" />
            <meta name="description" content="프로젝트 상담/견적 문의 — 빠르게 답변드립니다." />
            <meta property="og:title" content="연락하기 | ROOMMATES Studio" />
            <meta property="og:description" content="MVP/웹/앱/AI 개발 문의" />
            <meta property="og:image" content="https://roomfiles.s3.ap-northeast-2.amazonaws.com/uploads/image.png" />
            <meta property="og:url" content="https://roomi.co.kr/contact" />
            <meta name="twitter:card" content="summary_large_image" />
            <script type="application/ld+json">{`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,"name":"홈","item":"https://roomi.co.kr/"},
              {"@type":"ListItem","position":2,"name":"연락하기","item":"https://roomi.co.kr/contact"}
            ]
          }
        `}</script>
        </Helmet>
            <div className="min-h-screen bg-white text-gray-900">
                {/* ✅ Hero Section */}
                <section className="text-center py-20 bg-gray-50 border-b border-gray-200">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-4xl md:text-6xl font-black text-[#ff486f] mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            문의 내용을 남겨주시면 빠르게 답변드리겠습니다.
                        </p>
                    </motion.div>
                </section>

                {/* ✅ Contact Form Only */}
                <motion.div
                    className="max-w-3xl mx-auto py-20 px-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={fadeUp}
                >
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">문의하기</h2>

                        {isSubmitted ? (
                            <motion.div
                                className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5}}
                            >
                                <div
                                    className="w-14 h-14 bg-[#ff486f] rounded-full flex items-center justify-center mx-auto">
                                    <Send className="text-white" size={24}/>
                                </div>
                                <h3 className="font-semibold text-[#ff486f] text-lg">
                                    메시지가 전송되었습니다!
                                </h3>
                                <p className="text-gray-600">빠른 시간 내에 연락드리겠습니다.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* 기본 정보 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                            성명 *
                                        </label>
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
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                            이메일 *
                                        </label>
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

                                {/* 선택 사항: 소속/직책/룸메이트 */}
                                <div className="pt-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-900">소속 정보 <span
                                            className="text-gray-400">(선택 사항)</span></span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="affiliation" className="block text-sm text-gray-700 mb-2">
                                                소속 (회사/팀)
                                            </label>
                                            <input
                                                type="text"
                                                id="affiliation"
                                                name="affiliation"
                                                value={formData.affiliation}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                                placeholder="예: 룸메이트 스튜디오 / Product Team"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="position" className="block text-sm text-gray-700 mb-2">
                                                직책/직무
                                            </label>
                                            <input
                                                type="text"
                                                id="position"
                                                name="position"
                                                value={formData.position}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                                placeholder="예: PM, 백엔드 개발자, 디자이너"
                                            />
                                        </div>
                                    </div>

                                    {/*              <label className="mt-3 inline-flex items-center gap-2 select-none">*/}
                                    {/*                  <input*/}
                                    {/*                      type="checkbox"*/}
                                    {/*                      name="isRoommates"*/}
                                    {/*                      checked={formData.isRoommates}*/}
                                    {/*                      onChange={handleChange}*/}
                                    {/*                      className="h-4 w-4 rounded border-gray-300 text-[#ff486f] focus:ring-[#ff486f]"*/}
                                    {/*                  />*/}
                                    {/*                  <span className="text-sm text-gray-700">*/}
                                    {/*  /!*룸메이트(내부) 문의입니다*!/*/}
                                    {/*</span>*/}
                                    {/*              </label>*/}
                                </div>

                                {/* 문의 유형 */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                                        문의 유형 *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent"
                                    >
                                        <option value="">선택해주세요</option>
                                        <option value="roomi-inquiry">견적 문의</option>
                                        <option value="studio-inquiry">Portfolio 관련 문의</option>
                                        <option value="partnership">파트너십 제안</option>
                                        <option value="other">기타</option>
                                    </select>
                                </div>

                                {/* 메시지 */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                                        메시지 *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff486f] focus:border-transparent resize-none"
                                        placeholder="문의하실 내용을 입력하세요"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#ff486f] text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>문의하기</span>
                                    <Send size={20}/>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>

                {/* ✅ FAQ Section */}

                {/*hidden md:block*/}
                <footer className="hidden md:block snap-start h-auto min-h-[40vh]">
                    <Footer/>
                </footer>
            </div>
        </>
    );
}