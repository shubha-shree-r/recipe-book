import React, { useEffect } from "react";
import "../css/home.css"
import { useInView } from "react-intersection-observer";
// import { Link } from 'react-router-dom'; // If using React Router
function Home() {
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
  });
  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (firstInView && firstRef.current) {
      // Apply animation to the first div
      firstRef.current.style.animation = 'slideInFromBottom 0.5s ease-in-out forwards';
    }
  }, [firstInView]);
  
  useEffect(() => {
    if (secondInView && secondRef.current) {
      // Apply animation to the second div
      secondRef.current.style.animation = 'slideInFromBottom 0.5s ease-in-out forwards';
    }
  }, [secondInView]);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6 menu-card order-2" ref={firstRef}>hi</div>
        <div className="col-sm-6 menu-card order-1" ref={secondRef}>hello</div>
      </div>
    </div>
  );
}

// CSS for the animation
const styles = {
  '@keyframes slideInFromBottom': {
    '0%': {
      transform: 'translateY(50px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
};

// Apply styles to the component
Home.defaultProps = {
  style: styles,
};


export default Home;