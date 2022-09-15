import React, { useCallback, useContext } from 'react'

import './Duration.scss';
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import SubTitle from '../../components/SubTitle/SubTitle'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import UsePageStep from '../../hooks/usePageStep';

function Duration() {
  const { timeIntervals } = useSelector((state: RootState) => state.content);
  const { changeDuration } = UsePageStep();

  const onClick = useCallback((e: Event) => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;
    changeDuration(+value);
  }, [])

  return (
    <div className='duration'>
      <Header />
      <SubTitle sentence='Escolha o tempo de duração da reunião:' bold='tempo de duração' />
      <div className='duration__buttons'>
        {timeIntervals.map((button) => {
          return (
            <Button key={button.id} text={button.label} value={button.value} isDuration onClick={ onClick } />
          )
        })}
      </div>
      <SubTitle sentence='Para pedidos de orçamento: escolha a reunião de 15 min. O valor da mesma, após aceitação de orçamento, será descontado no valor total.' />
    </div>
  )
}

export default Duration
