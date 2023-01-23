
import NavBar from '../components/navbar';
import SkillTree from '../components/skilltree';
import { getPostData,getAllPostIds, getSortedPostsData } from '../lib/blogs.js';
import ProjectPreview from '../components/projectPreview';
import Featured from '../components/featuredblog';

export  function getStaticProps() {

  const allPostsData =  getSortedPostsData();
  return{
    props:{
      allPostsData
    }
}}

export default function ProjectMenu({allPostsData}){

  return(
  <div className="container flex flex-col text-white h-full">
    <NavBar/>
    <div className='flex flex-col md:flex-row w-full justify-items-stretch'>
    <div className='max-md:hidden mt-24 ml-5 h-[650px]'>
      <Featured/>
    </div>
    <ul className="list-none  mt-24 mx-3 overflow-auto h-[650px]">
    {allPostsData.map(({ id,title,description}) => (
      <li key={id} ><ProjectPreview title={title} desc={description} href={"projects/blogpages/" + id}/></li>
    ))}
    </ul> 
    
    </div>
    
  </div>
  )
}

