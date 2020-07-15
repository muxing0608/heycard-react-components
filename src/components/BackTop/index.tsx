import React, { useState, useEffect } from 'react';
import { px2vw, animateToTop } from '../../utils';
import './index.less';

export interface BackTopProps {
  // 参考高度
  refer?: number;
  // 点击后的回调函数
  callback?: React.MouseEventHandler<HTMLElement>;
  // 距离底部的距离
  bottom?: number;
  // 距离右边的距离
  right?: number;
  // * 左右互斥
}

const BackTop = ({
  refer,
  callback,
  bottom = 30,
  right = 30,
}: BackTopProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const referHeight = refer || window.screen.height;
    const onScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      setIsShow(scrollTop > referHeight);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const BackTop = (e: React.MouseEvent<HTMLDivElement>) => {
    animateToTop();
    if (typeof callback === 'function') {
      callback(e);
    }
  };

  return (
    <img
      onClick={BackTop}
      className={`back-to-top-container ${isShow ? '' : 'hide'}`}
      style={{ bottom: px2vw(bottom), right: px2vw(right) }}
      src="https://img.16pinpin.com/taoke/go-top.png"
    />
  );
};

export default BackTop;
