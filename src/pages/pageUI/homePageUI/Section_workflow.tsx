// Icons
import WorkflowImage from "@/assets/workflow.png";
// Images
import accessIcon from "@/assets/icons/acessIcon.png";
import continuesIcon from "@/assets/icons/continuousIcon.png";
import developerIcon from "@/assets/icons/developerBorderICon.png";

const Section_workflow = () => {
  return (
    <div className="customContainer">
      <div className="mt-24 text-center">
        <h2 className="text-[40px] mb-[20px] bg-gradient-to-r from-white to-white-0 bg-clip-text text-transparent font-semibold">
          Supercharge your{" "}
          <span className="font-instrument_serif italic font-normal">
            workflow.
          </span>
        </h2>
        <p className="text-base leading-6 font-normal w-[851px] text-[#D9D9D9] m-auto">
          Stay ahead of the competition by quickly identifying trends and
          patterns in your data with our innovative algorithms.
        </p>
        <div className="mt-16 flex justify-center">
          <img src={WorkflowImage} alt="workflowImage" />
        </div>
        <div className="flex items-center justify-between gap-[20px]">
          <div></div>
        </div>
      </div>

      <div className="flex items-center gap-[20px] mt-16">
        <div className="bg-[#131315] border border-[#4E4E64] rounded-[20px] p-5">
          <div>
            <img src={accessIcon} alt="accessIcon" />
          </div>
          <p className="mt-5 text-white text-base font-semibold">
            Access to Advanced Tools
          </p>
          <p className="mt-[10px] text-[#919191] text-sm font-medium">
            Utilize our state-of-the-art AI programming assistant and other
            powerful development tools to enhance your coding projects.
          </p>
        </div>

        <div className="bg-[#131315] border border-[#4E4E64] rounded-[20px] p-5">
          <div>
            <img src={continuesIcon} alt="accessIcon" />
          </div>
          <p className="mt-5 text-white text-base font-semibold">
            Collaborative Environment
          </p>
          <p className="mt-[10px] text-[#919191] text-sm font-medium">
            Work alongside a vibrant community of developers, share insights,
            and collaborate on innovative projects.
          </p>
        </div>

        <div className="bg-[#131315] border border-[#4E4E64] rounded-[20px] p-5">
          <div>
            <img src={developerIcon} alt="accessIcon" />
          </div>
          <p className="mt-5 text-white text-base font-semibold">
            Continuous Learning
          </p>
          <p className="mt-[10px] text-[#919191] text-sm font-medium">
            Stay ahead of the curve with access to the latest resources,
            tutorials, and best practices in AI and software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_workflow;
