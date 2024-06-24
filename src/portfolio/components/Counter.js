import React, { useState, useEffect, useRef } from "react";

const Counter = ({ stop, speed }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(stop, 10);
      if (start === end) return;

      const incrementTime = speed / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, stop, speed]);

  return (
    <div ref={ref} className="count-box">
      <span className="count-text">{count}</span>
    </div>
  );
};

export default Counter;
