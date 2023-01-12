import page from "../styles/InnerScreen.module.css";

export default function BlogFormat({children}){
    return(
        <div className={page.blog}>
            <div className={page.titlex1}>{children.title}</div>
            <div className={page.textx1} dangerouslySetInnerHTML = {{__html: children.contentHtml}}>
                
        </div>
</div>
    )
}