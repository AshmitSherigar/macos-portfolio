import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef();
  const barRef = useRef();

  useEffect(() => {
    gsap.to(barRef.current, {
      width: '100%',
      duration: 4,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => setIsLoading(false),
        });
      },
    });
  }, []);

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
            ref={barRef}
            className="h-full bg-white"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
