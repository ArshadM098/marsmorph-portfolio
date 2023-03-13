import Layout from "../components/layout"
import BlogList from "../components/blogList"
import path from 'path';
import fs from 'fs'
import matter from 'gray-matter'
import dynamic from "next/dynamic";

export async function getStaticProps() {
    
    const postsDirectory = path.join(process.cwd(),'pages/projects/mdx');
    const filenames = fs.readdirSync(postsDirectory);
    const posts =  filenames.map( (filename) =>{
      console.log(filename)
      const filePath = path.join(postsDirectory, filename);
      return {
        id: filename.replace('.mdx', ''),
      };
    });
    console.log(posts)
    return {
      props: {
        posts
      },
    };
  }
export default function Ideas({posts}) {
    return (
        <Layout title='Ideas'>
            <div id="main-container" className="w-full h-full">
                <BlogList blogs={posts}/>
            </div>
            
        </Layout>
    )
}
