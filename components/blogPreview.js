import { useState } from "react";

export default function BlogPreview({blog}){
    
    const [fill, setFill] = useState('#40403f');
    console.log(blog);
    return (
        <div id="main-container" className="relative w-full bg-black text-white">
            <div id="blog-title" className=" w-7/12 top-0 left-0 m-5 my-10 block text-3xl">{blog.meta.title}</div>
            <div id="blog-date" className="absolute mt-2 top-0 right-0 mr-3">{blog.meta.date}</div>
            <LinkBar 
                className={`hover:cursor-pointer absolute bottom-0 w-full m-0 border-white border-0 border-solid`}
                fillColor={fill}
                setFill={setFill}
            /> 
           
            {/* <div id="blog-link" className="absolute bottom-0 right-0 ">LINK</div> */}
        </div>
        
    )
}

const LinkBar = ({ className, fillColor, setFill }) => {
    var width = 414;
    var height = 30;
    return (
        <svg className={`${className}`} viewBox={`0 0 ${width} ${height}`} onMouseLeave={() => setFill('#40403f')} onMouseEnter={() => setFill('#c5ff00')}>
            <path d={`M${width} ${height}H0v-5.759h367.127L388.854 0H${width}v${height}Zm-25.5-15.829a.982.982 0 0 0-1 .96.982.982
                0 0 0 1 .959h6.883v4.187a.956.956
                            0 0 0 .49.824 1.03 1.03
                            0 0 0 .511.135 1.035 1.035
                            0 0 0 .477-.116l9.855-5.147a.953.953
                            0 0 0 .522-.833.953.953
                            0 0 0-.5-.843l-9.855-5.407a1.033 1.033
                            0 0 0-.5-.127 1.011 1.011
                            0 0 0-.869.484.918.918
                            0 0 0-.1.719.958.958
                            0 0 0 .471.591l8.3 4.552-6.8 3.552V15.13a.982.982
                            0 0 0-1-.96Z`}
                            fill={fillColor}
            />
        </svg>
    );
  };
