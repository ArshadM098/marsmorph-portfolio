import SkillTree from "./skilltree"
import Portrait from "../lib/CyberpunkCat.jpg"
import Image from "next/image"
export default function Featured(){

    return <>
    <div className="relative flex flex-col w-full border-solid border-white border rounded p-">
        <div className="text-4xl m-7 my-5">Featured Project</div>
        <div className="text-2x1 m-7 my-5 overflow-clip h-40">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue. Magna sit amet purus gravida quis. Eu facilisis sed odio morbi quis commodo odio aenean sed. Blandit cursus risus at ultrices mi tempus. Faucibus nisl tincidunt eget nullam non nisi est sit. Euismod lacinia at quis risus sed vulputate odio ut enim. Sit amet venenatis urna cursus eget nunc scelerisque. Egestas sed tempus urna et. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend.
        </div>
        <div className="relative block "><Image src={Portrait} className="object-cover h-[300px] "/></div>
        
        <div className="relative"><SkillTree/></div>
    </div>
    </>
}