import React from 'react'
import './profile.css'
import img from '../login_page/account.jpeg'
import img1 from '../login_page/logolora.jpeg'
import Monitoring from '../monitoringpage/monitoring'
const Profile = () => {
  return (
    <div className="App">
    <div className='heads'>
    <div  className='logo'>
    <img src={img} height='50px'></img>
      <h1>LoRaEnviroLink</h1>
      </div>
      <div className='accountLogo'><img src={img1} className='accountImg' height='50px'></img></div>
      <br></br>
      <br></br>
      <p><b>Channel  ID:</b> 2240021</p>
      <p><b>Author:</b> mwa0000030766394</p>
      <p><b>Created:</b> 12th Aug 2023</p>
      <p><b>Access:</b> Private</p>
      <p><b>Entries:</b>122</p>
      </div>
      <br></br>
      <div className='boxOut'>
      <div className='boxHolder'>
      <div className='box'>
      
      <h2 className='heading'>Temperature of Node 1</h2>
      <b>23 °C</b>
      <div className='boxIn'>
      <input type='number' className='limit' placeholder='Upper'></input>
      <input type='number' className='limit' placeholder='Lower'></input>
      </div>
      </div>
      <div className='box'>
      <h2 className='heading'>Humidity of Node 1</h2>
      <b>77 %</b>
      <div className='boxIn'>
      <input type='number' className='limit' placeholder='Upper'></input>
      <input type='number' className='limit' placeholder='Lower'></input>
      </div>
      </div>
      
      </div>
      <div className='boxHolder'>
      <div className='box'>
      <h2 className='heading'>Temperature of Node 2</h2>
      <b>22 °C</b>
      <div className='boxIn'>
      <input type='number' className='limit' placeholder='Upper'></input>
      <input type='number' className='limit' placeholder='Lower'></input>
      </div>
      </div>
      <div className='box'>
      <h2 className='heading'>Humidity of Node 2</h2>
      <b>78 %</b>
      <div className='boxIn'>
      <input type='number' className='limit' placeholder='Upper'></input>
      <input type='number' className='limit' placeholder='Lower'></input>
      </div>
      </div>

      </div>
      <div className='alert'>Attention Needed!</div>
      </div>
      <div>Fetched data = <Monitoring/></div>
    </div>
  )
}
export default Profile;



