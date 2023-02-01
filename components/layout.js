import Sidebar from "./sidebar"
import Navbar from "./navbar2"

export default function Layout({children}){
    return(<div id="top-container" className="text-white absolute w-full h-auto bottom-0 top-0 overflow-hidden">
            
    <Sidebar/>
    <div id="main-container" className="flex h-full">
        <Navbar/>
        {children}
        
    </div>
    
    
    
</div>)
}

