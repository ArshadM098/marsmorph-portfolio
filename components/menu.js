import menu from "../styles/Menu.module.css"

export default function Menu(){
    return (
        <div className={menu.container}>
            <p className={menu.title}>projects.</p>
            <div className={menu.navigation}>
                <div className={menu.list}>
                    <ul>
                        <li> Random Topic</li>
                        <li> Autonomous Snow Removal Robot</li>
                        <li> VR/AR Project</li>
                        <li> P4 </li>
                        <li> P5 </li>
                        <li> P1 </li>
                        <li> P2 </li>
                        <li> P3 </li>
                        <li> P4 </li>
                        <li> P5 </li>
                    </ul>
                </div>
                <div className={menu.preview}>Preview is Here</div>
            </div>
            
        </div>
    )
}