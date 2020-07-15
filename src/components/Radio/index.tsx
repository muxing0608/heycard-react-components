import React from 'react';
import './index.less';

export interface RadioProps {
  // 是否checked
  checked: boolean | number;
  // 额外样式
  style?: React.CSSProperties;
  // 额外内容
  children: React.ReactNode;
  // cancel func
  onClick?: () => void;
}

const Radio = ({ checked = 0, style = {}, onClick, children }: RadioProps) => (
  <div className="radio-flex-wrap" onClick={onClick}>
    <div className="radio-container" style={style}>
      <img
        className="radio"
        src="https://img.16pinpin.com/crux/kb/radio.png"
      />
      <img
        className={`radio select ${checked ? '' : 'hide'}`}
        src="https://img.16pinpin.com/crux/kb/radio_select.png"
      />
    </div>
    {children ? children : null}
  </div>
);

export default Radio;
