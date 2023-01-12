import style from "../styles/Base.module.css"

export default function NameText({someText}){
    return (<p className="
    relative block
     text-[200px] text-center text-white uppercase
     m-0 -z-1 rotate-90 mr-[40px]
     font-black
    ">
        {someText}
        </p>)
}