import Head from 'next/head'
import Link from 'next/link'

const Portfolio = () => (
  <div className="bg-black">
    <Head>
      <title>My Portfolio</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
    </Head>
    <header className="text-center text-white py-10">
      <h1 className="text-4xl font-medium">My Portfolio</h1>
      <nav className="flex justify-center">
        
          <a className="px-4 py-2 text-yellow-500 hover:text-yellow-300">About</a>
        
          <a className="px-4 py-2 text-yellow-500 hover:text-yellow-300">Projects</a>
        
          <a className="px-4 py-2 text-yellow-500 hover:text-yellow-300">Contact</a>
        
      </nav>
    </header>
    <section className="container mx-auto my-20">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-3">
          <div className="bg-blue-500 text-center py-10 rounded-lg">
            <h2 className="text-white text-3xl">Project 1</h2>
            <p className="text-white text-lg">A brief description of the project goes here</p>
            
              <a className="text-white text-sm font-medium">Learn More</a>
            
          </div>
        </div>
      </div>
      </section>
      </div>)
export default Portfolio;