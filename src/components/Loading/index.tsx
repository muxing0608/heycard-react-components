import React from 'react';
import './index.less';

export interface LoadingProps {
  show: boolean;
}

export default function Loading({ show = false }: LoadingProps) {
  return (
    <div className={`loading-view-mask ${show ? 'show' : ''}`}>
      <div className="loading-view-container">
        <img
          className="gif"
          src="https://img.16pinpin.com/loading_transparent.gif"
        />
      </div>
    </div>
  );
}
