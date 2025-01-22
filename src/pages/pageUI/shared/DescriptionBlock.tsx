import React from "react";

interface DescriptionBlockProps {
  image: string;
  icon: string;
  title: string;
  description: string;
  classNames?: string;
}
const DescriptionBlock: React.FC<DescriptionBlockProps> = ({
  image,
  icon,
  title,
  description,
  classNames,
}) => {
  return (
    <div
      className={`flex flex-col gap-[20px] bg-[#131315] p-5 border border-[#4E4E6452] rounded-[20px] w-[387px] ${classNames}`}
    >
      <div>
        <img src={image} alt="intelligenceImage" />
      </div>

      <div className="flex gap-3">
        <img className="w-[12px] h-[12px]" src={icon} alt="intelligenceIcon" />
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-base">{title}</p>
          <p className="text-[#919191] font-medium text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
