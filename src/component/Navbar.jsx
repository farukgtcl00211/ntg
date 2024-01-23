import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav";
 


const Navbar = () => {
    let[show, setShow] = useState(false)

    let handleShow =()=>{
        setShow(!show)
    }
    
  return (
    <section className='bg-[#F40404] fixed w-full top-0 left-0 z-50'>  
        <div className="max-w-container mx-auto ">

            <div className="flex justify-between items-center">

                <div className="w-1/2">
                <img src={Logo} alt="" /></div>

                <div className="w-1/2">

                <ScrollspyNav
                    scrollTargetIds={["banner", "image", "service", "footer" ]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true">

                



                    <ul className={`text-center lg:flex lg:gap-x-6 justify-end absolute left-0 top-0 lg:static
                    ${show ? 'top-[173px] w-full left-0 bg-[green] py-5 duration-500':'top-[-210px]  left-0 w-full duration-500 '}`}>

                        <li ><a className='text-white font-pops text-sm font-semibold ' href="#banner">Home</a></li>
                        <li className='py-3 lg:py-0'><a className='text-white font-pops text-sm font-semibold' href="#image">About</a></li>
                        <li className='py-3 lg:py-0'><a className='text-white font-pops text-sm font-semibold' href="#service">Services</a></li>
                        <li className='py-3 lg:py-0'><a className='text-white font-pops text-sm font-semibold' href="#footer">FAQ</a></li>
                        
                         
                    </ul>
                    </ScrollspyNav >
                </div>
            </div> 
            <div className="lg:hidden" onClick={handleShow}>
              {show == true ? <RxCrossCircled className='text-white font-bold text-xl'/> : <FaBars className='text-white font-bold text-xl' />}
            </div>
        </div>
    </section>
  )
}

export default Navbar