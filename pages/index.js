import Head from 'next/head'
import Navbar_com from '../components/Navbar_com'

export default function Home() {
  return (
    <>
      <Head>
          <title>PMPS</title>
          <link rel="icon" href="/assets/webicon.ico" />
      </Head>
      <div className="homepage">
          <Navbar_com />
      </div>
    </>
  )
}
