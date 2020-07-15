import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './index.tsx';

storiesOf('Radio', module).add('默认用法', () => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      isShow={true}
      checked={checked}
      onClick={() => {
        action('onClick');
        setChecked(!checked);
      }}
    />
  );
});
