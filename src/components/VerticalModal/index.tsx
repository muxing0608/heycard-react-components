import React from 'react';
import './index.less';

export interface VerticalModalProps {
  // 弹窗标题
  title?: string;
  // 是否展示
  isShow: boolean;
  // 包裹层样式
  wrapperStyle: React.CSSProperties;
  // 额外样式
  innerStyle: React.CSSProperties;
  // 弹窗内容
  children: React.ReactNode;
  // cancel func
  onCancel: (toggle: boolean) => void;
  // 是否展示关闭弹窗
  showClose: boolean;
}

const VerticalModal = ({
  title = '',
  isShow = false,
  wrapperStyle = {},
  innerStyle = {},
  children,
  onCancel = () => {},
  showClose = true,
}: VerticalModalProps) => {
  return (
    <div className="vertical-modal-container" style={wrapperStyle}>
      <div
        className={`mask ${isShow ? '' : 'hide'}`}
        onClick={() => onCancel(!isShow)}
        style={{ zIndex: 999 }}
      />
      <div
        className={`modal-content ${isShow ? '' : 'hide'} relative`}
        style={{ zIndex: 999, ...innerStyle }}
      >
        {title ? <div className="title">{title}</div> : null}
        {children}
        {showClose ? (
          <div className="close-wrap" onClick={() => onCancel(!isShow)}>
            <img
              className="icon"
              src="https://img.16pinpin.com/crux/kb/close.png"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VerticalModal;
