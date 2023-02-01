import style from "../styles/Base.module.css"
export default function NameText({ someText }) {
    return (
        <p className="relative block text-center text-white uppercase font-black text-5xl h-fit leading-tight m-0 p-0 md:rotate-90 md:mr-40 md:text-20xl md:m-0">
            {someText}
        </p>
    )
}
