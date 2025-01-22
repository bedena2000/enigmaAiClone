import React from "react";

// Icons
import successIcon from "@/assets/icons/tick-circle.png";
import rightArrow from "@/assets/icons/rightArrow.png";

interface SubscribeFormProps {
  title: string;
  description: string;
  price: string;
  discount?: string;
  customJSX?: React.ReactNode;
  listOfIncludes: string[];
  buttonText: string;
  classNames?: string;
}

const SubscribeForm = (props: SubscribeFormProps) => {
  return (
    <div
      className={`bg-[#04071A] inline-block px-[62px] py-[20px] rounded-[20px] text-white ${props.classNames}`}
    >
      <p className="font-medium text-lg">{props.title}</p>
      <p className="text-white/60 mt-6">{props.description}</p>
      <div className="flex items-center gap-2 mt-6">
        <div className="flex items-center gap-2 text-white/60 text-base font-normal">
          <span className="text-white font-semibold text-[40px]">
            ${props.price}
          </span>{" "}
          / month
          {props.discount ? (
            <div className="bg-[#57FEFE] rounded-[24px] px-2 py-[5px]">
              <div className="text-[#110E19] text-xs leading-[14px] font-semibold">
                -{props.discount}%
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-[100%] h-[1px] mt-[35px] mb-[35px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent"></div>
      <div>
        <p className="font-normal text-white/60 text-base">What’s included</p>
        <ul className="mt-[15px] flex flex-col gap-[14px]">
          {props.listOfIncludes
            ? props.listOfIncludes.map((item: string) => (
                <li key={item}>
                  <div className="flex items-center gap-[14px]">
                    <img src={successIcon} alt="successIcon" />
                    <p className="font-normal text-base text-white/60">
                      {item}
                    </p>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>

      {props.customJSX ? (
        <div className="mt-[35px]">{props.customJSX}</div>
      ) : null}

      <div className="mt-[35px] flex items-center justify-center">
        <button className="border rounded-[10px] flex items-center gap-[12px] px-5 py-[10px]">
          <p>{props.buttonText}</p>
          <div>
            <img src={rightArrow} alt="rightArrowIcon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
