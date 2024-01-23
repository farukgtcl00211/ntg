import React from 'react'
import Image1 from '../images/img1.png'
import Image2 from '../images/img2.png'
import Image3 from '../images/img3.png'
import Image4 from '../images/img4.png'




const Images = () => {
  return (
   <section id='image' className='max-w-container mx-auto py-10'>

    <div className="  flex gap-x-2 flex-wrap ">

        <div className="w-1/2 lg:w-[24%]">
            <img src={Image1} alt="" />
        </div>
        <div className="w-1/2 lg:w-[24%]">
            <img src={Image2} alt="" />
        </div>
        <div className="w-1/2 lg:w-[24%]">
            <img src={Image3} alt="" />
        </div>
        <div className="w-1/2 lg:w-[24%]">
            <img src={Image4} alt="" />
        </div>
    </div>
   </section>
  )
}

export default Images