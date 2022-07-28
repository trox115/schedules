import React from 'react'

import './Button.scss';

interface ButtonProps { 
  text: string,
  selected: boolean
  onClick: (e:any) => void
}

function Button({ text, selected, onClick }: ButtonProps) {

  return (
      <button className={!selected ? 'button' : 'button button--selected'} onClick={ onClick }>{ text }</button>
    )
}

export default Button
