
import NavBar from '../components/navbar';
import SkillTree from '../components/skilltree';
import { getPostData,getAllPostIds } from '../lib/blogs.js';
import ProjectPreview from '../components/projectPreview';

export  function getStaticProps() {

  const ids =  getAllPostIds();
  console.log(ids)
  

  const allPostsData = ids.map(  ({params})=>{
    
    const data =  getPostData(params.id);
    console.log(data);
    const id = params.id
    const desc = data.description;
    const title = data.title;
    return{
      id,
      desc,
      title,
    }})
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
    {allPostsData.map(({ id,title,desc}) => (
      <li key={id} ><ProjectPreview title={title} desc={desc}/></li>
    ))}
    </ul> 
  </div>
  )
}
{/* */}
// }
// export default function ProjectMenu({allPostsData}){
//   return (
//     <Layout >
//       <Menu allPostsData={allPostsData}></Menu>
//     </Layout>
//   )

