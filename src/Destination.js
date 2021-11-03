import React, {useEffect, useState} from 'react'
import './Destination.css'
import Navbar from './Navbar'
import data from './data.json'
import moon from './assets/destination/image-moon.png'


function Destination() {
 let [info, setInfo]= useState(0)
 let destRef=document.querySelectorAll('a')

 useEffect(()=>{

 let destRef=document.querySelectorAll('.destination__Option')

  let destFunc= (value)=>{
setInfo(value)
      console.log(value)

  }

  function trueFunc(){

    destRef.forEach(e=>e.classList.remove('true'))
    this.classList.add('true')
  }

destRef.forEach(e=>e.addEventListener('mouseenter', trueFunc))
  destRef.forEach((key,value)=>{
    key.addEventListener('mouseenter', ()=>destFunc(value))

  })

 }, [])

    console.log(data)
    return (
        <div className='destination'>
<Navbar/>
            <div className='destination__Picker'>
                <p>01</p>
                <p>PICK YOUR DESTINATION</p>

            </div>

          <div className='destination__Image'>
            <img src={data.destinations[info].images.png}/>
          </div>

        <div className='destination__Options'>
            <div className='destination__Option true'> MOON </div>
            <div className='destination__Option'>MARS </div>
            <div className='destination__Option'> EUROPA </div>
            <div className='destination__Option'> TITAN </div>
        </div>

        <h1 className='destination__Name'>{data.destinations[info].name}</h1>
        <p className='destination__About'> {data.destinations[info].description}</p>

        {/* <hr/> */}
<div className='destination__Footer'>
<div>

        <p className='destination__AVG'>AVG. DISTANCE</p>
        <h2>{data.destinations[info].distance}</h2>
</div>
<div>
        <p className='destination__AVG'>EST. TRAVEL TIME</p>
        <h2>{data.destinations[info].travel}</h2>

</div>

</div>
    </div>
    )
}

export default Destination
