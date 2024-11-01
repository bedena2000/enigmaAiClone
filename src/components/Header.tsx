import UnionIcon from "@/assets/icons/Union.png";
import FeaturesIcon from "@/assets/icons/featuresIcon.svg";
import ProIcon from "@/assets/icons/proIcon.svg";
import DeveloperIcon from "@/assets/icons/developerIcon.svg";
import PagesIcon from "@/assets/icons/pagesIcon.svg";
import UpdatedBookIcon from "@/assets/updatedBookIcon.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between customContainer">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={UnionIcon} alt="MainIcon" />
          <h2 className="text-3xl text-white">Enigma-AI</h2>
        </div>
      </Link>

      <div className="flex items-center px-3 py-2 rounded-full bg-white bg-opacity-25 backdrop-blur-lg gap-4 shadow-md border border-slate-400">
        <Link
          to="/extension"
          className="flex items-center gap-2 text-white cursor-pointer transition-all delay-75 ease-in hover:bg-slate-600 hover:rounded-full p-2"
        >
          <img src={UpdatedBookIcon} alt="ExtensionIcon" />
          <p className="font-medium text-sm">Extension</p>
        </Link>
        <Link
          to="/features"
          className="flex items-center gap-2 text-white cursor-pointer transition-all delay-75 ease-in hover:bg-slate-600 hover:rounded-full p-2"
        >
          <img src={FeaturesIcon} alt="FeaturesIcon" />
          <p className="font-medium text-sm">Features</p>
        </Link>
        <Link
          to="/pro"
          className="flex items-center gap-2 text-white cursor-pointer transition-all delay-75 ease-in hover:bg-slate-600 hover:rounded-full p-2 relative pr-12"
        >
          <img src={ProIcon} alt="ProIcon" />
          <p className="font-medium text-sm">Pro</p>

          <div className="bg-[#1E1F1F] px-1 rounded-full absolute right-2">
            <p className="text-white text-sm">New</p>
          </div>
        </Link>
        <Link
          to="/developer"
          className="flex items-center gap-2 text-white cursor-pointer transition-all delay-75 ease-in hover:bg-slate-600 hover:rounded-full p-2"
        >
          <img src={DeveloperIcon} alt="DeveloperIcon" />
          <p className="font-medium text-sm">Developer</p>
        </Link>
        <Link
          to="/pages"
          className="flex items-center gap-2 text-white cursor-pointer transition-all delay-75 ease-in hover:bg-slate-600 hover:rounded-full p-2"
        >
          <img src={PagesIcon} alt="PagesIcon" />
          <p className="font-medium text-sm">Pages</p>
        </Link>
      </div>

      <Link
        className="px-5 py-1 border-2 rounded-full bg-transparent shadow-md border-gray-600"
        to="/download"
      >
        <p className="text-white font-bold text-base">Download App</p>
      </Link>
    </header>
  );
}
