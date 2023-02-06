import Layout from "../components/layout"
import BlogList from "../components/blogList"
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(),'pages/projects/mdx');
    const filenames = fs.readdirSync(postsDirectory);
    const x = "Arshad"
    const posts = filenames.map((filename) => {
      console.log(filename)
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents);
      return {
        id: filename.replace('.mdx', ''),
        meta: data,
        content: content,
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