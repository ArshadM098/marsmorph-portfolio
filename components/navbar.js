import NavBtns from "./navbtns"

export default function NavBar({children}){
    return <>
        <div className="fixed flex justify-around
         border-solid border-white border
         p-0 px-7 mx-3 rounded overflow-hidden min-h-[65px] bg-dark z-10 place-self-center">
            <div className=" m-3 mr-0 text-2xl lowercase text-accent">| </div>
            <NavBtns href="/">Home</NavBtns>
            <NavBtns href="/featuredProject">Projects</NavBtns>
            <NavBtns href="/projectMenu">Art</NavBtns>
            <NavBtns href="/">Misc</NavBtns>
        
        </div>
    </>
}