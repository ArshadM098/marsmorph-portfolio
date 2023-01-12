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
        <div className={menu.container}>
            <p className={menu.title}>projects.</p>
            <div className={menu.navigation}>
                <div className={menu.list}>
                    <ul>
                    {allPostsData.map(({ id,title}) => (
                        <li key={id} onClick={() => handleClick(id)}>
                            {title}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className={menu.preview}>
                    <PreviewLayout blog={post}></PreviewLayout>
                    <div className={menu.right}>
                        <div className={menu.btn}>
                        <NavButton label="See More..." href={"blogpages/" + post.id}></NavButton>
                        </div>
                        
                    </div>    
                </div>
            </div>
            
        </div>
    )
}