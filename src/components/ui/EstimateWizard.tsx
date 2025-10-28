import { motion } from "framer-motion";
import {  useState } from "react";

export default function EstimateWizard({ onFinish }: { onFinish: () => void }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const questions = [
        { id: 1, question: "어떤 유형의 프로젝트인가요?", type: "select", options: ["웹 서비스", "모바일 앱", "AI/챗봇", "기타"] },
        { id: 2, question: "스타트업이신가요?", type: "select", options: ["네, 스타트업입니다", "아니요, 개인/기업이에요"] },
        { id: 3, question: "개발 기간은 어떻게 예상하시나요?", type: "select", options: ["2주 이내", "1개월 이내", "1~2개월", "잘 모르겠어요"] },
        { id: 4, question: "예상 예산은 얼마인가요?", type: "select", options: ["300만 원 미만", "300~700만 원", "700~1500만 원", "1500만 원 이상"] },
        { id: 5, question: "마지막으로, 연락 가능한 이메일 또는 전화번호를 알려주세요.", type: "input", placeholder: "예: min55555kim@gmail.com / 010-0000-0000" },
    ];

    const handleSelect = (answer: string) => {
        setAnswers((prev) => ({ ...prev, [step]: answer }));
        if (step < questions.length - 1) setStep(step + 1);
        else {
            // ✅ 제출 버튼 누르면 로딩 시작
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
            }, 1200);
        }
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-[#111113] px-6 text-center">
            <motion.div
                key={isSubmitted ? "submitted" : isSubmitting ? "loading" : step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-lg bg-white rounded-2xl p-8"
            >
                {/* ✅ 1️⃣ 로딩 화면 */}
                {isSubmitting && (
                    <div className="flex flex-col items-center justify-center space-y-6 py-10">
                        <div
                            className="w-14 h-14 border-4 border-[#ff486f]/30 border-t-[#ff486f] rounded-full animate-spin"
                            style={{
                                animationDuration: "0.9s", // ← 조금 더 빠르게
                            }}
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 font-medium"
                        >
                            견적 요청을 전송 중입니다...
                        </motion.p>
                    </div>
                )}

                {/* ✅ 2️⃣ 제출 완료 화면 */}
                {isSubmitted && (
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <motion.div
                            className="relative w-24 h-24 mb-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 10 }}
                        >
                            <motion.svg
                                viewBox="0 0 52 52"
                                className="absolute top-0 left-0 w-full h-full"
                            >
                                {/* 원형 테두리 */}
                                <motion.circle
                                    cx="26"
                                    cy="26"
                                    r="24"
                                    stroke="#ff486f"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="160"
                                    strokeDashoffset="160"
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                                {/* 체크 표시 */}
                                <motion.path
                                    fill="none"
                                    stroke="#ff486f"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 27l7 7 17-17"
                                    strokeDasharray="48"
                                    strokeDashoffset="48"
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
                                />
                            </motion.svg>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 }}
                            className="text-2xl font-extrabold text-[#ff486f]"
                        >
                            견적 요청이 완료되었습니다.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="text-gray-600 leading-relaxed text-center"
                        >
                            빠른 시일 내에 담당자가 남겨주신 연락처로<br />
                            프로젝트 상담 전화를 드릴 예정입니다.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onFinish}
                            className="mt-4 px-6 py-3 bg-[#ff486f] text-white font-bold rounded-full shadow-md hover:shadow-[#ff486f]/40 transition-all duration-300"
                        >
                            확인
                        </motion.button>
                    </div>
                )}

                {/* ✅ 3️⃣ 일반 질문 화면 */}
                {!isSubmitting && !isSubmitted && (
                    <>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#ff486f]">
                            {questions[step].question}
                        </h2>

                        {questions[step].type === "select" && (
                            <div className="grid grid-cols-1 gap-3 mb-16">
                                {questions[step].options?.map((opt) => {
                                    const isSelected = answers[step] === opt;
                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => handleSelect(opt)}
                                            className={`px-6 py-4 rounded-xl border transition-all font-medium ${
                                                isSelected
                                                    ? "bg-[#ff486f]/20 border-[#ff486f] text-[#ff486f]"
                                                    : "border-[#ff486f]/30 hover:bg-[#ff486f]/10 hover:border-[#ff486f]/50 text-[#111113]"
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {questions[step].type === "input" && (
                            <form
                                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                    e.preventDefault();
                                    const input = e.currentTarget.elements[0] as HTMLInputElement;
                                    const value = input.value.trim();
                                    handleSelect(value);
                                }}
                                className="w-full mb-16"
                            >
                                <input
                                    type="text"
                                    placeholder={questions[step].placeholder}
                                    defaultValue={answers[step] || ""}
                                    className="w-full px-5 py-3 rounded-lg bg-[#ff486f08] border border-transparent
                                        focus:border-transparent focus:ring-2 focus:ring-[#ff486f40]
                                        text-[#111113] placeholder-gray-400 mb-6 outline-none transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-[#ff486f] text-white font-bold rounded-full shadow-md hover:shadow-[#ff486f]/40 transition-all duration-300"
                                >
                                    제출하기 →
                                </button>
                            </form>
                        )}

                        {step > 0 && (
                            <div className="absolute bottom-4 left-0 w-full flex justify-center">
                                <button
                                    onClick={handleBack}
                                    className="text-sm text-[#ff486f] hover:underline transition-all"
                                >
                                    ← 이전으로
                                </button>
                            </div>
                        )}
                    </>
                )}
            </motion.div>
        </div>
    );
}