import React, { useContext } from 'react'
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import AppContext from '../../Context/App.context'
import './Resume.scss';

function Resume() {
 const { duration, date, time } = useContext(AppContext);


  return (
        <div className="resume">
          <span className='resume__text'>A sua seleção:</span>
          {duration && <span className='resume__text--bold'> { ` ${ duration } min` }</span>}
          {date && <span className='resume__text--capitalize resume__text--bold'> {`| ${ format(date, 'dd LLLL', { locale: pt }) } `}</span>}
          {time && <span className='resume__text--bold'> {`| ${ time }`}</span>}
        </div>
    )
}

export default Resume