import Layout from "../components/layout"
import BlogList from "../components/blogList"
export default function Home() {
    return (
        <Layout>
            <div id="main-container" className="w-full h-full">
            <div id="title-container" className="relative top-0 mt-3 ml-16 mb-8 text-4xl"> Ideas</div>
            <BlogList/>
            </div>
            
        </Layout>
    )
}