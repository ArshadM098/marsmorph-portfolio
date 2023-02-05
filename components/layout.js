import Sidebar from "./sidebar"
import Navbar from "./navbar2"

export default function Layout({children,title}){
    return(<div id="top-container" className="text-white absolute w-full h-auto bottom-0 top-0 overflow-hidden">
            
    <Sidebar/>
    <div id="main-container" className="flex h-full">
        <Navbar/>
        <div id="title-container" className="absolute top-0 mt-3 ml-16 mb-8 text-4xl"> {title}</div>
        <div className=" mt-20">
        {children}
        </div>
        
    </div>

</div>)
}

