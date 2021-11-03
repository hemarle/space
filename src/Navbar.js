import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from './assets/shared/logo.svg'
import hamburger from './assets/shared/icon-hamburger.svg'
import close from './assets/shared/icon-close.svg'
import {Link} from 'react-router-dom'



function Navbar() {

let iconRef= document.querySelector('.navbar__Hamburger');
let bodyRef=''
useEffect(()=>{
    let iconRef= document.querySelectorAll('.navbar__Hamburger');
    let bodyRef= document.querySelector('.navbar__Body')

    console.log(bodyRef)
    function navFunc(){
        iconRef.forEach((icon)=>
        icon.classList.remove("remove")
        )
        this.classList.add('remove')

    }

    function bodyFunc(){   
        bodyRef.classList.remove('remove')
    }
    function bodyFunc2(){
      bodyRef.classList.add('remove')
    }


    

    iconRef.forEach((icon)=>
    icon.addEventListener('mouseenter', navFunc)
    )

 
    iconRef[0].addEventListener('mouseenter', bodyFunc)
    iconRef[1].addEventListener('mouseenter', bodyFunc2)
  
}, [iconRef, bodyRef])

    return (
        <div className='navbar'>

        <div className='navbar__Main'>
        <div className='navbar__Header'>
                   <Link to='/'>
                    <div className='navbar__Logo'>
                        <img src={logo} alt='logo'/>
                    </div>
                    </Link>
                    <div className='navbar__Hamburger' >
                        <img src={hamburger}/>
                    </div>
                    <div className='remove navbar__Hamburger'>
                            <img src={close}/>
                    </div>

                </div>


                <div className='remove navbar__Body'>
                     
                      <Link to='/'>
                      
                        <p className='page navbar__Option'><span>00 </span><span >HOME</span></p>
                      </Link>
                      <Link to='/destination'>
                      
                        <p className='navbar__Option'><span>01 </span> <span>DESTINATION</span></p>
                      </Link>
                      <Link to='/crew'>
                        <p className='navbar__Option'><span>02 </span> <span>CREW</span></p>
                      
                      </Link>
                      <Link to='/launch'>
                      
                        <p className='navbar__Option'><span>03 </span> <span>TECHNOLOGY</span></p>
                      </Link>
                      
                      
                </div>
                   

                   
                   

        </div>
                          
        </div>
    )
}

export default Navbar
