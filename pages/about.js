import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HighlightContact from "../components/highlight_contact";



export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>
                <section className='px-16 py-8 flex flex-col'>
                    <section className='flex flex-row items-baseline mb-8'>
                        <div className='text-6xl pr-8 text-gray-700 font-light'>
                            About
                        </div>
                        <div className='text-base text-gray-500'>
                            &nbsp;
                        </div>
                    </section>
                    <HighlightContact/>
                </section>
            </main>
        </Layout>
    )
}