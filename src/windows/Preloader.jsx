import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      gsap.to(loadingRef.current, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black" ref={loadingRef}>
      <div className="flex items-center justify-center flex-col gap-8 w-full h-screen">
        {/* Apple Logo */}
        <div>
          <img
            src="/images/logo.svg"
            alt="Apple Logo"
            className="w-30 h-30 invert"
          />
        </div>
        {/* Loading Bar*/}
        <div className="h-2 w-75 bg-[#737373]">
          <div
            className="h-full bg-white transition duration-400 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
