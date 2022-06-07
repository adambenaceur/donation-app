import type { NextPage } from 'next'
import Head from 'next/head'
import CheckoutForm from '../components/CheckoutForm'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Donate: NextPage = () => {

  return (

      <div>
        <Head>
          <title>Astrano</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
        <Header/>
        <div className='donationHero'>
          <div className="page-container">
            <h1>Donate with Checkout</h1>
            <p>Donate to our project 💖</p>
            
            <CheckoutForm />
          </div>
        </div>
        <Footer/>
      </div>

  )
}

export default Donate
