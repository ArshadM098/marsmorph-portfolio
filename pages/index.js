import Layout from "../components/layout"
export default function Home() {
    return (
        <Layout>
            <div id="website-title-container" className=" mt-36 m-auto">
            <svg width="175" height="75" viewBox="0 0 175 75" className="absolute -z-10">
                <rect id="Rectangle_5" data-name="Rectangle 5" width="167" height="68" fill="#006e45"/>
            </svg>
                <p className="uppercase text-6xl font-semibold">Marsmorph</p>
                <p className="text-lg ml-1">A Generalist's Journal</p>
            </div>
        </Layout>
    )
}