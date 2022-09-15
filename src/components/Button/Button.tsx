import React, { memo } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import './Button.scss';
import { AppContext } from '../../Context/App.context';

interface ButtonProps {
  text: string,
  selected?: boolean
  onClick?: (e: any) => void,
  value?: number | string,
  size?: string,
  type?: string
  btClass?: string,
  isDuration?: boolean
}

function Button({ text, selected, onClick, value, size = 'medium', btClass='', isDuration=false }: ButtonProps) {
  const duration = useContextSelector(AppContext, state => state.duration);

  return (
    <button className={classNames({
      'button': true,
      'button--selected': isDuration ? value === duration : selected,
      'button--small': size === 'small',
      'button--large': size === 'large',
      [btClass]: true
    })}
      value={value}
      onClick={onClick}>{text}</button>
  )
}

export default memo(Button)