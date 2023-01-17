import NameText from "./nametext"
import NavButton from "./navButtons"

export default function Layout({children}){
    return(
        <div className="flex flex-col fixed px-0 h-full w-full md:py-10">
            <div className="flex justify-center h-full md:flex-row relative md:align-start">
                <div className="flex flex-col gap-10 h-130 p-10 md:relative md:w-auto md:items-end md:justify-start md:h-full md:w-200">
                    <NavButton responsive={true} label="HOME" href="/"></NavButton>
                    <NavButton responsive={true} label="PROJECTS" href="/projects/projectmenu"></NavButton>
                    <NavButton responsive={false} label="ART" href="/art/artmenu"></NavButton>
                    <NavButton responsive={false} label="MISC" href="/misc/miscmenu"></NavButton>
                </div>
                <div className="relative md:min-w-[500px] h-full md:border-3 border-solid border-white bg-center bg-cover bg-no-repeat bg-[url('../lib/CyberpunkCat.jpg')] shadow-2xl overflow-auto">
                    {children}</div>
                <div className="flex justify-self-start md:items-center p-0 gap-0 md:w-200 md:h-full">
                    <NameText someText={"Arshad"}></NameText>
                </div>
            </div>
        </div>
    )
}