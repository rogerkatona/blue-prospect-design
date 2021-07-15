import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from "../components/date";
import Image from 'next/image'
import {useEffect, useState} from "react";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Portfolio({allPostsData}) {

    const [active, setActive] = useState(false)

    let featuredPosts = allPostsData.filter(function (featured){
        return featured.isFeatured === 'true' && featured.type === 'portfolio'
    })

    useEffect(() => {
        function scrollMove(){
            const link = document.querySelector('Link')
            const mOut = document.addEventListener(mouseout, '')
            if ([link.href === '/case-studies/:slug*']){
                setActive(true)
                console.log(active)
                return () => {
                    link.removeEventListener("mouseout", handleMouseOut)
                }
            }
        }
    },[active])



    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>
                <section className='md:px-16 md:py-8  px-8 py-4 flex flex-col'>
                    <header className='flex md:flex-row flex-col md:items-center mb-9'>
                        <div className='text-6xl pr-8 text-gray-700 font-light'>
                            Portfolio
                        </div>
                        <div className='text-base  text-gray-500'>
                            Take a look at my recent projects.
                        </div>
                    </header>
                    <section className="mb-4 border-b-4 hover:border-raspberryBright border-medGray bg-gray relative">

                            <div className="absolute top-0 left-0 z-10 bg-raspberryBright p-3 px-12">
                                <p className='font-banner uppercase text-xs text-raspberryBlack '>Featured</p>
                            </div>
                            <div className="w-6 overflow-hidden absolute bottom-0 right-0">
                                <div className="h-8  bg-raspberryBright rotate-45 transform origin-bottom-left">&nbsp;</div>
                            </div>
                        {
                            featuredPosts
                                .map(featured =>
                                    <Link
                                        key={featured.id}
                                        href={`/posts/${featured.id}`}
                                    >
                                        <a>
                                            <div className='flex lg:flex-row lg:items-center lg:order-1 flex-col'>
                                                <div className='lg:w-2/3 w-full'>
                                                    <Image
                                                        priority
                                                        src={featured.imageSourceFeatured}
                                                        height={750}
                                                        width={1770}
                                                        layout="responsive"
                                                        alt={featured.alt}
                                                    />
                                                </div>
                                                <div className='lg:pl-8 p-6'>
                                                    <div className="font-roboto text-2xl tracking-tighter">{featured.title}</div>
                                                    <small className='text-secondary text-xs'>
                                                        <Date dateString={featured.date} />
                                                    </small>
                                                    <div className=''>{featured.description}</div>
                                                    <div className="pt-6">
                                                        <Link href={`/posts/${featured.id}`}>
                                                            <button
                                                                className={`${active ? 'hover:bg-raspberryBright' : ''} text-darkGray uppercase hover:text-darkGray hover:border-white`}>
                                                                Read the full story &#8594;
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                    </Link>
                                )}
                    </section>
                    <section className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                        {allPostsData
                            .filter(featured => featured.type === 'portfolio' && featured.isFeatured !== 'true')
                            .map(({ id, date, title, description, imageSource }) => (
                            <div key={id} className="">
                                <Link href={`/posts/${id}`}>
                                    <a>
                                        <div className="">
                                            <div className=''>
                                                <Image
                                                    priority
                                                    src={imageSource}
                                                    height={1312}
                                                    width={1770}
                                                    layout="responsive"
                                                    alt={'lord-of-the-rings-blogPost'}
                                                />
                                            </div>
                                            <div  className="relative lg:p-6 p-4 bg-gray lg:h-48 h-32">
                                                <div className='font-roboto text-2xl tracking-tighter'>{title}</div>
                                                <div className='text-secondary text-xs'>
                                                    <Date dateString={date} />
                                                </div>
                                                <div className='py-4 truncate xl:block hidden'>{description}</div>
                                                <div className="absolute  bottom-2 lg:left-6 left-4 z-10 ">
                                                    <Link href={`/posts/${id}`}>
                                                        <button className='text-link hover:underline uppercase'>Read more &#8594;</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </section>
                </section>
            </main>

        </Layout>
    )
}