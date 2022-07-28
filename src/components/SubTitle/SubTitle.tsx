import React from 'react';

import './Subtitle.scss'

interface SubtitleProps {
  sentence: string,
  bold?: string
}

function SubTitle({ sentence, bold=''} : SubtitleProps) {
  const textArray = sentence.split(bold);
  return (
        <h2 className='subtitle'>{textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && (
              <b>{ bold }</b>
            )}
          </>
        ))}</h2>
    )
}

export default SubTitle
