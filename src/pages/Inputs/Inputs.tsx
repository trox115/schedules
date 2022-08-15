import Header from '../../components/Header/Header'
import Forms from '../../components/InputsForms/Forms'
import Resume from '../../components/Resume/Resume'
import SubTitle from '../../components/SubTitle/SubTitle'
import './Inputs.scss'

function Inputs() {

  return (
    <div className='inputs'>
      <Header/>
      <Resume />
      <SubTitle sentence='Os seus dados: ' align='left'/>
      <div className='inputs--forms'>
        <Forms />
      </div>
    </div>
  )
}

export default Inputs