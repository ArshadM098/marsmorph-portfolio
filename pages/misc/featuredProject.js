import NavBar from "../../components/navbar"
import Image from "next/image"
import HeadShot from "../../lib/headshot.jpg"
import Featured
 from "../../components/featuredblog"
export default function Home() {
    return (
        <div className="container flex flex-col text-white h-full">
            <NavBar />
            <div className="relative h-full flex flex-col justify-start items-center p-0 m-3 overflow-hidden">
                <Featured/>
            </div>
        </div>
    )
}