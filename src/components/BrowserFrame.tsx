
import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
}

const BrowserFrame = ({ children }: BrowserFrameProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg mx-auto max-w-5xl overflow-hidden">
      <div className="browser-header">
        <div className="browser-circle browser-red"></div>
        <div className="browser-circle browser-yellow"></div>
        <div className="browser-circle browser-green"></div>
        <div className="browser-arrow">&larr;</div>
        <div className="browser-arrow">&rarr;</div>
        <div className="browser-address-bar">dharatal.ai</div>
        <div className="ml-auto flex items-center gap-3">
          <button className="text-gray-500">⟳</button>
          <button className="text-gray-500">+</button>
        </div>
      </div>
      <div className="browser-content">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame;
