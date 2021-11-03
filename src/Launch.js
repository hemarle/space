import React, {useEffect, useState} from 'react'
import './Launch.css'
import data from './data.json'
import Navbar from './Navbar'
function Launch() {
    const [dat, setDat]=useState(0)
    let launchRef=document.querySelectorAll('.circle')

    useEffect(()=>{
        launchRef=document.querySelectorAll('.circle')
        
        function launchFunc(){
            launchRef.forEach(launch => {
                launch.classList.remove('active')
            });
            this.classList.add('active')   
        }
        
        function dataFunc(value){
               setDat(value)
        }
        launchRef.forEach((element, value)=>{
            element.addEventListener('mouseenter', ()=>dataFunc(value))
        })


launchRef.forEach((element)=>{
    element.addEventListener('mouseenter',launchFunc)
})

    },[launchRef])

    return (
        <div className='launch'>
            <div className='launch__Navbar'>

            <Navbar/>
            </div>
                <div className='destination__Picker'>
                <p>03</p>
                <p>SPACE LAUNCH 101</p>

            </div>

            <div className='launch__Image'>
                <img src={data.technology[dat].images.landscape} />
            </div>

            <div className='launch__Circle'>
                <p className='active circle'>1</p>
                <p className='circle'>2</p>
                <p className='circle'>3</p>
            </div>
<div className='launch__Content'>

            <h4 className='launch__Terminology'>THE TERMINOLOGY ...</h4>
            <h2 className='Launch__Name'>{data.technology[dat].name}</h2>
            <p className='launch__About'>{data.technology[dat].description}</p>
</div>

           
             </div>
    )
}

export default Launch
