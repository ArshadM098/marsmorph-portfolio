import menu from "../styles/Menu.module.css"
import PreviewLayout from "./previewLayout"
import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import Link from 'next/link';
import NavButton from "./navButtons";

export default function Menu({allPostsData}){
    const [index, setIndex] = useState("p1");

    function handleClick(x){
        setIndex(x);
    }

    let post = allPostsData.find(x => x.id === index)
    return (
        <div className="flex flex-nowrap justify-start flex-col w-auto relative md:p-[20px] overflow-hidden h-full ">
            <h1 className="text-center justify-self-end relative text-6xl uppercase m-0 p-1 align-end  
            md:text-[110px] md:h-auto md:mt-auto
            ">projects</h1>
            <div className="relative flex flex-row justify-center flex-grow items-stretch my-[20px] h-[7/8] mx-0 md:mx-[50px]">
                <div className="relative min-w-[300px] w-full md:w-[300px] overflow-auto border-0 md:border-[1px] border-[#808080] border-solid border-r-0">
                    <ul className="
                    flex flex-col
                    content-stretch
                    list-none
                    text-2xl
                    m-0
                    ">
                    {allPostsData.map(({ id,title}) => (
                        <li key={id} onClick={() => handleClick(id)}
                        className="
                        p-[15px]
                        h-auto
                        md:h-[100px]
                        transition-all
                        text-white
                        hover:text-black
                        hover:bg-white
                        backdrop-brightness-50
                        
                        ">
                            {title}
                            <div className=" md:hidden md:absolute bottom-0 m-[10px] self-end ">
                            <NavButton label="See More..." href={"blogpages/" + post.id}></NavButton>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="
                flex-col flex-nowrap justify-left relative
                border-3 border-white border-solid
                w-full hidden md:flex
                ">
                    <PreviewLayout blog={post}>
                    <div className=" absolute bottom-0 m-[10px] self-end ">
                        <NavButton label="See More..." href={"blogpages/" + post.id}></NavButton>
                        </div>
                    </PreviewLayout>
                    
                </div>
            </div>
            
        </div>
    )
}