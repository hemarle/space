import React, {useEffect, useState} from 'react'
import './Crew.css'
import Navbar from './Navbar'
import data from './data.json'
import pic from './assets/crew/image-victor-glover.png'

function Crew() {
    let [info, setInfo]= useState(0)


    let toggleRef= document.querySelectorAll('span')
       




    useEffect(()=>{

        let toggleRef= document.querySelectorAll('.crew__Dot')
        
        function toggleFunc(){
          toggleRef.forEach((tog)=>
          tog.classList.remove('active')
          )
          this.classList.add('active')
        }
         
        function setData(value){
            setInfo(value)
            

        }


       
        toggleRef.forEach((tog, value)=>
        tog.addEventListener('mouseenter', ()=>setData(value)
        )
        )

      
       toggleRef.forEach((tog)=>
       tog.addEventListener('mouseenter',toggleFunc)
       )
       },[toggleRef])






    return (
        <div className='crew'>
            <Navbar/>
            <div className='destination__Picker'>
                <p>02</p>
                <p>MEET YOUR CREW</p>

            </div>

            <div className='crew__Image'>
                <img src={data.crew[info].images.png}/>
            </div>

            <div className='crew__Slider'>
                <hr/>
                <div className='crew__Circle'>
                <span className='active crew__Dot'></span>
                <span className='crew__Dot'></span>
                <span className='crew__Dot'></span>
                <span className='crew__Dot'></span>
                </div>
                
            </div>
            <div className='crew__Info'>
            <p className='crew__Post'>{data.crew[info].role}</p>
            <h2 className='crew__Name'>{data.crew[info].name}</h2>
            
            <p className='crew__About'>{data.crew[info].bio}</p>    
            </div>
            
        </div>
    )
}

export default Crew
