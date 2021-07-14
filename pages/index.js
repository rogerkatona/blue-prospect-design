import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'



export default function Home() {
  return (
    <Layout className="flex flex-col items-center justify-center  py-2">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 p-20 text-center bg-primaryLight h-screen">
          <img src="images/logo-bp.png" alt="Blue Prospect Logo" width={1285} height={473} />
        <p className="mt-3 text-xl px-0 w-2/3 mt-24 text-white">
          Our site will probably be up very soon!  If you are interested in knowing what is happening at this very moment, picture a dude on the side of the road with hood up, smoke billowing, head scratching.
        </p>
      </div>
    </Layout>
  )
}
