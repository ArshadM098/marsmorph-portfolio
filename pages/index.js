import NavBar from "../components/navbar"
import Image from "next/image"
import HeadShot from "../lib/CyberpunkCat.jpg"

export default function Home() {
    return (
        <div className="container flex flex-col text-white h-full">
            <NavBar />

            {/*  */}

            <div className="relative h-full flex flex-col justify-start items-center p-0 m-3 overflow-hidden mt-24
            sm:flex-row sm:hidden">

                <div className="absolute w-full border-solid border-white border rounded p-30 h-3/5
                "></div>

                <div className="self-start w-fit block text-4xl m-10 
                "> I build <br/> 
                    <span className="text-accent">smart</span> technology
                </div>
                
                <div className="z-10 relative block mr-10 ml-10 
                ">
                    <Image src={HeadShot} className="object-cover h-[350px]"></Image>
                </div>
                <div className="flex flex-col self-end w-fit mr-10 sm:hidden">
                    <div className="text-2xl self-end text-accent uppercase">M. Arshad</div>
                    <div className="text-lg self-end" >LinkedIn</div>
                    <div className="text-lg self-end">Github</div>
                </div>
                
            </div>

            <div className="absolute w-auto border-solid border-white border rounded p-30 h-3/5 overflow-hidden min-h-[400px]
                sm:mt-32 sm:left-5 sm:right-5 
                  max-sm:hidden">
                     <div className="self-start w-fit block text-4xl m-10
                     sm:-rotate-90 sm:origin-bottom sm:ml-5 sm:mt-20 sm:bottom-40 sm:absolute sm:z-10 sm:backdrop-blur-sm
                     md:rotate-0 md:mt-
                     lg:text-7xl lg:ml-12
                     xl:ml-20
                "> I build <br/> 
                    <span className="text-accent">smart</span> technology
                </div>
                  </div>
           
            <div className="z-1 absolute block w-[400px] right-16 top-20 bottom-16 h-auto
                max-sm:hidden">
                    <Image src={HeadShot} className=" object-cover h-full"></Image>
                <div className="absolute flex flex-col self-end w-fit mr-10 max-sm:hidden right-[370px] bottom-10 bg-dark p-5">
                    <div className="text-2xl self-end text-accent uppercase">M. Arshad</div>
                    <div className="text-lg self-end" >LinkedIn</div>
                    <div className="text-lg self-end">Github</div>
                </div>
                </div>
        </div>
    )
}