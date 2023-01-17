import NavBar from "../components/navbar"
import Link from "next/link"
import Featured
 from "../components/featuredblog"
export default function Home() {
    return (
        <div className="container flex flex-col text-white h-full">
            <NavBar />
            <div className="relative h-full flex flex-col justify-start items-center p-0 m-3 overflow-hidden mt-24">
                <Featured/>
            </div>
            <Link href="/projectMenu" className="self-center text-4xl text-accent my-5 hover:no-underline"> &#9660; Explore</Link>
        </div>
    )
}