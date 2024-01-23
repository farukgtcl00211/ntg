import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstalod } from "react-icons/fa";


const Header = () => {
  return (
    <section className='py-6 bg-[#282828]'>
        <div className="max-w-container mx-auto text-white">

            <div className="flex flex-wrap items-center">

                <div className="w-full lg:w-1/6 flex items-center">
                    <IoIosMail />
                    <p>mail@yourcompany.com</p>
                </div>

                <div className="w-full lg:w-1/6 flex items-center">
                    <FaPhoneAlt />
                    <p>+896 120 5889 (Toll free)</p>
                </div>
                
                <div className=" lg:w-4/6 flex justify-end gap-x-6 ">
                    
                <FaFacebookF />
                <FaTwitter />
                <FaInstagramSquare />
                <FaInstalod />
               
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header