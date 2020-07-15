import React, { useState, Fragment } from 'react';
import './index.less';

export interface TabsItemProps {
  // tab text
  label: string;
  // tab value
  value: number;
}

export type TabValueType = string | number;

export interface TabsProps {
  // 是否checked
  tabs: TabsItemProps[];
  //tabsWrap 额外的样式
  className?: string;
  // tab点击事件
  onChange?: (val: TabValueType) => void;
  // 默认选择
  defaultValue?: TabValueType;
}

const Tabs = ({ tabs = [], className, defaultValue, onChange }: TabsProps) => {
  const [check, setCheck] = useState<TabValueType>(
    defaultValue || tabs[0].value
  );
  const onCheck = (val: TabValueType) => {
    setCheck(val);
    if (onChange) onChange(val);
  };

  return (
    <Fragment>
      <div className="common-tabs-container">
        <div className={`tab-wrap ${className || ''}`}>
          {tabs.map(({ label, value }: TabsItemProps) => (
            <div
              className={`tab-item-wrap ${check === value ? 'active' : ''}`}
              key={value}
              onClick={() => onCheck(value)}
            >
              <div className="tab-item">
                {label}
                <div
                  className={`tab-bottom ${check === value ? 'active' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="border-bottom" />
      </div>
      <div className="common-tabs-placeholder" />
    </Fragment>
  );
};

export default Tabs;
