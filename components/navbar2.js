import NavBtns from "./navbtns2"
import Link from 'next/link';
import { useState } from "react";
import NavIco from "../button_icons/navham.png"
import NavIco_Open from "../button_icons/navham_open.png"
import Image from 'next/Image'

export default function HamburgerDropdown(){
  const [showDropdown, setShowDropdown] = useState(false);
  var y = NavIco;
  function handleClick(){
    if (showDropdown === false){
        y = NavIco;
    }else{
        y = NavIco_Open;
    }
    console.log(y);
  }
  return (
    <div className="absolute w-full h-full">
      <div className={`absolute backdrop-blur-lg z-40
      right-0 py-20 w-full h-full transform origin-top-left ${showDropdown ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-opacity`}>
        <NavBtns>Home</NavBtns>
        <NavBtns>Ideas</NavBtns>
        <NavBtns>Resume</NavBtns>
      </div>
      <Image key={y}
        onClick={() => {setShowDropdown(!showDropdown);handleClick()}}
        src={y}
        className="absolute object-contain m-4 h-8 w-8 z-40 border-none"/>
    </div>
  );
};
