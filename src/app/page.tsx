"use client";

import { questions } from "@/data/question";
import { useState } from "react";
import { QuestionItem } from "./components/QuestionItem";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Quiz do Sport Club International";

  const handleAnswered = (answer: number) => {};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black border border-gray-300 ">
        <div className="p-5 font-bold text-2xl border border-gray-300">
          {title}
        </div>
        <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {currentQuestion + 1} de {questions.length} pergunta
          {questions.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
};

export default Page;
