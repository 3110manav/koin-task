import React , {useRef , forwardRef} from 'react'

const Tokenomics = forwardRef((props,ref) => {
    const tokenomiesRef = useRef();
  return (
    <div ref={ref || tokenomiesRef} className="w-full bg-white rounded-md p-8 mt-5">
      <h2 className="text-2xl font-bold">Tokenomies</h2>
      <div className='mt-7'>
        <h4 className='text-lg font-semibold'>Initial Distribution</h4>
        <div>
          CHARTT
        </div>
        <div className='mt-2'>
          <p className='font-semibold text-gray-700'>
          Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Purus non enim praesent elementum. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Fusce id velit ut tortor. Netus et malesuada fames ac turpis. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Eu volutpat odio facilisis mauris sit amet massa. Turpis massa sed elementum tempus egestas. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sed nisi lacus sed viverra tellus in. Est ullamcorper eget nulla facilisi etiam dignissim diam. At elementum eu facilisis sed odio morbi quis commodo odio. Sagittis orci a scelerisque purus semper eget duis at. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Tokenomics