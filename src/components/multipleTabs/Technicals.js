import React , {useRef , forwardRef} from 'react'

const Technicals = forwardRef((props,ref) => {
    const technicalsRef = useRef();
  return (
    <div ref={ref || technicalsRef}>Technicals</div>
  );
});

export default Technicals