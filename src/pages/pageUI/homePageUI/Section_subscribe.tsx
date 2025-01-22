import SubscribeForm from "./SubscribeForm";

// Icons
import rightArrowIconSmall from "@/assets/icons/right_arrow_small.svg";

const Section_subscribe = () => {
  const listOfIncluded = [
    "Everything in Free",
    "More than 1000 Extensions",
    "Custom Extensions",
    "Developer Tools",
  ];

  const secondSubscribeListOfIncluded = [
    "Everything in Free",
    "Unlimited Shared Commands",
    "Unlimited Shared Quicklinks",
    "Unlimited Team Members",
  ];

  const thirdSubscribeListOfIncluded = [
    "Everything in Free",
    "Enigma AI",
    "Cloud Sync",
    "Custom Themes",
    "More than 1000 Extensions",
    "Custom Extensions",
    "Developer Tools",
  ];

  const customJSXElement = (
    <div className="flex items-center justify-between border border-white/10 p-[10px] rounded-[20px]">
      <div className="flex items-center gap-[9px]">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="hidden peer" />
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center peer-checked:bg-blue-600 peer-checked:ring peer-checked:ring-blue-300 transition">
            <svg
              className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </label>

        <p className="text-base text-white font-normal leading-[24px]">
          Include GPT-4
        </p>
      </div>
      <div className="leading-[20px] text-white/60 text-sm font-medium">
        + $8 / month
      </div>
    </div>
  );

  return (
    <div className="customContainer">
      <div className="mt-[154px]">
        <div className="text-center">
          <h2 className="text-[40px] mb-[20px] bg-gradient-to-r from-white to-white-0 bg-clip-text text-transparent font-semibold">
            Choose the Plan That’s Right{" "}
            <span className="font-instrument_serif italic font-normal">
              for You
            </span>
          </h2>
          <p className="text-base leading-6 font-normal w-[851px] text-[#D9D9D9] m-auto">
            The core of Enigma is free, including more than 1000 extensions.
            Purchase the Pro Plan to unlock a new level of productivity with AI,
            Cloud Sync and much more!
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block mt-[61px] items-center bg-white/10 p-[10px] rounded-[20px]">
            <div className="text-white text-base font-normal py-[5px] px-[32px] bg-white/20 rounded-[20px] cursor-pointer float-left">
              Monthly
            </div>

            <div className="text-white text-base font-normal py-[5px] px-[32px] cursor-pointer  rounded-[20px] float-right">
              Yearly
            </div>
          </div>
        </div>

        <div className="mt-[20px] flex items-center">
          <SubscribeForm
            title="Free"
            description="Everything you need to supercharge your productivity."
            price="0"
            listOfIncludes={listOfIncluded}
            buttonText="Download Now"
            classNames="basis-1/2"
          />
          <SubscribeForm
            title="Pro"
            description="Unlock a new level of your personal productivity."
            price="8"
            listOfIncludes={thirdSubscribeListOfIncluded}
            buttonText="Upgrade Now"
            discount="20"
            classNames="border border-[3px] basis-1/2"
            customJSX={customJSXElement}
          />
          <SubscribeForm
            title="Team"
            description="Everything you need to supercharge your productivity."
            price="10"
            listOfIncludes={secondSubscribeListOfIncluded}
            buttonText="Upgrade Now"
            discount="20"
            classNames="basis-1/2"
          />
        </div>

        <div className="text-center">
          <div className="items-center bg-white/10 p-[12px] rounded-lg border border-white/10 inline-block mt-[52px]">
            <p className="text-[#B5B5B5] font-medium leading-[20px] text-sm float-left mr-2">
              Want enterprise features?
            </p>
            <div className="flex items-center gap-[6px] float-right cursor-pointer">
              <p className="text-white font-medium text-sm leading-[20px]">
                Tell us more
              </p>
              <img src={rightArrowIconSmall} alt="rightArrowIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_subscribe;
