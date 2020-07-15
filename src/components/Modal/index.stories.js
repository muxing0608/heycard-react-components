import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from './index.tsx';

storiesOf('Modal', module)
  .add('默认用法', () => {
    const [isShow, setIsShow] = useState(true);

    return (
      <div>
        <div onClick={() => setIsShow(true)}>{['展示', '影藏'][+isShow]}</div>
        <Modal
          isShow={isShow}
          onCancel={() => {
            action('onClick');
            setIsShow(false);
          }}
        >
          <div
            style={{
              width: 200,
              height: 300,
              background: '#fff',
              borderRadius: 20,
              textAlign: 'center',
            }}
          >
            这是一个弹窗！！！
          </div>
        </Modal>
      </div>
    );
  })
  .add('没有关闭按钮', () => {
    const [isShow, setIsShow] = useState(true);

    return (
      <div>
        <div onClick={() => setIsShow(true)}>{['展示', '影藏'][+isShow]}</div>
        <Modal
          isShow={isShow}
          onCancel={() => {
            action('onClick');
            setIsShow(false);
          }}
          showClose={false}
        >
          <div
            style={{
              width: 200,
              height: 300,
              background: '#fff',
              borderRadius: 20,
              textAlign: 'center',
            }}
          >
            这是一个弹窗！！！
          </div>
        </Modal>
      </div>
    );
  });
