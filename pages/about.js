import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import BookACall_01 from "../components/bookACall_01";

export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-hero-about min-h-screen20vh max-h-screen20vh bg-cover bg-right bg-no-repeat">
                <Hero id={5}/>
            </div>
            <section className="pt-12">
                <div className="flex flex-col">
                    <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row-reverse flex-col">
                        <div className=''>
                            <img
                                src="/image/service-01.jpg"
                                width={1000}
                                alt={'Dr. Kalpana Sundar - About'}
                            />
                        </div>
                        <div className="lg:w-4/5 w-full">
                            <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>A design firm that specializes in helping UX Teams maximize their resources.</div>
                            <p className="lg:p-12 p-4 pt-6">She realized quickly during her residency that women faced different challenges in medicine. Both her children, now grown, were born during her residency.
                                From residency, she started in her own private practice. Within months of starting her own practice, thyroid cancer gave her a big wake up call.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-12">
                <div className="flex flex-col ">
                    <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row flex-col">
                        <div className=''>
                            <img
                                src="/image/service-01.jpg"
                                width={1000}
                                alt={'Dr. Kalpana Sundar - About'}
                            />
                        </div>
                        <div className="lg:w-4/5 w-full lg:pt-0">
                            <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>...diagnosis of thyroid cancer within months of starting her private practice</div>
                            <div className="lg:p-12 p-4 pt-6">
                                <p>Between the births of her two children during her residency and the diagnosis of thyroid cancer within months of starting her private practice, Dr. Sundar experienced a level of stress in her personal and career life that changed her definition of success.</p>
                                <p>She realized how much she enjoyed helping women look and feel their best. Dr Sundar&apos;s frustration with the toxic solutions recommended for skin care and anti-aging led her to create her own nontoxic healthy skin care regimen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-12">
                <div className="flex flex-col pb-12 ">
                    <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row-reverse flex-col">
                        <div className=''>
                            <img
                                src="/image/service-01.jpg"
                                width={1000}
                                alt={'Featured Article'}
                            />
                        </div>
                        <div className="lg:w-4/5 w-full lg:pt-0 ">
                            <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>Her passion is to see women in medicine, in particular, find successes of their own with clarity, authenticity and courage.</div>
                            <div className='lg:p-12 p-4 pt-6'>
                                <p>Dr. Sundar is passionate about empowering women, specifically women in medicine, to live their most authentic lives. Her goal is to help women in medicine deal with the ever changing landscape of medicine with clarity. Clarity to embrace their gifts, clarity to use their voices authentically and clarity to make changes as necessary.</p>
                                <p>Empowering all women to live authentic lives is at the heart of Dr. Sundar&apos;s own view of personal success. Her passion is to see women in medicine, in particular, find successes of their own with clarity, authenticity and courage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-12">
                <div className="flex flex-col  ">
                    <div className="flex max-w-7xl mx-auto lg:px-0 md:px-12 px-4 lg:flex-row flex-col">
                        <div className=''>
                            <img
                                src="/image/service-01.jpg"
                                width={1000}
                                alt={'Featured Article'}
                            />
                        </div>
                        <div className="lg:w-4/5 w-full lg:pt-0">
                            <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>...we have the power to create and recreate ourselves as often as we feel is necessary.</div>
                            <div className="lg:p-12 p-4 pt-6">
                                <p>Life is a canvas, and like artists, we have the power to create and recreate ourselves as often as we feel is necessary. I look at my life with joy.  I enjoy and am inspired by my work. I have strong relationships. I have time to nourish myself and pursue activities that excite me.  I feel empowered.  I want to show others how to reclaim joy in their careers and personal lives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray.050 ">
                <BookACall_01/>
            </div>
        </Layout>
    )
}



