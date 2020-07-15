import React from 'react';
import './index.less';

export interface ModalProps {
  // 是否展示
  isShow: boolean;
  // 额外样式
  innerStyle?: React.CSSProperties;
  // 弹窗内容
  children: React.ReactNode;
  // cancel func
  onCancel: () => void;
  // 是否展示关闭弹窗
  showClose: boolean;
  // 点击蒙层是否可以关闭
  maskClose: boolean;
}

const Modal = ({
  isShow = false,
  innerStyle = {},
  children,
  onCancel,
  showClose = true,
  maskClose = true,
}: ModalProps) => {
  return (
    <div className="motion-modal-container">
      <div
        className={`mask ${isShow ? '' : 'hide'}`}
        onClick={() => {
          if (maskClose) onCancel();
        }}
        style={{ zIndex: 999 }}
      />
      <div
        className={`modal-content ${isShow ? '' : 'hide'}`}
        style={{ zIndex: 999, ...innerStyle }}
      >
        {children}
        {showClose ? (
          <img
            className="close-icon"
            src="https://img.16pinpin.com/crux/cancel.png"
            onClick={onCancel}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
