import { NextPage } from 'next'
import { useRouter } from 'next/router'


import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'
import Header from '../components/Header'

const ResultPage: NextPage = () => {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>

  return (

      <div className="page-container">
        <Header/>
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>

      </div>

  )
}

export default ResultPage
