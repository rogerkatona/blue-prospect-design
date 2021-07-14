import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ClientLogos from '../components/clientLogos'
import HighlightQuoteHurff from "../components/highlight_quote_hurff";
import HighlightContact from "../components/highlight_contact";
import HighlightQuoteWhile from "../components/highlight_quote_while";
import Hero from '../components/hero'

export default function Home() {
  return (
    <Layout className="flex flex-col items-center justify-center  py-2">
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Hero/>

        <ClientLogos/>
        <HighlightQuoteWhile/>
        <HighlightQuoteHurff/>
        <HighlightContact/>
    </Layout>
  )
}
