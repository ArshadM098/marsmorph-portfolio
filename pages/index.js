import NavBar from "../components/navbar"
import Image from "next/image"
import HeadShot from "../lib/CyberpunkCat.jpg"

export default function Home() {
    return (
        <div className="container flex flex-col text-white h-full">
            <NavBar />
            <div className="relative h-full flex flex-col justify-start items-center p-0 m-3 overflow-hidden mt-24">
                <div className="absolute w-full border-solid border-white border rounded p-30 h-3/5"></div>
                <div className="self-start w-fit block text-4xl m-10 "> I build <br/> <span className="text-accent">smart</span> technology</div>
                <div className="z-10 relative block mr-10 ml-10">
                    <Image src={HeadShot} height={340} width={500} className="object-cover"></Image>
                </div>
                <div className="text-2xl self-end mr-10 text-accent uppercase">M. Arshad</div>
                <div className="text-lg self-end mr-10">LinkedIn</div>
                <div className="text-lg self-end mr-10">Github</div>
            </div>
        </div>
    )
}