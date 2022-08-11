import React, { memo } from 'react';
import cn from 'classnames';
import scopedStyle from './index.module.css';
import type { ButtonProps } from './types';

function Button(props: ButtonProps): React.ReactElement {
  /* States */
  const { label = 'Button Label', ...rest } = props;

  /* Main */
  return (
    <button className={cn(scopedStyle.buttonBase, rest.className)} {...rest}>
      {label}
    </button>
  );
}

export default memo(Button);
