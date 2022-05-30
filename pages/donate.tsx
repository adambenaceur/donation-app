import type { NextPage } from 'next'
import CheckoutForm from '../components/CheckoutForm'
import Header from '../components/Header'


const Donate: NextPage = () => {

  return (

      <div className="page-container">
        <Header/>
        <h1>Donate with Checkout</h1>
        <p>Donate to our project 💖</p>
        <CheckoutForm />
      </div>

  )
}

export default Donate
