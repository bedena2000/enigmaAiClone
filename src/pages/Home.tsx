import { ReactTyped } from "react-typed";
import RightArrowIcon from "@/assets/icons/rightArrow.png";
import CodeEditor from "@/assets/codeEditor.png";

// SubPages
import Section_trusted from "./pageUI/homePageUI/Section_trusted";
import Section_development from "./pageUI/homePageUI/Section_development";
import Section_workflow from "./pageUI/homePageUI/Section_workflow";
import Section_subscribe from "./pageUI/homePageUI/Section_subscribe";
import Section_questions from "./pageUI/homePageUI/Section_questions";
import Section_download from "./pageUI/homePageUI/Section_download";
import Section_subscribe_by_email from "./pageUI/homePageUI/Section_subscribe_by_email";
import Footer from "./pageUI/shared/Footer";

export default function Home() {
  return (
    <div className="relative text-white overflow-hidden min-h-screen mt-[112px]">
      <section className="customContainer mb-[64px] flex items-center gap-[38px]">
        <div className="w-[468px]">
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
            <button className="flex items-center gap-2 px-3 py-[6px] rounded-lg font-bold text-white bg-conic-gradient border-[1px] border-white">
              Get Started
            </button>

            <button
              className="flex items-center gap-2 px-3 py-[6px] rounded-lg"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.7)", // Basic border
                borderImageSource:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), linear-gradient(35.22deg, rgba(255, 255, 255, 0) 33.61%, #FFFFFF 89.19%)", // Gradient border
                backdropFilter: "blur(20px)", // Backdrop blur filter
                boxShadow: `
                  0px 10px 10px 0px rgba(0, 0, 0, 0.1), 
                  0px 4px 4px 0px rgba(0, 0, 0, 0.05), 
                  0px 1px 0px 0px rgba(0, 0, 0, 0.05)`, // Multiple box shadows
              }}
            >
              <p>Start a Free Trial</p>
              <img src={RightArrowIcon} alt="rightArrowIcon" />
            </button>

            <button className="flex items-center gap-2"></button>
          </div>
        </div>

        <div>
          <img
            src={CodeEditor}
            alt="mainCodeEditorPicture"
            className="shadow-md rounded-lg"
          />
        </div>
      </section>


      <Section_trusted />
      <Section_development />
      <Section_workflow />
      <Section_subscribe />
      <Section_questions />
      <Section_download />
      <Section_subscribe_by_email />
      
      <Footer />

    </div>
  );
}
