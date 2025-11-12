import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import Footer from "../components/layout/Footer.tsx";

export default function Contact() {
    const userLang =
        typeof navigator !== "undefined"
            ? navigator.language || (navigator.languages && navigator.languages[0]) || "ko"
            : "ko";
    const lang = userLang.startsWith("en") ? "en" : "ko";

    const t = {
        ko: {
            metaTitle: "연락하기 | ROOMMATES Studio",
            metaDesc: "프로젝트 상담/견적 문의 — 빠르게 답변드립니다.",
            heroTitle: "Contact Us",
            heroDesc: "문의 내용을 남겨주시면 빠르게 답변드리겠습니다.",
            formTitle: "문의하기",
            nameLabel: "성명 *",
            emailLabel: "이메일 *",
            affiliation: "소속 (회사/팀)",
            position: "직책/직무",
            subject: "문의 유형 *",
            message: "메시지 *",
            send: "문의하기",
            subjectOptions: {
                default: "선택해주세요",
                estimate: "견적 문의",
                portfolio: "Portfolio 관련 문의",
                partnership: "파트너십 제안",
                other: "기타",
            },
            successTitle: "메시지가 전송되었습니다!",
            successDesc: "빠른 시간 내에 연락드리겠습니다.",
            namePlaceholder: "이름을 입력하세요",
            emailPlaceholder: "이메일을 입력하세요",
            messagePlaceholder: "문의하실 내용을 입력하세요",
        },
        en: {
            metaTitle: "Contact | ROOMMATES Studio",
            metaDesc: "Project inquiries & estimates — We respond quickly.",
            heroTitle: "Contact Us",
            heroDesc: "Leave your inquiry below, and we’ll get back to you soon.",
            formTitle: "Get in Touch",
            nameLabel: "Name *",
            emailLabel: "Email *",
            affiliation: "Affiliation (Company/Team)",
            position: "Position/Role",
            subject: "Subject *",
            message: "Message *",
            send: "Send Message",
            subjectOptions: {
                default: "Select an option",
                estimate: "Estimate Request",
                portfolio: "Portfolio Inquiry",
                partnership: "Partnership Proposal",
                other: "Other",
            },
            successTitle: "Message Sent!",
            successDesc: "We’ll get back to you as soon as possible.",
            namePlaceholder: "Enter your name",
            emailPlaceholder: "Enter your email",
            messagePlaceholder: "Type your message here",
        },
    }[lang];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        affiliation: "",
        position: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // ✅ EmailJS 메일 전송 함수
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.send(
                "service_v821ez9", // ✅ EmailJS에서 받은 Service ID
                "template_c3sy8ih", // ✅ EmailJS 템플릿 ID (언니가 만든 거)
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: `
소속: ${formData.affiliation}
직책: ${formData.position}

내용:
${formData.message}
                    `,
                },
                "weModHwXCGEGl3-9k" // ✅ EmailJS 퍼블릭 키
            );

            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 4000);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                affiliation: "",
                position: "",
            });
        } catch (error) {
            console.error("❌ 메일 전송 실패:", error);
            alert("메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <Helmet>
                <title>{t.metaTitle}</title>
                <meta name="description" content={t.metaDesc} />
            </Helmet>

            <div className="min-h-screen bg-white text-gray-900">
                <section className="text-center py-20 bg-gray-50 border-b border-gray-200">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <h1 className="text-4xl md:text-6xl font-black text-[#ff486f] mb-4">{t.heroTitle}</h1>
                        <p className="text-lg md:text-xl text-gray-600">{t.heroDesc}</p>
                    </motion.div>
                </section>

                <motion.div
                    className="max-w-3xl mx-auto py-20 px-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.formTitle}</h2>

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
                                <h3 className="font-semibold text-[#ff486f] text-lg">{t.successTitle}</h3>
                                <p className="text-gray-600">{t.successDesc}</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            {t.nameLabel}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff486f]"
                                            placeholder={t.namePlaceholder}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            {t.emailLabel}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff486f]"
                                            placeholder={t.emailPlaceholder}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="affiliation"
                                        value={formData.affiliation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff486f]"
                                        placeholder={t.affiliation}
                                    />
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff486f]"
                                        placeholder={t.position}
                                    />
                                </div>

                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff486f]"
                                >
                                    <option value="">{t.subjectOptions.default}</option>
                                    <option value="estimate">{t.subjectOptions.estimate}</option>
                                    <option value="portfolio">{t.subjectOptions.portfolio}</option>
                                    <option value="partnership">{t.subjectOptions.partnership}</option>
                                    <option value="other">{t.subjectOptions.other}</option>
                                </select>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff486f] resize-none"
                                    placeholder={t.messagePlaceholder}
                                />

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#ff486f] text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>{t.send}</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>

                <footer className="hidden md:block snap-start h-auto min-h-[40vh]">
                    <Footer />
                </footer>
            </div>
        </>
    );
}