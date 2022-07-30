import React, { useContext } from 'react'

import './Duration.scss';
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import SubTitle from '../../components/SubTitle/SubTitle'
import AppContext from '../../Context/App.context';
import StepBar from '../../components/StepBar/StepBar';
import ArrowButton from '../../components/Button/ArrowButton';

function Duration() {
  const { setDuration, duration, setCurrentStep } = useContext(AppContext);

  const buttonValues = [{label: '15 min', value: 15, price: 45}, {label: '30 min', value: 30, price: 75}, {label:'45 min', value: 45, price: 100}, {label:'60 min', value: 60, price: 150 }]

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
      <SubTitle sentence='Escolha o tempo de duração da reunião:' bold='tempo de duração' />
      <div className='duration__buttons'>
        {buttonValues.map((button, index) => {
          return(
          <Button text={button.label} value={ button.value } selected={duration === button.value} onClick={ onClick }/>
        )})}
      </div>
      <SubTitle sentence='Para pedidos de orçamento: escolha a reunião de 15 min. O valor da mesma, após aceitação de orçamento, será descontado no valor total.' />
      <StepBar />
      <ArrowButton isNext onClick={ () => {} } />
    </div>
  )
}

export default Duration
