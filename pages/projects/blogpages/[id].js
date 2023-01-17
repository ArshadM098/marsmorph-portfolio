import Layout from "../../../components/layout";
import { getAllPostIds, getPostData  } from "../../../lib/blogs";
import BlogFormat from "../../../components/blogFormat";
import matter from "gray-matter";
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
    return <Layout>
        <BlogFormat>{postData}</BlogFormat>
    </Layout>
}