import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utiStyles from '../styles/utils.module.css'
import React, { useState, useEffect } from "react";
import apiCall from './api/api-call'

export default function Home() {

  // const clientStock = (props) => {
  //   const [chosenStocks, setChosenStocks] = useState([])
  // }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Link href='/posts/first-post'> Open Profile</Link>
      </section>
    </Layout>
  )
}
