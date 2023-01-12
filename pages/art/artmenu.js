import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../../components/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Art(){
  return (
    <Layout ><div className='flex flex-col justify-center h-full relative'>
      <div className=" text-5xl font-black lowercase text-center align-middle">Under Development...</div>
      </div>
    
    </Layout>
  )
}
