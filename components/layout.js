import Head from 'next/head'
import Header from "./header";
import Footer from "./footer";

export const siteTitle = 'Blue Prospect Web Studio'

export default function Layout({ children}) {

    return (
        <>
            <div className="flex flex-col p-2">
                <Head>
                    <title>{siteTitle}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="og:title" content={siteTitle} key="title"/>
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}