import React, { useContext } from 'react'

import './Duration.scss';
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context';
import StepBar from '../../components/StepBar/StepBar';
import ArrowButton from '../../components/Button/ArrowButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Duration() {
  const { setDuration, duration, setCurrentStep, setPage } = useContext(AppContext);
  const { timeIntervals } = useSelector((state :RootState) => state.content);

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
        {timeIntervals.map((button, index) => {
          return(
          <Button text={button.label} value={ button.value } selected={duration === button.value} onClick={ onClick }/>
        )})}
      </div>
      <SubTitle sentence='Para pedidos de orçamento: escolha a reunião de 15 min. O valor da mesma, após aceitação de orçamento, será descontado no valor total.'/>
      { duration && <ArrowButton isNext onClick={ setPage ? () => setPage(2) : () => {} } /> }
    </div>
  )
}

export default Duration
