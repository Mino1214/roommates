import { motion } from "framer-motion";
import { useState } from "react";

export default function EstimateWizard({ onFinish }: { onFinish: () => void }) {
    const questions = [
        {
            id: 1,
            question: "어떤 유형의 프로젝트인가요?",
            type: "select",
            options: ["웹 서비스", "모바일 앱", "AI/챗봇", "기타"],
        },
        {
            id: 2,
            question: "스타트업이신가요?",
            type: "select",
            options: ["네, 스타트업입니다", "아니요, 개인/기업이에요"],
        },
        {
            id: 3,
            question: "개발 기간은 어떻게 예상하시나요?",
            type: "select",
            options: ["2주 이내", "1개월 이내", "1~2개월", "잘 모르겠어요"],
        },
        {
            id: 4,
            question: "예상 예산은 얼마인가요?",
            type: "select",
            options: ["300만 원 미만", "300~700만 원", "700~1500만 원", "1500만 원 이상"],
        },
        {
            id: 5,
            question: "마지막으로, 연락 가능한 이메일 또는 전화번호를 알려주세요.",
            type: "input",
            placeholder: "예: min55555kim@gmail.com / 010-0000-0000",
        },
    ];

    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelect = (answer: string) => {
        setAnswers((prev) => ({ ...prev, [step]: answer }));
        if (step < questions.length - 1) setStep(step + 1);
        else setIsSubmitted(true);
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-[#111113] px-6 text-center">
            <motion.div
                key={isSubmitted ? "submitted" : step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-lg bg-white rounded-2xl p-8"
            >
                {/* ✅ 제출 완료 화면 */}
                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <h2 className="text-2xl font-extrabold text-[#ff486f] mb-2">
                            견적 요청이 완료되었습니다 💡
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            빠른 시일 내에 담당자가 남겨주신 연락처로<br />
                            프로젝트 상담 전화를 드릴 예정입니다.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onFinish}
                            className="mt-4 px-6 py-3 bg-[#ff486f] text-white font-bold rounded-full shadow-md hover:shadow-[#ff486f]/40 transition-all duration-300"
                        >
                            확인
                        </motion.button>
                    </div>
                ) : (
                    <>
                        {/* 질문 */}
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#ff486f]">
                            {questions[step].question}
                        </h2>

                        {/* 선택형 질문 */}
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

                        {/* 입력형 질문 */}
                        {questions[step].type === "input" && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const value = (e.target as any).elements[0].value;
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

                        {/* 🔙 카드 내부 하단 고정 이전 버튼 */}
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