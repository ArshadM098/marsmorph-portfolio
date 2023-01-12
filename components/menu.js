import menu from "../styles/Menu.module.css"
import PreviewLayout from "./previewLayout"
import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import Link from 'next/link';
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
                        <Link href={"blogpages/" + post.id}>Show more..</Link>
                    </div>    
                </div>
            </div>
            
        </div>
    )
}