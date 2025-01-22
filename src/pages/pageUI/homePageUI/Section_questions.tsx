import bottomArrowIcon from "@/assets/icons/bottomArrowIcon.png";
import QuestionBox from "../shared/QuestionBox";

const Section_questions = () => {
  return (
    <div className="customContainer">
      <div className="flex flex-col gap-4 mt-[154px] text-center">
        <h2 className="text-4xl bg-gradient-to-r from-white to-white-0 bg-clip-text text-transparent w-[466px] m-auto mb-[20px] font-semibold">
          Frequently Asked{" "}
          <span className="font-instrument_serif italic font-normal">
            Questions
          </span>
        </h2>
        <p className="text-[#D9D9D9] text-base font-normal w-[1012px] m-auto">
          Have questions about Enigma Code-ai? Here are some of the most common
          inquiries we receive from our users. If you don’t find the answer
          you’re looking for, feel free to contact us.
        </p>
      </div>

      <div className="mt-16">
        <QuestionBox
          question="What is Enigma Code-ai?"
          answer="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
        <QuestionBox
          question="How do I get started with Enigma Code-ai?"
          answer="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
        <QuestionBox
          question="What programming languages does Enigma Code-ai support?"
          answer="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
        <QuestionBox
          question="Can I use Enigma Code-ai for free?"
          answer="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
        <QuestionBox
          question="How does the AI-powered code completion work?"
          answer="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
        <QuestionBox
          question="What if I need help or have a question?"
          answer="Have questions about Enigma Code-ai? Here are some of the most common inquiries we receive from our users. If you don’t find the answer you’re looking for, feel free to contact us."
        />
      </div>
    </div>
  );
};

export default Section_questions;
