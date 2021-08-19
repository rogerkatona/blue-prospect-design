import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ServiceItem from "../components/serviceItem";
import serviceItems from "../data/serviceItems";
import ServicesBanner from "../components/services_banner";

export default function Services() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="">
                <section className=' max-w-7xl mx-auto mt-12 xl:px-0 md:px-12 px-6'>
                    <header className='mb-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Services
                        </div>
                    </header>
                </section>
                <ServicesBanner/>
                <section className="py-12 xl:px-0 px-12">
                    <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className='font-roboto text-4xl tracking-tighter py-6'>Blue Prospect Design Studio Provides...</div>
                            <div className="lg:text-2xl text-xl pt-4">User experience (UX) audit services for existing digital products, user interface (UI), user experience, graphic design,
                                and development services for brand new and existing products.
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 md:pb-0 mt-12 ">
                                <ServiceItem serviceItems={serviceItems}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </Layout>
    )
}