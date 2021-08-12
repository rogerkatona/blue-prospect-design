import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ClientLogos from "../components/clientLogos";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import HighlightQuoteHurff from "../components/highlight_quote_hurff";
import HighlightContact from "../components/highlight_contact";
import HighlightQuoteWhile from "../components/highlight_quote_while";
import Hero from "../components/hero"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {

  let featuredPosts = allPostsData.filter(function (featured){
    return featured.isFeatured === 'true'
  })

  return (
    <Layout className="flex flex-col items-center justify-center  py-2">
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Hero/>
        <ClientLogos/>
        <HighlightQuoteWhile/>
      <section className='xl:m-24 m-8 '>
        {
          featuredPosts
              .filter(featured => featured.type === 'articles')
              .map(featured =>
                  <div key={featured.id} className='flex lg:flex-row flex-col max-w-7xl mx-auto'>
                    <div className='flex'>
                      <img
                          src={featured.bannerSMImageSource}
                          height={750}
                          width={1770}
                          alt={'Featured Article'}
                      />
                    </div>
                      <div className='flex lg:pl-12 lg:py-0 pt-8 pb-0'>
                          <div className='lg:mx-auto flex flex-col lg:justify-center'>
                              <div className='font-roboto text-3xl tracking-tighter '>
                                  {featured.title}
                              </div>
                              <div className='text-secondary text-xs'>
                                  <Date dateString={featured.date} />
                              </div>
                              <div className='text-black text-xl py-4'>{featured.description}</div>
                              <Link href={`/articles/${featured.id}`}>
                                  <a className='text-link hover:underline uppercase'>Read Featured Article &#8594;</a>
                              </Link>
                          </div>
                      </div>
                  </div>
              )}
      </section>
        <HighlightQuoteHurff/>
      <section className='lg:m-24 m-8 '>
        {
          featuredPosts
              .filter(featured => featured.type === 'work')
              .map(featured =>
                  <div key={featured.id} className='flex lg:flex-row lg:flex-row-reverse flex-col max-w-7xl mx-auto'>
                      <div className=''>
                          <img
                              src={featured.imageSourceFeatured}
                              height={650}
                              width={1000}
                              alt={'featured portfolio project'}
                          />
                      </div>
                      <div className='flex lg:pr-12 lg:py-0 pt-8 pb-0 lg:w-2/3'>
                          <div className='lg:mx-auto flex flex-col lg:justify-center'>
                              <div className='font-roboto text-3xl tracking-tighter '>
                                  {featured.title}
                              </div>
                              <div className='text-secondary text-xs'>
                                  <Date dateString={featured.date} />
                              </div>
                              <div className='text-black text-xl py-4'>{featured.description}</div>
                              <Link href={`/portfolio/${featured.id}`}>
                                  <a className='text-link hover:underline uppercase'>Read The Full Story &#8594;</a>
                              </Link>
                          </div>
                      </div>
                  </div>
              )}
      </section>
        <HighlightContact/>
    </Layout>
  )
}
