import page from "../styles/InnerScreen.module.css";

export default function BlogFormat({children}){
    return(
        <div className="
        mt-[110px]
        flex flex-wrap flex-col justify-start content-stretch gap-[10px] p-[30px]
        ">
            <div className="text-6xl uppercase font-black">{children.title}</div>
            <div className="text-xl capitalize font-light text-start">Last Updated: {children.date}</div>
            <div className={page.textx1} dangerouslySetInnerHTML = {{__html: children.contentHtml}}>
                
        </div>
</div>
    )
}