import overlay from "../styles/Base.module.css"
import NameText from "./nametext"
import NavButton from "./navButtons"

export default function Layout({children}){
    return(
        <div className={overlay.container_center}>
            <div className={overlay.container}>
                <div className={overlay.cell1}>
                    <NavButton label="HOME" href="/"></NavButton>
                    <NavButton label="PROJECTS" href="/projects/projectmenu"></NavButton>
                    <NavButton label="ART" href="/"></NavButton>
                    <NavButton label="MISC" href="/"></NavButton>
                </div>
                <div className={overlay.cell2}>{children}</div>
                <div className={overlay.cell3}>
                    <NameText someText={"Arshad"}></NameText>
                </div>
            </div>
        </div>
    )
}