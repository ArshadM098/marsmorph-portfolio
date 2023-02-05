import BlogPreview from "./blogPreview";


const blogs = [
    {
      id: 1,
      title: "Important news",
      body: "This is the body of the email",
      from: "sender@example.com",
      date: "2022-12-01"
    },
    {
      id: 2,
      title: "Another important email",
      body: "This is another body of the email",
      from: "sender2@example.com",
      date: "2022-12-02"
    },
    {
      id: 3,
      title: "Another important email",
      body: "This is another body of the email",
      from: "sender2@example.com",
      date: "2022-12-02"
    },
    {
      id: 4,
      title: "Another important email",
      body: "This is another body of the email",
      from: "sender2@example.com",
      date: "2022-12-02"
    },
    {
      id: 5,
      title: "Another important email",
      body: "This is another body of the email",
      from: "sender2@example.com",
      date: "2022-12-02"
    },
    {
      id: 6,
      title: "Another important email",
      body: "This is another body of the email",
      from: "sender2@example.com",
      date: "2022-12-02"
    }
]

export default function BlogList(){
    return(
        <div id="list-container" className="absolute flex flex-col h-full overflow-y-scroll gap-5 w-full bot-0 last:mb-32">
            {blogs.map(blog => (
                <BlogPreview key={blog.id} blog={blog}/>
            ))}
        </div>
    )
}