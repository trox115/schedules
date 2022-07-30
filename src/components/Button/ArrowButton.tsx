import React from 'react';
import classNames from 'classnames';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './ArrowButton.scss';

interface ArrowButtonProps {
  isNext: boolean,
  onClick: () => void
}

function ArrowButton({ isNext, onClick }: ArrowButtonProps) {
  return (
      <button className={ classNames({
        'arrow-button': true,
        'arrow-button--next': isNext
      })} onClick={ onClick }> { 
      <ChevronRightIcon className={ classNames({
        'arrow-button__icon' : true,
        'arrow-button__icon--next': isNext,
        'arrow-button__icon--back': !isNext
      })}/> } </button>        
    )
}

export default ArrowButton
