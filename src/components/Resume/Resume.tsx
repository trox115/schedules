import React, { useContext } from 'react'

import AppContext from '../../Context/App.context'
import './Resume.scss';

function Resume() {
 const { duration } = useContext(AppContext);

  return (
        <div className="resume">
          <span className='resume__text'>A sua seleção:</span>
          {duration && <span className='resume__text--bold'> { ` ${ duration } min` }</span>}
        </div>
    )
}

export default Resume
