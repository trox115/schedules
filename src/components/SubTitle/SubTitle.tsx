import React, { Fragment } from 'react';
import classNames from 'classnames';

import './Subtitle.scss'

interface SubtitleProps {
  sentence: string,
  bold?: string,
  align?: string
}

function SubTitle({ sentence, bold='', align='center'} : SubtitleProps) {
  const textArray = sentence.split(bold);
  return (
        <h2 className={classNames({
          'subtitle': true,
          'subtitle--left': align === 'left'
        })}>{textArray.map((item, index) => (
          <Fragment key={ index }>
            {item}
            {index !== textArray.length - 1 && (
              <b>{ bold }</b>
            )}
          </Fragment>
        ))}</h2>
    )
}

export default SubTitle
