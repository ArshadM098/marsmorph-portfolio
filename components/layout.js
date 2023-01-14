import NameText from "./nametext"
import NavButton from "./navButtons"

export default function Layout({children}){
    return(
        <div className="flex flex-nowrap flex-col fixed px-0 md:py-10 h-full w-full">
            <div className="flex flex-nowrap justify-center 
            md:flex-row relative h-full
            flex-col
            align-end
            md:align-start
           ">
                <div className="flex flex-col absolute z-10 gap-[10px]
                md:w-auto md:relative md:w-[200px] md:h-full md:items-end md:flex-nowrap md:justify-start
                top-[15px] flex-wrap h-[150px] left-[15px] right-[10px]
                md:right-auto md:left-auto md:top-auto
                ">
                    <NavButton  responsive={true} label="HOME" href="/"></NavButton>
                    <NavButton responsive={true} label="PROJECTS" href="/projects/projectmenu"></NavButton>
                    <NavButton responsive={false} label="ART" href="/art/artmenu"></NavButton>
                    <NavButton responsive={false} label="MISC" href="/misc/miscmenu"></NavButton>
                </div>
                <div className="
                relative md:w-[1400px] h-full
                border-[10px] border-solid border-white
                bg-[url('../lib/bg1.jpg')] bg-cover bg-center bg-no-repeat 
                shadow-inner overflow-auto
                ">
                    {children}</div>
                <div className="flex 
                justify-center justify-self-start
                md:items-center
                p-0
                gap-0
                md:w-[200px] relative md:h-full
                

                 ">
                    <NameText someText={"Arshad"}></NameText>
                </div>
            </div>
        </div>
    )
}