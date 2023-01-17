
import NavBar from '../components/navbar';
import SkillTree from '../components/skilltree';
import { getPostData,getAllPostIds, getSortedPostsData } from '../lib/blogs.js';
import ProjectPreview from '../components/projectPreview';

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
    <ul className="list-none  mt-24 mx-3">
    {allPostsData.map(({ id,title,description}) => (
      <li key={id} ><ProjectPreview title={title} desc={description} href={"projects/blogpages/" + id}/></li>
    ))}
    </ul> 
  </div>
  )
}

