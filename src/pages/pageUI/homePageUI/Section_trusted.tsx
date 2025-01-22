// Logos
import amazonLogo from "@/assets/icons/amazon.png";
import appleLogo from "@/assets/icons/apple.png";
import youtubeLogo from "@/assets/icons/youtube.png";
import figmaLogo from "@/assets/icons/Figma.png";
import googleLogo from "@/assets/google.png";
import xLogo from "@/assets/icons/twitter.png";
import vercelLogo from "@/assets/icons/vercel.png";
import airbnbLogo from "@/assets/icons/airbnb.png";

const Section_trusted = () => {
  return (
    <section id="trusted" className="customContainer">
      <div className="mt-16">
        <p className="text-white/70 text-2xl text-center font-medium mb-5">
          Trusted By Industry Leaders
        </p>
        <div className="grid grid-rows-2 grid-cols-4 gap-4">
          <div className="flex justify-center items-center">
            <img src={amazonLogo} alt="amazonLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={appleLogo} alt="appleLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={youtubeLogo} alt="youtubeLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={figmaLogo} alt="figmaLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={googleLogo} alt="googleLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={xLogo} alt="xLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
          <div className="flex justify-center items-center">
            <img src={airbnbLogo} alt="airbnbLogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_trusted;
