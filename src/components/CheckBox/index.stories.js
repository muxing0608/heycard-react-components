import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from './index.tsx';

storiesOf('CheckBox', module).add('默认用法', () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      isShow={true}
      checked={checked}
      onCheck={() => {
        action('onClick');
        setChecked(!checked);
      }}
    />
  );
});
