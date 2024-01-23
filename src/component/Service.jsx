import React from 'react'
import Img5 from '../images/img5.png'


const Service = () => {
  return (
    <section id='service' className='max-w-container mx-auto py-10 items-center'>
        <div className="flex">
            <div className="w-1/2">
                <h2 className='font-bold text-center  lg:text-[40px] '>Our Services</h2>
                <p className='w-[400px] text-center mx-auto justify-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
 
            <div className='w-1/2 py-[150px] relative after:absolute after:top-0 after:left-0 after:content-[""] after: h-full after:w-full after: bg-[red] '  style={{background:`url(${Img5})`}}>
                
                <h2 className='text-center text-pops text-[36px] text-white justify-center '>Modern natural oil and gas refineries.</h2>
                <div className="h-[50px] w-[150px] bg-[red] text-center text-pops text-white py-3 mt-5 ml-5">LEARN MORE</div>
            </div>
            
        </div>
    </section>
  )
}

export default Service