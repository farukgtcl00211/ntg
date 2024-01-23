import React from 'react'
import Ban from '../images/banner.png'

const Banner = () => {
  return (
    
    <section id='banner' className='py-[250px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.74) after:z-[-1]]
     w-full' style={{background:`url(${Ban})`}}>
    
     {/* <div className='max-w-container mx-auto'>
        <h2 className=' lg:    text-justify w-[820px] text-white text-pops lg:text-[64px] font-700'>We exist since 1975 on the oil and gas industry. </h2></div> */}
         <div className=" sm: ml-[50px] justify-center mx-auto lg: h-[50px] w-[120px] bg-[red] text-white text-center py-2 lg:ml-5">LEARN MORE</div> 
    

    </section>
    
    
  )
}

export default Banner