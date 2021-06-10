import React, { useState } from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button className="btn">
    Button
  </Button>
);

export const ButtonWithEvent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p>{toggle ? 'Show' : 'Hide'}</p>
      <Button className={['button', 'primary']} onClick={() => setToggle(!toggle)}>
        Button
      </Button>
    </div>
  )
}