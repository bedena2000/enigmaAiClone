const Section_subscribe_by_email = () => {
  return (
    <div className="customContainer">
      <div className="flex items-center justify-between mt-[175px]">
        <div className="w-[460px]">
          <p className="text-white text-base leading-6 font-normal">
            Subscribe to our newsletter
          </p>
          <p className="mt-[9.5px] text-[#919191] leading-5 text-sm font-medium">
            Get a summary of what we’ve shipped during the last month, behind
            the scenes updates, and team picks.
          </p>
        </div>

        <div className="w-[488px]">
          <div className="flex items-center justify-between gap-5">
            <input className="bg-[#120E19] w-full px-[17px] py-[14px] text-[#737373] leading-[16.94px] font-normal text-sm" type="text" placeholder="email@email.co" />
            <button className="text-white font-medium leading-6 text-base border border-white/10 px-[20px] py-[10px] rounded-[20px]">
              Subscribe
            </button>
          </div>
          <p className="text-[#919191] leading-5 text-sm font-medium mt-[14px]">
            By submitting your email address, you agree to receive Enigma
            monthly newsletter. For more information, please read our privacy
            policy. You can always withdraw your consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_subscribe_by_email;
