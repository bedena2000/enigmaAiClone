// Icons
import unionIcon from "@/assets/icons/Union.png";
import twitterIcon from "@/assets/icons/twitterIcon.svg";
import githubIcon from "@/assets/icons/githubIcon.svg";
import slackIcon from "@/assets/icons/slackIcon.svg";
// Images
import worldVector from "@/assets/world_vector.png";

const Footer = () => {
  return (
    <div className="customContainer">
      <div className="flex items-stretch justify-between mt-[128px]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-[8px]">
              <img src={unionIcon} alt="UnionIcon" />
              <p className="text-[#919191] font-bold text-sm leading-5">
                Enigma - AI
              </p>
            </div>
            <p className="mt-[10px] text-[#919191] leading-5 text-sm font-medium w-[188px]">
              Unlock Your Coding Potential with Enigma
            </p>
          </div>

          <div className="flex items-center gap-[24px] ">
            <div>
              <img className="cursor-pointer" src={twitterIcon} alt="twitterIcon" />
            </div>
            <div>
              <img className="cursor-pointer" src={githubIcon} alt="githubIcon" />
            </div>
            <div>
              <img className="cursor-pointer" src={slackIcon} alt="slackIconn" />
            </div>
          </div>
        </div>

        <div className="flex gap-[104px]">
          <div className="flex items-center">
            <ul className="flex flex-col gap-[13px]">
              <li className="text-[#D0D6E0] text-sm leading-5 font-medium cursor-pointer">
                Product
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Features
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Extension
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Pro
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Changelog
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Docs
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Download
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-[13px]">
              <li className="text-[#D0D6E0] text-sm leading-5 font-medium cursor-pointer">
                Resources
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                About us
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Blog
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Careers
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Customers
              </li>
              <li className="text-[#919191] font-medium text-sm leading-5 cursor-pointer">
                Brand
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[93px] flex items-center justify-center">
        <img src={worldVector} alt="world_vector" />
      </div>
    </div>
  );
};

export default Footer;
