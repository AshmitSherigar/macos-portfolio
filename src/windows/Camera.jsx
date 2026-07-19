import React, { useState } from 'react';
import { WindowControls } from '../components';
import WindowWrapper from '../hoc/WindowWrapper';
import {WebcamCapture} from '../components';
import clsx from 'clsx';
import useWindowStore from '../store/window';

const Camera = () => {
  const { openWindow } = useWindowStore();
  const [imageArray, setImageArray] = useState([]);

  const receiveImage = (data) => {
    setImageArray((prev) => {
      const updated = [data, ...prev];
      return updated.slice(0, 7);
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target={'camera'} />
      </div>
      <div className="bg-white flex flex-col h-full w-[50vw]">
        {/* Camera */}
        <div className="flex-1 p-2">
          <WebcamCapture sendImage={receiveImage} />
        </div>
        {/* Film strip */}
        <div className="h-32 border-t border-neutral-300 bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-300 shadow-inner">
          <div className="flex h-full items-center justify-center px-5">
            <div className="flex gap-1.5 overflow-hidden rounded-xl bg-white/20 px-2 py-2 backdrop-blur-sm">
              {Array.from({ length: 7 }).map((_, idx) => {
                const image = imageArray[idx];

                return image ? (
                  <div
                    key={idx}
                    className={clsx(
                      'rounded-xl bg-white p-1 shadow-sm transition-all duration-200',
                      idx === 0
                        ? 'scale-105 shadow-lg ring-2 ring-sky-400'
                        : 'hover:-translate-y-1 hover:shadow-md'
                    )}
                  >
                    <img
                      onClick={() => {
                        openWindow('imgfile', {
                          idx,
                          name: 'Camera Photo',
                          icon: '/images/image.png',
                          kind: 'file',
                          fileType: 'img',
                          imageUrl: image,
                        });
                      }}
                      src={image}
                      alt={`Capture ${idx + 1}`}
                      className="h-20 w-28 rounded-lg object-cover"
                    />
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="flex h-22 w-30 flex-shrink-0 items-center justify-center rounded-xl border border-dashed border-neutral-400 bg-white/40"
                  >
                    <div className="h-8 w-8 rounded-full border border-neutral-400 opacity-80" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CameraWindow = WindowWrapper(Camera, 'camera');
export default CameraWindow;
