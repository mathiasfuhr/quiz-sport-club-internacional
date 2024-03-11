import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectAnswer === null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };

  return (
    <div>
      <div className="text-3x6 font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((item, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`border px-3 py-2 rounded-md text-lg mb-4  bg-yellow-200 border-yellow-400 

            ${
              selectAnswer !== null
                ? "cursor-auto"
                : "cursor-pointer hover:opacity-60"
            }
            ${
              selectAnswer !== null &&
              selectAnswer === question.answer &&
              selectAnswer === key &&
              "bg-green-300 border-green-500"
            }
            ${
              selectAnswer !== null &&
              selectAnswer !== question.answer &&
              selectAnswer === key &&
              "bg-red-300 border-red-500"
            }


            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
