
import { useState } from "react";
import PFP from "../button_icons/profilepic.png"
import Exit from "../button_icons/exit.png"
import PFbtn from "../button_icons/profilebtn.png"
import Image from 'next/Image'

export default function Sidebar(){
    const [showDropdown, setShowDropdown] = useState(false);
    
    return (
      <div className="absolute w-full h-full z-30">
        <Image
        onClick={() => setShowDropdown(!showDropdown)}
        src={PFbtn}
        className="absolute object-contain right-0 m-4 h-8 w-8 z-50 border-none"/>
        <div className={`absolute bg-black flex flex-col items-center
        bottom-0 py-2 w-full h-3/5 transform origin-top-right ${showDropdown ? 'translate-y-0' : 'translate-y-full'} transition-all`}>
          <Image onClick={() => setShowDropdown(false)} src={Exit} className="active:bg-accent object-contain self-end mr-4 mt-2 m-0 w-8"/>
          <Image src={PFP} className="object-contain w-3/5 mt-0"/>
          <div id="info" className="flex flex-row justify-around w-full items-center">
            <div id="name-title" className="text-md flex flex-col gap-0 items-center">
                <span className="text-4xl">M. Arshad</span>
                <span>Engineer/Roboticist</span>
            </div>
            <div id="social-link" className="text-sm flex flex-col gap-0">
                <span>Contact: arshadm2059@gmail.com</span>
                <span>LinkedIn: marsha6</span>
                <span>Github: ArshadM098</span>
            </div>
          </div>
        </div>
        
      </div>
    );
  };