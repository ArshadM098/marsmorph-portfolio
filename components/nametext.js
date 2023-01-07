import style from "../styles/Base.module.css"

export default function NameText({someText}){
    return (<p className={style.bigText}>
        {someText}
        </p>)
}