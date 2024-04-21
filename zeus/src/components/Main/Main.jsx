import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Zeus</p>
        <img src={assets.user_icon} alt="" />
      </div>
    </div>
  )
}

export default Main