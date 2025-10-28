import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet-async";

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
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <div className="p-8 rounded-xl bg-white shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">문의하기</h2>

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
                                    <span className="text-sm font-medium text-gray-900">소속 정보 <span className="text-gray-400">(선택 사항)</span></span>
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
                                <Send size={20} />
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>

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
                            q: "Roomi Studio는 어떤 서비스를 제공하나요?",
                            a: "아이디어만 있어도 시작할 수 있는 MVP 개발 전문 서비스입니다. 웹, 앱, AI 등 빠르게 실행 가능한 프로토타입을 제작해드립니다.",
                        },
                        {
                            q: "상담은 어떻게 진행되나요?",
                            a: "‘빠른 견적 받기’ 버튼을 눌러 간단히 정보를 남겨주시면, 담당자가 1영업일 내로 직접 연락드립니다.",
                        },
                        {
                            q: "견적은 무료인가요?",
                            a: "네, 무료로 상담과 견적을 제공합니다. 프로젝트 방향이 확정되기 전까지는 어떠한 비용도 발생하지 않습니다.",
                        },
                        {
                            q: "개발 기간은 얼마나 걸리나요?",
                            a: "일반적인 MVP 기준으로 약 2~4주 내 완성됩니다. 기능 복잡도에 따라 조정이 가능하며, 주 단위로 진행 상황을 공유합니다.",
                        },
                        {
                            q: "디자인까지 포함되나요?",
                            a: "네, 기획·디자인·개발까지 모두 포함된 올인원 패키지를 제공합니다. 디자인만 별도로 진행하는 것도 가능합니다.",
                        },
                        {
                            q: "런칭 후 유지보수는 어떻게 되나요?",
                            a: "배포 후 6개월간 무료 버그 수정 및 안정화 지원을 제공합니다. 이후에도 정기 유지보수 또는 개선 계약이 가능합니다.",
                        },
                        {
                            q: "기존에 진행하던 프로젝트를 이어서 맡길 수 있나요?",
                            a: "네, 가능합니다. 기존 소스코드나 디자인 시안을 검토 후, 이어받아 빠르게 진행할 수 있습니다.",
                        },
                        {
                            q: "계약은 어떤 방식으로 진행되나요?",
                            a: "상담 후 확정 견적서를 발행하고, 계약서를 전자 서명으로 체결합니다. 이후 바로 개발이 시작됩니다.",
                        },
                        {
                            q: "비용은 어느 정도인가요?",
                            a: "간단한 MVP는 200만 원대부터 시작하며, 요구 기능에 따라 유연하게 맞춤 견적을 드립니다.",
                        },
                        {
                            q: "긴급 프로젝트도 가능한가요?",
                            a: "네. 개발팀의 일정에 따라 최대한 빠르게 착수할 수 있습니다. 평균적으로 24시간 내 착수 여부를 안내드립니다.",
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
        </>
    );
}