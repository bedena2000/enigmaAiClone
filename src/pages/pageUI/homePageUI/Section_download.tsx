import rightArrowIcon from "@/assets/icons/rightArrow.png";

const Section_download = () => {
  return (
    <div className="customContainer">
      <div className="text-center mt-[163px]">
        <p className="font-semibold font-white leading-[36.31px] text-3xl">Ready for take-off?</p>
        <p className="mt-6 text-[#D9D9D9] text-lg font-medium w-[520px] m-auto">
          Download the Enigma app and start taking your productivity to new
          heights.
        </p>
        <button className="flex items-center gap-[12px] px-5 py-[10px] border border-white/70 rounded-[20px] m-auto mt-6">
          <p className="text-base text-white font-medium leading-6">Download on Mac</p>
          <img src={rightArrowIcon} alt="rightArrowIcon" />
        </button>
      </div>
    </div>
  );
};

export default Section_download;
