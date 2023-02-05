import Link from "next/link"

export default function NavBtns({children,link}){
    return(
        <Link href={link} id='list-item' className="
          px-10 py-2 pb-10  w-full
          text-4xl text-white no-underline block hover:no-underline hover:text-accent
        ">{children}</Link>
    )
}