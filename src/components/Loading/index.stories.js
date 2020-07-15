import React, { useState, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './index.tsx';

storiesOf('Loading', module).add('示例', () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div
        style={{ position: 'relative', zIndex: 9999 }}
        onClick={() => setShow(!show)}
      >
        {['展示', '影藏'][+show]}
      </div>
      <Loading show={show} />
    </Fragment>
  );
});
