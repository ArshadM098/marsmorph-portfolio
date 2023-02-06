import BlogPreview from "./blogPreview";



export default function BlogList({blogs}){
    return(
        <list id="list-container" className=" flex flex-col h-full overflow-y-scroll gap-1 w-full bot-0 last:mb-96">
            {blogs.map(blog => (
                <BlogPreview key={blog.id} blog={blog}/>
            ))}
        </list>
    )
}