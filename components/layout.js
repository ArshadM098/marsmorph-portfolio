import NameText from "./nametext"
import NavButton from "./navButtons"

export default function Layout({children}){
    return(
        <div className="flex flex-nowrap flex-col fixed px-0 py-10 h-full w-full">
            <div className="flex flex-nowrap justify-center flex-row relative h-full ]">
                <div className="flex flex-col relative w-[200px] h-full gap-[10px] justify-start items-end">
                    <NavButton label="HOME" href="/"></NavButton>
                    <NavButton label="PROJECTS" href="/projects/projectmenu"></NavButton>
                    <NavButton label="ART" href="/art/artmenu"></NavButton>
                    <NavButton label="MISC" href="/misc/miscmenu"></NavButton>
                </div>
                <div className="
                relative w-[1400px] h-full
                border-[10px] border-solid border-white
                bg-[url('../lib/bg1.jpg')] bg-cover bg-center bg-no-repeat 
                shadow-inner overflow-auto
                ">
                    {children}</div>
                <div className="flex justify-center items-center
                p-0
                gap-0
                w-[200px] relative h-full
                border-black
                
                overflow-hidden
                 ">
                    <NameText someText={"Arshad"}></NameText>
                </div>
            </div>
        </div>
    )
}