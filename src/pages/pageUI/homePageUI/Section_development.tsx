// Images
import IntelligenceImage from "@/assets/intelligentCodeTop.png";
import RealTimeImage from "@/assets/realTime.png";
import SeamlessImage from "@/assets/seamless.png";
import OptimizationImage from "@/assets/optimization.png";
// Icons
import IntelligenceIcon from "@/assets/icons/intelligentIcon.png";
import DescriptionBlock from "../shared/DescriptionBlock";
import RealTimeIcon from "@/assets/icons/realTimeIcon.png";
import SeamlessIcon from "@/assets/icons/simlessIcon.png";
import OptimizationIcon from "@/assets/icons/developerIcon.png";

const Section_development = () => {
  return (
    <div className="customContainer">
      <div className="mt-48">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl bg-gradient-to-r from-white to-white-0 bg-clip-text text-transparent">
            Features That Empower Your{" "}
            <span className="font-instrument_serif italic">Development</span>
          </h2>
          <p className="text-[#D9D9D9] text-base font-normal w-[1012px]">
            Our suite of features is designed to enhance every aspect of your
            development process. From writing code to debugging and optimizing,
            Enigma Code-ai provides you with the tools you need to succeed.
          </p>
        </div>

        <div className="flex gap-2 items-stretch mt-16">
          <div className="bg-[#131315] p-5 border border-[#4E4E6452] rounded-[20px]">
            <div className="flex gap-1">
              <div className="w-[11px] h-[11px] bg-[#FE3838] rounded-full"></div>
              <div className="w-[11px] h-[11px] bg-[#FAEF4A] rounded-full"></div>
              <div className="w-[11px] h-[11px] bg-[#77F38A] rounded-full"></div>
            </div>
            <div className="p-10 mt-6">
              <p className="bg-gradient-to-r from-white to-white-0 bg-clip-text text-transparent text-[40px] font-semibold">
                Enigma Code-ai is your cutting-edge AI-powered programming
                assistant, designed to revolutionize your coding experience.
                Whether you're a seasoned developer or just starting out.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <DescriptionBlock
              image={IntelligenceImage}
              icon={IntelligenceIcon}
              title="Intelligent Code Completion"
              description="Boost your productivity with our advanced code completion that understands your context and suggests the best possible code snippets."
              classNames="pb-[46.62px] pt-[46.62px]"
            />
            <div className="bg-[#131315] w-full h-full border border-[#4E4E6452] rounded-[20px]">
              <div className="flex flex-col overflow-hidden w-full h-full relative">
                <div className="w-[701px] flex gap-2 absolute top-[20px] -left-1/4">
                  <div className="px-2 py-2 border border-white/30 rounded-lg font-medium text-sm text-[#919191]">
                    AI-powered Components
                  </div>
                  <div className="px-2 py-2 border border-white/30 rounded-lg font-medium text-sm  text-[#919191]">
                    Smart Components
                  </div>
                  <div className="px-2 py-2 border border-white/30 rounded-lg font-medium text-sm  text-[#919191]">
                    Innovative Components
                  </div>
                </div>
                <div className="w-[787px] flex gap-2 absolute bottom-[40px] -left-1/4">
                  <div className="px-2 py-2 border border-white/30 rounded-lg font-medium text-sm  text-[#919191]">
                    Intelligent Components
                  </div>
                  <div className="px-2 py-2 border border-white/30 rounded-lg font-medium text-sm  text-[#919191]">
                    Automated Components
                  </div>
                  <div className="px-2 py-2 border border-white/30 rounded-lg font-medium text-sm  text-[#919191]">
                    Automated Components
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[10px] flex justify-between gap-[10px] items-stretch">
          <DescriptionBlock
            image={RealTimeImage}
            icon={RealTimeIcon}
            title="Real-time Debugging"
            description="Identify and fix errors on the fly with our AI-driven debugging tool, ensuring your code runs smoothly."
          />
          <DescriptionBlock
            image={SeamlessImage}
            icon={SeamlessIcon}
            title="Seamless Integration"
            description="Easily integrate Enigma Code-ai into your favorite development environments, including VS Code, PyCharm, and more."
          />
          <DescriptionBlock
            image={OptimizationImage}
            icon={OptimizationIcon}
            title="Optimization Recommendations"
            description="Receive actionable insights on how to improve your code’s efficiency and performance, tailored to your specific project needs."
          />
        </div>
      </div>
    </div>
  );
};

export default Section_development;
