import menu from "../styles/Menu.module.css"

export default function PreviewLayout({blog}){
    return (
                    <div className={menu.left}>
                        <div className={menu.title2}>{blog.title}</div>
                        <div className={menu.description}>
                            {blog.description}
                        </div>
                    </div>
    )
}