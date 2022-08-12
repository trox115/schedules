import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps {
  text: string,
  selected: boolean
  onClick: (e: any) => void,
  value: number | string,
  size?: string
}

function Button({ text, selected, onClick, value, size = 'medium' }: ButtonProps) {

  return (

    <button className={classNames({
      'button': true,
      'button--selected': selected,
      'button--small': size === 'small'
    })}
      value={value}
      onClick={onClick}>{text}</button>
  )
}

export default Button