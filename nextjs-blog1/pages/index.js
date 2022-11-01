import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import React, { useState, useEffect } from "react";
import apiCall from './api/api-call'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}


export default function Home({allPostsData}) {

  // const clientStock = (props) => {
  //   const [chosenStocks, setChosenStocks] = useState([])
  // }

  console.log("This", {allPostsData})


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Link href='/posts/first-post'> Open Profile</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title, article, tags}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {article ? 
              <>
              <h3>Article:</h3>
                {article}
                {/* {id.tags.map((tag)=>(
                  <h4>{tag}</h4>
                ))} */}
              </> :
              <>
                <h3> This post has no article :(( </h3>
              </>}
              <br />

              {tags? 
                <>
                {Object.keys(tags).map((tag, i) => (
                  <h4>#{tags[tag]} </h4>

                ))}
              </>: <>
                  No tags yet!
              </>}
              
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
