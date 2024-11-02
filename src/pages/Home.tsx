import { ReactTyped } from "react-typed";
import RightArrowIcon from "@/assets/icons/rightArrow.png";
import CodeEditor from "@/assets/codeEditor.png";

export default function Home() {
  return (
    <div className="relative text-white overflow-hidden min-h-screen">
      <section className="customContainer mt-[112px] mb-[64px] flex items-center gap-[38px] ">
        <div className="w-[468px] mt-[228px]">
          <div className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent text-5xl font-bold mb-5">
            <ReactTyped
              strings={["Unlock Your Coding Potential with Enigma Code-ai"]}
              typeSpeed={40}
              backSpeed={50}
            />
          </div>
          <p className="text-[#D9D9D9] text-base mb-5 font-medium">
            Learn coding and design with Enigma-AI, your ultimate destination
            for mastering the art of creating stunning designs and building
            powerful applications.
          </p>
          <div className="mt-5 flex items-center gap-5">
            <button className="flex items-center gap-2 px-3 py-[6px] rounded-lg font-bold text-white bg-[conic-gradient(from_179.42deg_at_47.87%_-110.87%,_#1ADBE3_-25.84deg,_#7001D3_0.27deg,_#FE6272_22.53deg,_#BD38FF_127.5deg,_#1752CA_196.87deg,_#1ADBE3_334.16deg,_#7001D3_360.27deg)] backdrop-blur-lg">
              Get Started
            </button>
            <button className="px-3 py-[6px] rounded-lg text-white backdrop-blur-[20px] shadow-[0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D] border border-transparent flex items-center gap-2 border-sky-500">
              <p>Start a Free Trial</p>
              <img src={RightArrowIcon} alt="rightArrowIcon" />
            </button>

            <button className="flex items-center gap-2"></button>
          </div>
        </div>

        <div className="absolute top-[141px] right-0 scale-125">
          <img
            src={CodeEditor}
            alt="mainCodeEditorPicture"
            className="shadow-md rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
