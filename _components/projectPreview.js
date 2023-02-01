import Link from "next/link"

export default function ProjectPreview({title,desc,href}){
    return (
        <div className="relative border-white border border-solid text-white p-3 rounded">
            <h1 id="title" className="text-3xl mr-3">{title}</h1>
            <p id="description" className="text-sm my-3 line-clamp-5 ...">{desc}
        </p>
            <Link href={href} className="text-accent">Check out this project </Link>
        </div>
    )
}