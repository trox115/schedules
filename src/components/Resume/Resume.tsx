import React, { useContext, memo } from 'react'
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import './Resume.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../../Context/App.context';

function Resume() {
  const { timeIntervals } = useSelector((state:RootState) => state.content);
  const duration = useContextSelector(AppContext, state => state.duration);
  const date = useContextSelector(AppContext, state => state.date)
  const time = useContextSelector(AppContext, state => state.time)

  const price = timeIntervals.find((button)=> {
    return button.value === duration ;
  })  

  return (
        <div className="resume">
          <span className='resume__text'>A sua seleção:</span>
          {duration && <span className='resume__text--bold'> { ` ${ duration } min` }</span>}
          {date && <span className='resume__text--capitalize resume__text--bold'> {`| ${ format(date, 'dd LLLL', { locale: pt }) } `}</span>}
          {time && <span className='resume__text--bold'> {`| ${ time }`}</span>}
          {price && <span className='resume__text--bold'> {`| ${price?.price}€`}</span>}
        </div>
    )
}

export default memo(Resume)