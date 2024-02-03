import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from './Slider';
import Header from './components/Header';
import PdfCardContainer from './components/PdfCardContainer';
import ConvertCardFirstContainer from './components/ConvertCardFirstContainer';
import ConvertCardSecondContainer from './components/ConvertCardSecondContainer';
import Footer from './components/Footer';
// import ConvertCardThirdContainer from './components/ConvertCardThirdContainer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Markup Hero</title>
        <meta name="description" content="Designed By Wahab Nadeem" />
        <link rel="icon" href="/favicon.ico" />
        <link href="./output.css" rel="stylesheet"></link>
      </Head>
      <Header/>
      <PdfCardContainer/>
      {/* <ConvertCardThirdContainer/> */}
      <Slider/>
      <ConvertCardFirstContainer/>
      <ConvertCardSecondContainer/>
      <Footer/>
      
    </div>
  )
}
