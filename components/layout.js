import overlay from "../styles/Base.module.css"
import NameText from "./nametext"
import NavButton from "./navButtons"

export default function Layout(){
    return(
        <div className={overlay.container_center}>
            <div className={overlay.container}>
                <div className={overlay.cell1}>
                    <NavButton label="HOME" href=""></NavButton>
                    <NavButton label="PROJECTS" href=""></NavButton>
                    <NavButton label="ART" href=""></NavButton>
                    <NavButton label="MISC" href=""></NavButton>
                </div>
                <div className={overlay.cell2}>Cell 2</div>
                <div className={overlay.cell3}>
                    <NameText someText={"Arshad"}></NameText>
                </div>
            </div>
        </div>
    )
}