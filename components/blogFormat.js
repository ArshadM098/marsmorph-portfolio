

export default function BlogFormat({children}){
    return(
        <div className="
        flex flex-wrap flex-col justify-start content-stretch gap-[10px] p-[30px]
        ">
            <div className="text-6xl uppercase font-black">{children.title}</div>
            <div className="text-md capitalize font-light text-start text-accent">Last Updated: {children.date}</div>
            <div  dangerouslySetInnerHTML = {{__html: children.contentHtml}}>
                
        </div>
</div>
    )
}