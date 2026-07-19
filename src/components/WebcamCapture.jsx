import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const WebcamCapture = ({ sendImage }) => {
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      sendImage(imageSrc);
    }
  }, [sendImage]);
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button
        onClick={capture}
        className="group flex items-center justify-center w-full py-2"
      >
        <div className="relative h-16 w-16 rounded-full bg-neutral-700 shadow-xl transition group-active:scale-95">
          <div className="absolute inset-[4px] rounded-full bg-white" />
          <div className="absolute top-2 left-3 h-3 w-8 rounded-full bg-white/50 blur-sm" />
        </div>
      </button>
    </>
  );
};
export default WebcamCapture;
