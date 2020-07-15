import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BackTop from './index.tsx';

storiesOf('BackTop', module)
  .addDecorator((story) => (
    <div style={{ height: '500vh' }}>
      <div style={{ textAlign: 'center' }}>向下滚动</div>
      {story()}
    </div>
  ))
  .add('默认用法 (window.screen.height)', () => <BackTop onClick={action('onClick')} />)
  .add('自定义检测高度', () => (
    <BackTop refer={200} onClick={action('onClick')} />
  ));
