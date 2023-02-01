import NavBtns from "./navbtns2"
import Link from 'next/link';
import { useState } from "react";

export default function HamburgerDropdown(){
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="absolute w-full">
      

      <div className={`absolute backdrop-blur-lg
      right-0 py-2 w-full transform origin-top-left ${showDropdown ? 'translate-x-0' : '-translate-x-full'} transition-all`}>
        <NavBtns>About</NavBtns>
        <NavBtns>Ideas</NavBtns>
        <NavBtns>Resume</NavBtns>
      </div>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="absolute bg-accent block m-5 h-8 w-8 focus:outline-none focus:border-white ">
        
      </div>
    </div>
  );
};


