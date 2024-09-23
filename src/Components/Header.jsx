import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
         setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
        icon: <FaSearch />,
        name: "Search",
        },
        {
            icon: <CiDiscount1 />,
            name:"Offers",
            sup:"New"
            
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "Sign In"
        },
        {
            icon: "",
            name: "Carts",
            sup:"2"
        }
            

    

]

    return (
        <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility:toggle ? "visible" : "hidden"
    }}>
        <div onClick={(e) => {
            e.stopPropagation();
        }} className='w-[400px] bg-white h-full absolute-[400ms]'
        style={{
            left: toggle ? '0%': '-100%'
        }}
        ></div>
    </div>
       <header className='p-[15px] shadow-xl text-[#686b78]'>
        <div className='max-w-[1200px] mx-auto border border-yellow-500 flex items-center'>
            <div className='w-[100px] border border-blue-500'>
                <img src="images/logo.png" className='w-full' alt="" />
            </div>
            <div className=''>
                 <span className='font-bold border-b border-b-[3px] border-[black]'>Ratanada</span> Jodhpur, Rajasthan, India <RxCaretDown 
                fontsize={35} className='font-bold inline text-[0.9rm] text-[#fc8019] cursor-pointer' onClick= {showSideMenu} />
            </div>
            <nav className= 'flex list-none gap-10 border border-black ml-auto text-[18px] font-semibold'>
                {
                    links.map(
                        (link, index) => {
                            return <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                                {links.icon}
                                {link.name}
                               <sup>{link.sup}</sup> 
                                </li>
                            
                        }
                    )
                }
            
            </nav>
        </div>
        </header>
        </>   
     )
}



