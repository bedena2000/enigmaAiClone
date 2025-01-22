import React, { useState } from "react";

// Icons
import boxArrow from "@/assets/icons/bottom_arrow_icon.svg";

interface QuestionBoxProps {
  question: string;
  answer: string;
}

const QuestionBox = ({ question, answer }: QuestionBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsActive(!isActive)}
      className={`border-b border-white/10 p-5 cursor-pointer ${
        isHovered ? "bg-[#1c1c1c]" : "bg-[#05010D]"
      }`}
    >
      {/* Show */}
      <div className="flex items-center justify-between">
        <p className="text-white leading-[24px] text-base font-bold">
          {question}
        </p>
        <div>
          <img
            className={`transition-all duration-500  ${
              isActive ? "rotate-180" : ""
            }`}
            src={boxArrow}
            alt="boxArrowIcon"
          />
        </div>
      </div>
      {/* Hidden */}
      <div
        className={`mt-5 overflow-hidden transition-all duration-500 ease-in-out ${
          isActive
            ? "opacity-100 max-h-[500px] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-2"
        }`}
      >
        <p className="text-[#919191] font-medium text-sm leading-[20px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionBox;
