import style from "../styles/Base.module.css"

export default function NameText({someText}){
    return (<p className="
    relative block
    text-center text-white uppercase
     m-0 -z-1 
     font-black
     text-[95px]
     
     -mt-10
     h-fit
     p-0
     leading-tight

     md:rotate-90 md:mr-[40px] md:text-[200px] 
     md: m-0
    
     
    ">
        {someText}
        </p>)
}