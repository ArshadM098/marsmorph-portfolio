import menu from "../styles/Menu.module.css"

export default function PreviewLayout({blog,children}){
    return (
                    <div className="flex flex-col h-full relative w-full">
                        <div className="relative block text-4xl m-10">{blog.title}</div>
                        <div className="relative block text-2xl overflow-auto m-10">
                            {blog.description}
                        </div>
                        {children}
                    </div>
    )
}