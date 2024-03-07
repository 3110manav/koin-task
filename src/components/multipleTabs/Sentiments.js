import React, { useRef, forwardRef, useState } from "react";
import {
  MdInfo,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import investing from "../../assets/images/investing.jpg";
import trading from "../../assets/images/trading.jpg";

const Sentiments = forwardRef((props, ref) => {
  const sentimentsRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 2);
  };

  // // eslint-disable-next-line no-undef
  // const data = {
  //   labels: ['yes', 'no', 'ok'],
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [65, 59, 80],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //     ],
  //     borderWidth: 1
  //   }]
  // };
  
  // const options = {
  //   scales: {
  //     x: {
  //       beginAtZero: true
  //     }
  //   }
  // };

  return (
    <>
      <div
        ref={ref || sentimentsRef}
        className="w-full bg-white rounded-md p-8 mt-5"
      >
        <div className="mt-3 relative overflow-x-scroll">
          <h2 className="text-2xl font-bold">Sentiment</h2>
          <div className="mt-5 font-semibold text-lg flex items-center text-gray-700">
            Key Events <MdInfo className="ml-2 text-gray-400" />
          </div>

          <div className="mt-3 relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${-currentIndex * 25}%)`,
                width: "200%",
              }}
            >
              <div className="bg-blue-100 w-1/2 mx-3 p-3 rounded-lg">
                <div className="grid grid-cols-12 m-2">
                  <div className="col-span-2">
                    <div className="bg-blue-600 rounded-[50%] h-[70px] w-[70px] flex justify-center items-center">
                      <CgNotes className="justify-center text-white text-3xl" />
                    </div>
                  </div>
                  <div className="col-span-10 p-5">
                    <h4 className="text-md font-bold">
                      Lorem ipsum dolor sit amet, adipiscing elit, tempor
                      incididunt ut{" "}
                    </h4>
                    <p className="text-gray-400 mt-3">
                      Lorem fermentum. Massa tincidunt nunc pulvinar sapien et
                      ligula. Aliquam vestibulum morbi blandit cursus fames ac
                      turpis. Vitae congue eu consequat ac felis donec.
                      Consequat interdum varius sit amet mattis vulputate enim
                      nulla. Nibh tortor id aliquet lectus proin nibh nisl.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 w-1/2 mx-3 p-3 rounded-lg">
                <div className="grid grid-cols-12 m-2">
                  <div className="col-span-2">
                    <div className="bg-green-600 rounded-[50%] h-[70px] w-[70px] flex justify-center items-center">
                      <BsGraphUpArrow className="justify-center text-white text-3xl" />
                    </div>
                  </div>
                  <div className="col-span-10 p-5">
                    <h4 className="text-md font-bold">
                      Lorem ipsum dolor sit amet, adipiscing elit, tempor
                      incididunt ut{" "}
                    </h4>
                    <p className="text-gray-400 mt-3">
                      Lorem fermentum. Massa tincidunt nunc pulvinar sapien et
                      ligula. Aliquam vestibulum morbi blandit cursus fames ac
                      turpis. Vitae congue eu consequat ac felis donec.
                      Consequat interdum varius sit amet mattis vulputate enim
                      nulla. Nibh tortor id aliquet lectus proin nibh nisl.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 w-1/2 mx-3 p-3 rounded-lg">
                <div className="grid grid-cols-12 m-2">
                  <div className="col-span-2">
                    <div className="bg-purple-600 rounded-[50%] h-[70px] w-[70px] flex justify-center items-center">
                      <BsGraphUpArrow className="justify-center text-white text-3xl" />
                    </div>
                  </div>
                  <div className="col-span-10 p-5">
                    <h4 className="text-md font-bold">
                      Lorem ipsum dolor sit amet, adipiscing elit, tempor
                      incididunt ut{" "}
                    </h4>
                    <p className="text-gray-400 mt-3">
                      Lorem fermentum. Massa tincidunt nunc pulvinar sapien et
                      ligula. Aliquam vestibulum morbi blandit cursus fames ac
                      turpis. Vitae congue eu consequat ac felis donec.
                      Consequat interdum varius sit amet mattis vulputate enim
                      nulla. Nibh tortor id aliquet lectus proin nibh nisl.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-100 w-1/2 mx-3 p-3 rounded-lg">
                <div className="grid grid-cols-12 m-2">
                  <div className="col-span-2">
                    <div className="bg-pink-600 rounded-[50%] h-[70px] w-[70px] flex justify-center items-center">
                      <BsGraphUpArrow className="justify-center text-white text-3xl" />
                    </div>
                  </div>
                  <div className="col-span-10 p-5">
                    <h4 className="text-md font-bold">
                      Lorem ipsum dolor sit amet, adipiscing elit, tempor
                      incididunt ut{" "}
                    </h4>
                    <p className="text-gray-400 mt-3">
                      Lorem fermentum. Massa tincidunt nunc pulvinar sapien et
                      ligula. Aliquam vestibulum morbi blandit cursus fames ac
                      turpis. Vitae congue eu consequat ac felis donec.
                      Consequat interdum varius sit amet mattis vulputate enim
                      nulla. Nibh tortor id aliquet lectus proin nibh nisl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute top-[50%] left-0 bottom-[50%] ml-2 flex items-center justify-center bg-gray-200 opacity-90 hover:opacity-100 rounded-[50%] h-[40px] w-[40px] "
              onClick={prevSlide}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className="absolute top-[50%] right-0 bottom-[50%] mr-2 flex items-center justify-center bg-gray-200 opacity-90 hover:opacity-100 rounded-[50%] h-[40px] w-[40px]"
              onClick={nextSlide}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>

          <div className="mt-7 font-semibold text-lg flex items-center text-gray-700">
            Analysis Estimate <MdInfo className="ml-2 text-gray-400" />
          </div>

          <div className="grid grid-cols-12 mt-4">
            <div className="bg-green-200 h-[170px] w-[170px] rounded-[50%] justify-center flex items-center grid-cols-3">
              <p className="text-5xl text-green-600 flex items-center">
                76<span className="ml-2 text-lg">%</span>
              </p>
            </div>
            <div className="grid-cols-9">
              {/* <canvas ref={chartRef}></canvas> */}
              {/* <Bar data={data} options={options} /> */}
              {/* <Bar data={data} options={options} /> */}
              {/* <Pie data={data} options={options} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-md p-8 mt-5">
        <h2 className="text-2xl font-bold">About Bitcoin</h2>
        <div className="mt-5 pb-3 border-b">
          <p className="font-bold">What is Bitcoin ?</p>
          <p className="mt-2">
            Bitcoin is the world's first and most well-known cryptocurrency.
            It's a decentralized digital asset that functions as a medium of
            exchange, operating outside the control of any central authority or
            bank.
          </p>
        </div>
        <div className="mt-5 pb-3 border-b ">
          <p className="font-bold">Lorem ispum dodori sit ament</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis
            elementum nibh tellus molestie. Tellus rutrum tellus pellentesque eu
            tincidunt tortor aliquam nulla. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lobortis elementum nibh tellus
            molestie. Tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam nulla.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-7">Already Holding Bitcoin?</h2>
        <div className="flex mt-4 gap-9 border-b pb-4">
          <div className="flex bg-gradient-to-br from-green-400 to-indigo-600 rounded-lg lg:w-1/2 md:w-1/2 p-2 sm:w-full">
            <div className="w-2/5 p-2">
              <img
                src={investing}
                alt="mobile-chart"
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="w-3/5 p-4 flex-grow">
              <h4 className="tracking-wider text-2xl font-bold text-white">
                Calculate your Profits{" "}
              </h4>
              <button
                type="button"
                className="mt-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-lg text-sm px-5 py-1.5 me-2 mb-2 flex items-center"
              >
                Check Now <GoArrowRight className="font-semibold ml-1" />
              </button>
            </div>
          </div>

          <div className="flex bg-gradient-to-br from-orange-400 to-red-500 rounded-lg lg:w-1/2 md:w-1/2 p-2 sm:w-full mt-4 sm:mt-0">
            <div className="w-2/5 p-2">
              <img
                src={trading}
                alt="mobile-chart"
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="w-3/5 p-4 flex-grow">
              <h4 className="tracking-wider text-2xl font-bold text-white">
                Calculate your tax liability{" "}
              </h4>
              <button
                type="button"
                className="mt-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-lg text-sm px-5 py-1.5 me-2 mb-2 flex items-center"
              >
                Check Now <GoArrowRight className="font-semibold ml-1" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 font-semibold text-gray-700">
          Odio euismod lacinia at quis risus sed vulputate sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua hdus siue euw ieuh. Ligula
          ullamcorper malesuada proin libero nunc consequat interdum varius sit.
          Aliquam ut porttitor leo a. Massa tincidunt nunc pulvinar sapien et
          ligula ullamcorper. Etiam tempor orci eu lobortis elementum nibh
          tellus. Id donec ultrices tincidunt arcu non sodales neque.{" "}
        </p>
      </div>
    </>
  );
});

export default Sentiments;
