import React from 'react';
import './index.less';

export interface CheckBoxProps {
  // 是否展示
  isShow: boolean;
  // 选中状态
  checked: boolean;
  // 回调
  onCheck?: (val: boolean) => void;
}

const CheckBox = ({
  isShow = false,
  checked = false,
  onCheck,
}: CheckBoxProps) => {
  return (
    <div
      className={`check-box-container ${isShow ? 'active' : ''}`}
      onClick={() => onCheck && onCheck(!checked)}
    >
      <img
        className="check-icon active"
        src="https://img.16pinpin.com/zyr/item_unselected_icon.png"
      />
      <img
        className={`check-icon ${checked ? 'active' : ''}`}
        src="https://img.16pinpin.com/zyr/item_selected_icon.png"
      />
    </div>
  );
};

export default CheckBox;
