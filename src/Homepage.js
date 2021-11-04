import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
function Homepage() {
    return (
        <div className='homepage'>
          <Navbar/>
        <div className='homepage__Body'>
                  <div className='homepage__Content'>
                          <h3 className='homepage__Title'>So, You want to travel to</h3>
                          <h1 className='homepage__Name'>Space</h1>
                          <p className='homepage__About'> Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
                      </div>
                      <Link to ='/destination'>
                      
                      <button><div>EXPLORE</div></button>
                      </Link>
        </div>
            

        </div>
    )
}

export default Homepage
