import React, { useContext } from 'react'

import './Duration.scss';
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';

function Duration() {
  const { setDuration, duration, setCurrentStep } = useContext(AppContext);
  const { timeIntervals } = useSelector((state :RootState) => state.content);

  useEffect(() => {
    if(duration && duration >0){
      setCurrentStep && setCurrentStep(1)
    }
  })
  
  const onClick = (e:Event) => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).value;

    if(setDuration && setCurrentStep){
      setDuration(+value);
      setCurrentStep(1);
    }
  }

  return (
    <div className='duration'>
      <Header />
      <SubTitle sentence='Escolha o tempo de duração da reunião:' bold='tempo de duração'/>
      <div className='duration__buttons'>
        {timeIntervals.map((button) => {
          return(
          <Button key={ button.id } text={button.label} value={ button.value } selected={duration === button.value} onClick={ onClick }/>
        )})}
      </div>
      <SubTitle sentence='Para pedidos de orçamento: escolha a reunião de 15 min. O valor da mesma, após aceitação de orçamento, será descontado no valor total.'/>
    </div>
  )
}

export default Duration
