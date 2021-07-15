import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Form from "../components/form";
import Toast from "../components/toast";
import global from "../lib/global";

export default function Contact() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <main className="mt-24">
                {/*<p>Status: {global.form.showSuccess}</p>*/}
                {/*<Toast/>*/}

                <section className='px-16 py-8 flex flex-col'>
                    <section className='flex flex-col md:flex-row items-baseline mb-8'>
                        <div className='text-6xl pr-8 text-gray-700 font-light'>
                            Contact
                        </div>
                        <div className='text-base text-gray-500'>
                            Let&apos;s connect.
                        </div>
                    </section>

                    <section className="flex flex-col md:flex-row justify-center h-screen75vh">

                            <div className="flex flex-col justify-center md:p-16 p-8 bg-bg-contactModal bg-no-repeat bg-cover ">
                                <div className="">
                                    <p className="text-lightGray md:pb-16 pb-6">I look forward to getting to know you and working on something great!</p>
                                </div>
                                <div className="text-lightGray">
                                    <span className="">Roger Katona</span>
                                    <p>roger.katona@gmail.com</p>
                                    <p>904-450-5173</p>
                                </div>
                            </div>
                            <div className="md:p-16 p-8 bg-gray w-full flex flex-col justify-center">
                                <Form/>
                            </div>

                    </section>

                </section>
            </main>
        </Layout>
    )
}