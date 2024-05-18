"use client";
import { AuroraBackground } from "../ui/aurora-background.tsx/AuroraBackground";
import { FlipWords } from "../ui/aurora-background.tsx/flip-words";

const Homepage = () => {
  const words = ["Possible", "Impactful", "Sustainable"];
  return (
    <>
      <AuroraBackground>
        <div className="flex md:flex-col w-full md:max-w-[60vw] mx-auto">
          <div className="space-y-5">
            <span className="text-white text-5xl font-semibold">
              {/* Revolutionizing Charity: <br /> */}
              Building Trust &<br /> Loyalty with Blockchain
              <FlipWords words={words} />
            </span>
            <p className="text-white">
              Secure and Transparent Giving: Empowering You to Make a Positive
              Impact
            </p>
          </div>

          <div>
            <button className="border border-white py-2 px-5 text-white hover:bg-white
             rounded-full">
              Log In
            </button>
          </div>

          <div>{/* <Image src={heroSectionImage} alt="" /> */}</div>
        </div>
      </AuroraBackground>
    </>
  );
};

export default Homepage;
