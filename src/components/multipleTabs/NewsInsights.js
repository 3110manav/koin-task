import React , {useRef , forwardRef}from 'react'

const NewsInsights = forwardRef((props,ref) => {
    const newsRef = useRef();
  return (
    <div ref={ref || newsRef}>NewsInsights</div>
  );
});

export default NewsInsights