import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Toast from './index';

storiesOf('Toast', module).add('示例', () => {
  const showToast = () => Toast('哈哈哈哈😝');
  return <div onClick={showToast}>点我</div>;
});
