import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tabs from './index.tsx';

storiesOf('Tabs', module)
  .add('示例', () => (
    <Tabs
      tabs={[
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
      ]}
    />
  ))
  .add('自定义默认值', () => {
    return (
      <Tabs
        tabs={[
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ]}
        defaultValue={2}
      />
    );
  });
