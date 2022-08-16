import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps {
  text: string,
  selected?: boolean
  onClick?: (e: any) => void,
  value?: number | string,
  size?: string,
  type?: string
  btClass?: string
}

function Button({ text, selected, onClick, value, size = 'medium', btClass='' }: ButtonProps) {

  return (

    <button className={classNames({
      'button': true,
      'button--selected': selected,
      'button--small': size === 'small',
      'button--large': size === 'large',
      [btClass]: true
    })}
      value={value}
      onClick={onClick}>{text}</button>
  )
}

export default Button