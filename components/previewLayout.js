import menu from "../styles/Menu.module.css"

export default function PreviewLayout({blog}){
    return (
                    <div className="flex flex-col h-full relative w-[500px]
                    ">
                        <div className="relative block text-4xl m-[10px]">{blog.title}</div>
                        <div className="relative block text-2xl overflow-auto m-[10px]">
                            {blog.description}
                        </div>
                    </div>
    )
}