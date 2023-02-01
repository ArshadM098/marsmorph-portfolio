
import { useState } from "react";


export default function Sidebar(){
    const [showDropdown, setShowDropdown] = useState(false);
  
    return (
      <div className="absolute w-full h-full">
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="absolute bg-accent block m-5 h-8 w-8 right-0 focus:outline-none focus:border-white ">
          
        </div>
        <div className={`absolute bg-accent
        bottom-0 py-2 w-full h-1/2 transform origin-top-right ${showDropdown ? 'translate-y-0' : 'translate-y-full'} transition-all`}>
          <div className="w-10 h-10"></div>
        </div>
        
      </div>
    );
  };