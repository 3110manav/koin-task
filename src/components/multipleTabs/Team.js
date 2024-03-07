import React, { useRef, forwardRef } from "react";
import t1 from "../../assets/images/t1.jpg";
import t2 from "../../assets/images/t2.jpg";
import t3 from "../../assets/images/t3.jpg";

const Team = forwardRef((props, ref) => {
  const teamRef = useRef();
  return (
    <div ref={ref || teamRef} className="w-full bg-white rounded-md p-8 mt-5">
      <h2 className="text-2xl font-bold">Team</h2>
      <div className="mt-2">
        <p className="font-semibold text-gray-700">
          Velit laoreet id donec ultrices tincidunt arcu non sodales neque.
          Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Purus non
          enim praesent elementum. Eu tincidunt nulla facilisi cras fermentum
          odio. Eu volutpat odio.
        </p>
      </div>
     
      <div className="flex flex-col">
      <div className="bg-blue-100 w-full flex flex-col items-center mt-5 rounded-lg sm:flex-row">
          <div className="w-full sm:w-1/5 p-2 mx-5">
            <div className="px-3 py-5 h-[200px] w-[200px]">
              <img
                src={t2}
                alt="mobile-chart"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start mt-3">
              <p className="text-lg font-bold">Gracy Meranda</p>
              <p className="text-gray-400 font-semibold">Designation here</p>
            </div>
          </div>
          <div className="w-full sm:w-4/5 p-4 mt-5 sm:mt-0 flex-grow">
            <p className="tracking-wide font-medium">
              Viverra justo nec ultrices dui sapien eget mi proin. Eleifend quam
              adipiscing vitae proin sagittis nisl. Ornare quam viverra orci
              sagittis eu volutpat odio facilisis. Phasellus vestibulum lorem
              sed risus ultricies tristique. Augue neque gravida in fermentum
              et. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis. Urna cursus eget nunc scelerisque viverra mauris in
              aliquam sem. Maecenas pharetra convallis posuere morbi leo urna
              molestie at. Porttitor rhoncus dolor purus non enim.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 w-full flex flex-col items-center mt-5 rounded-lg sm:flex-row">
          <div className="w-full sm:w-1/5 p-2 mx-5">
            <div className="px-3 py-5 h-[200px] w-[200px]">
              <img
                src={t1}
                alt="mobile-chart"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start mt-3">
              <p className="text-lg font-bold">Jhon Smith</p>
              <p className="text-gray-400 font-semibold">Designation here</p>
            </div>
          </div>
          <div className="w-full sm:w-4/5 p-4 mt-5 sm:mt-0 flex-grow">
            <p className="tracking-wide font-medium">
              Viverra justo nec ultrices dui sapien eget mi proin. Eleifend quam
              adipiscing vitae proin sagittis nisl. Ornare quam viverra orci
              sagittis eu volutpat odio facilisis. Phasellus vestibulum lorem
              sed risus ultricies tristique. Augue neque gravida in fermentum
              et. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis. Urna cursus eget nunc scelerisque viverra mauris in
              aliquam sem. Maecenas pharetra convallis posuere morbi leo urna
              molestie at. Porttitor rhoncus dolor purus non enim.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 w-full flex flex-col items-center mt-5 rounded-lg sm:flex-row">
          <div className="w-full sm:w-1/5 p-2 mx-5">
            <div className="px-3 py-5 h-[200px] w-[200px]">
              <img
                src={t3}
                alt="mobile-chart"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start mt-3">
              <p className="text-lg font-bold">Ananya D'souza</p>
              <p className="text-gray-400 font-semibold">Designation here</p>
            </div>
          </div>
          <div className="w-full sm:w-4/5 p-4 mt-5 sm:mt-0 flex-grow">
            <p className="tracking-wide font-medium">
              Viverra justo nec ultrices dui sapien eget mi proin. Eleifend quam
              adipiscing vitae proin sagittis nisl. Ornare quam viverra orci
              sagittis eu volutpat odio facilisis. Phasellus vestibulum lorem
              sed risus ultricies tristique. Augue neque gravida in fermentum
              et. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis. Urna cursus eget nunc scelerisque viverra mauris in
              aliquam sem. Maecenas pharetra convallis posuere morbi leo urna
              molestie at. Porttitor rhoncus dolor purus non enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Team;
