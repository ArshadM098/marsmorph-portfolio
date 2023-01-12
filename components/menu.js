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
        <div className="flex flex-nowrap justify-start flex-col w-auto relative p-[20px] overflow-hidden h-full ">
            <p className="relative block text-[110px] uppercase m-0 p-1">projects</p>
            <div className="relative flex flex-row justify-center flex-grow items-stretch my-[20px] h-[7/8] mx-[50px]">
                <div className="relative min-w-[300px] w-[300px] overflow-auto border-[1px] border-[#808080] border-solid border-r-0">
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
                        h-[100px]
                        transition-all
                        hover:text-black
                        hover:bg-white
                        
                        ">
                            {title}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="
                flex flex-col flex-nowrap justify-left relative
                border-3 border-white border-solid
                w-full
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