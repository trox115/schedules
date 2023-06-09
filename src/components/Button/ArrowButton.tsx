import React, { useMemo, memo } from 'react';
import classNames from 'classnames';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './ArrowButton.scss';
import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../../Context/App.context';

interface ArrowButtonProps {
  isNext: boolean,
  onClick: () => void
}

function ArrowButton({ isNext, onClick }: ArrowButtonProps) {
  const page = useContextSelector(AppContext, state => state.page);
  const duration = useContextSelector(AppContext, state => state.duration);
  const time = useContextSelector(AppContext, state => state.time);

  const isHidden = useMemo(() => {
    if(page === 0){
      return false;
    } else if (page === 1) {
      return duration > 0
    } else if (page === 2) {
      return true
    } else if (page === 3) {
      return time.length > 0;
    } else if( page === 4 && !isNext) {
      return true;
    }
    return false
  },[duration, page, time.length])
  
  return (
      <button className={ classNames({
        'arrow-button': true,
        'arrow-button--next': isNext,
        'arrow-button--hidden': !isHidden,
      })} onClick={ onClick }> { 
      <ChevronRightIcon className={ classNames({
        'arrow-button__icon' : true,
        'arrow-button__icon--next': isNext,
        'arrow-button__icon--back': !isNext
      })}/> } </button>        
    )
}

export default memo(ArrowButton)
