import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VerticalModal from './index.tsx';

storiesOf('VerticalModal', module)
  .add('默认用法', () => {
    const [isShow, setIsShow] = useState(true);

    return (
      <div>
        <div onClick={() => setIsShow(true)}>{['展示', '影藏'][+isShow]}</div>
        <VerticalModal
          isShow={isShow}
          onCancel={() => {
            action('onClick');
            setIsShow(false);
          }}
        >
          <div style={{ padding: '5.3vw' }}>这是从底部弹出的弹窗！！！</div>
        </VerticalModal>
      </div>
    );
  })
  .add('有关闭按钮', () => {
    const [isShow, setIsShow] = useState(true);

    return (
      <div>
        <div onClick={() => setIsShow(true)}>{['展示', '影藏'][+isShow]}</div>
        <VerticalModal
          isShow={isShow}
          onCancel={() => {
            action('onClick');
            setIsShow(false);
          }}
          showClose
        >
          <div style={{ padding: '5.3vw' }}>我有关闭按钮</div>
        </VerticalModal>
      </div>
    );
  })
  .add('有标题', () => {
    const [isShow, setIsShow] = useState(true);

    return (
      <div>
        <div onClick={() => setIsShow(true)}>{['展示', '影藏'][+isShow]}</div>
        <VerticalModal
          title="我就是标题"
          isShow={isShow}
          onCancel={() => {
            action('onClick');
            setIsShow(false);
          }}
          showClose
        >
          <div style={{ padding: '5.3vw 2.6vw' }}>我有关闭按钮</div>
        </VerticalModal>
      </div>
    );
  });
