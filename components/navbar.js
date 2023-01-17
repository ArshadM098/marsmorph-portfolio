import NavBtns from "./navbtns"

export default function NavBar(){
    return <>
        <div className="flex justify-around 
         border-solid border-white border
         p-0 m-3 rounded overflow-hidden min-h-[65px]">
                <div className=" m-3 mr-0 text-2xl lowercase text-accent
        ">|

        </div>
                <NavBtns>Home</NavBtns>
                <NavBtns>Projects</NavBtns>
                <NavBtns>Art</NavBtns>
                <NavBtns>Misc</NavBtns>
            
        </div>
    </>
}