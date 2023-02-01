import NavBtns from "./navbtns"

export default function NavBar({children}){
    return <>
        <div className="fixed flex justify-around
         border-solid border-white border
         p-0 px-7 mx-3 rounded overflow-hidden min-h-[65px] bg-dark z-10 self-center
         sm:self-start sm:ml-5">
            <div className=" m-3 mr-0 text-2xl lowercase text-accent">| </div>
            <NavBtns href="/">Home</NavBtns>
            <NavBtns className="max-md:hidden" href="/projectMenu">Projects</NavBtns>
            <NavBtns className="md:hidden" href="/projects/sample">MDX</NavBtns>
            <NavBtns href="/projectMenu">Art</NavBtns>
            <NavBtns href="/">Misc</NavBtns>
        
        </div>
    </>
}