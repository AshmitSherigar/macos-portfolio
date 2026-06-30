import React from 'react';
import useWindowStore from '../store/window';
import { WindowControls } from '../components';
import WindowWrapper from '../hoc/WindowWrapper';
import clsx from 'clsx';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;
  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target={'txtfile'} />
        <h3>{name}</h3>
      </div>
      <div className="p-5 space-y-6 bg-white">
        {image ? (
          <div className="w-full flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className=" w-[25vw] h-[45vh] rounded-4xl"
            />
          </div>
        ) : null}
        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}
        {Array.isArray(description) && description.length > 0 ? (
          <div
            className={clsx(
              image && subtitle && description ? 'overflow-y-scroll h-35' : '',
            )}
          >
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
