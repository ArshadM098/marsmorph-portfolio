import NavBar from "../../../components/navbar";
import { getAllPostIds, getPostData  } from "../../../lib/blogs";
import BlogFormat from "../../../components/blogFormat";
import Link from "next/link";


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log(postData);
    return {
      props: {
        postData,
      },
    };
  }
export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export default function BlogPage({postData}) {
  return (
  <div className="container flex flex-col text-white h-full">
    <NavBar></NavBar>
    <Link href="../../projectMenu" className="mt-24 mx-7  self-end"> &#x2190; Return to previous page</Link>
    <BlogFormat>{postData}</BlogFormat>
  </div>
  )
}