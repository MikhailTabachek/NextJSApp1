import Script from 'next/script'
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from '../../components/layout'

export default function FirstPost(){
  return(
    <>
    <Layout>
      <Head>
        <title> First Post</title>
        <Script 
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy='lazyOnLoad'
          onLoad={()=>
          console.log("Script loaded correctly!!!")}
        />
        </Head>
        <h1>First Post!</h1>
        this is inside the layout
        <p> This is a test Next App</p>
        
        <Link href="/">Back to main page </Link>
    </Layout>
    </>
  ) 
}