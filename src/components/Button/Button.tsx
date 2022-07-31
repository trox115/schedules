import React from 'react'

import './Button.scss';

interface ButtonProps { 
  text: string,
  selected: boolean
  onClick: (e:any) => void,
  value: number
}

function Button({ text, selected, onClick, value }: ButtonProps) {

  return (
      <button className={!selected ? 'button' : 'button button--selected'} value={ value } onClick={ onClick }>{ text }</button>
    )
}

export default Button