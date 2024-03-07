import React, { useState, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CryptoCaard from "../components/CryptoCaard";
import Overview from "../components/multipleTabs/Overview";
// import Fundamentals from "../components/multipleTabs/Fundamentals";
// import NewsInsights from "../components/multipleTabs/NewsInsights";
// import Technicals from "../components/multipleTabs/Technicals";
import Sentiments from "../components/multipleTabs/Sentiments";
import Team from "../components/multipleTabs/Team";
import Tokenomics from "../components/multipleTabs/Tokenomics";
import YouMayLike from "../components/YouMayLike";
import RightSection from "../components/RightSection";

const Home = () => {
  const [tab, setTab] = useState("overview");

  const overviewRef = useRef();
  const fundamentalsRef = useRef();
  const newsRef = useRef();
  const sentimentsRef = useRef();
  const teamRef = useRef();
  const technicalsRef = useRef();
  const tokenomiesRef = useRef();

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row px-2 lg:px-12 bg-gray-100 pb-8 relative sm:overflow-x-hidden">
        {/* Left div  */}
        <div className="lg:w-3/4 sm:w-full mr-3 ml-3 my-5"> {/* relative*/}
          <div className="text-sm text-gray-500 flex items-center">
            Cryptocurrencies{" "}
            <MdKeyboardDoubleArrowRight className="mx-2 my-1" />
            <span className="text-black font-semibold text-sm">Bitcoin</span>
          </div>

          {/* Crypto Details Card */}
          <div className="mt-5">
            <CryptoCaard />
          </div>

          {/* Muliple Navigation Div */}
          <div className="pointer">
            <div className="mt-[50px] border-b border-solid border-[#0066ff34] overflow-x scrollbar-hidden">
              <button
                className={` ${
                  tab === "overview" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("overview");
                  scrollToComponent(overviewRef);
                }}
              >
                Overview
              </button>
              <button
                className={` ${
                  tab === "fundamentals" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("fundamentals");
                  scrollToComponent(fundamentalsRef);
                }}
              >
                Fundamentals
              </button>
              <button
                className={` ${
                  tab === "news" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("news");
                  scrollToComponent(newsRef);
                }}
              >
                News Insights
              </button>
              <button
                className={` ${
                  tab === "sentiments" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("sentiments");
                  scrollToComponent(sentimentsRef);
                }}
              >
                Sentiments
              </button>
              <button
                className={` ${
                  tab === "team" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("team");
                  scrollToComponent(teamRef);
                }}
              >
                Team
              </button>
              <button
                className={` ${
                  tab === "technicals" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("technicals");
                  scrollToComponent(technicalsRef);
                }}
              >
                Technicals
              </button>
              <button
                className={` ${
                  tab === "tokenomics" &&
                  "border-b border-solid border-blue-800 text-blue-800 font-bold"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                onClick={() => {
                  setTab("tokenomics");
                  scrollToComponent(tokenomiesRef);
                }}
              >
                Tokenomics
              </button>
            </div>

            <Overview ref={overviewRef} />
            {/* <Fundamentals ref={fundamentalsRef} /> */}
            {/* <NewsInsights ref={newsRef} /> */}
            <Sentiments ref={sentimentsRef} />
            <Tokenomics ref={tokenomiesRef} />
            <Team ref={teamRef} />
            {/* <Technicals ref={technicalsRef} /> */}
          </div>
        </div>

        {/* Right div  */}
        <div className="lg:w-1/4 my-5 lg:ml-0 sm:w-full"> {/* sticky top-0 bottom-0 right-0 float-right*/}
          <RightSection />
        </div>
      </div>

      <div className="w-full">
        <YouMayLike />
      </div>
    </>
  );
};

export default Home;
