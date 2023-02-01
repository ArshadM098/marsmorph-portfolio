import Link from "next/link"

export default function NavBtns({href,children}){
    return <>
    
        <Link href={href} className=" m-3 text-2xl align-text-top lowercase text-white
        hover:decoration-accent decoration-4  underline-offset-8      
        ">
        {children}
        </Link>
    </>
}