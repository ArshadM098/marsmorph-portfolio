import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../../components/layout'
import Menu from '../../components/menu'
const inter = Inter({ subsets: ['latin'] })

import { getSortedPostsData } from '../../lib/blogs.js';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function ProjectMenu({allPostsData}){
  return (
    <Layout >
      <Menu allPostsData={allPostsData}></Menu>
    </Layout>
  )
}
