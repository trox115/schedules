import React, { useContext } from 'react'

import AppContext from '../../Context/App.context'
import './Resume.scss';

function Resume() {
 const { duration, date, time } = useContext(AppContext);


  return (
        <div className="resume">
          <span className='resume__text'>A sua seleção:</span>
          {duration && <span className='resume__text--bold'> { ` ${ duration } min` }</span>}
          {date && <span className='resume__text--capitalize resume__text--bold'> {`| ${ date } `}</span>}
          {time && <span className='resume__text--bold'> {`| ${ time }h00`}</span>}
        </div>
    )
}

export default Resume