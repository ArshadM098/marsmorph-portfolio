import Layout from "../components/layout"
import BlogList from "../components/blogList"
export default function Home() {
    return (
        <Layout title='Ideas'>
            <div id="main-container" className="w-full h-full">
                <BlogList/>
            </div>
            
        </Layout>
    )
}