import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta property="og:url" content={postData.ogURL} key="openGraphURL" />
                <meta property="og:type" content={postData.ogtype} />
                <meta property="og:title" content={postData.title} key="title"/>
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={postData.ogImage} />
            </Head>
            <article className="bg-primaryLight md:px-12 md:py-6 px-4 py-2 text-white">
                <div className='my-4 mt-6'>
                    <Link
                        href={`/${postData.type}`}>
                        <a className='hover:underline'>&#8592; See all {`${postData.type}`} </a>
                    </Link>
                </div>

                <h1 className="font-banner text-3xl mt-6 font-bold">{postData.title}</h1>
                <div className='font-banner text-xs mb-4 mt-2 text-lightGray'>
                    <Date dateString={postData.date} />
                </div>
                <hr/>

                <section className='flex flex-row items-center m-4 ml-0 ' >
                    <section className='flex items-center md:w-72 w-96'>
                        <div className='mr-4'>
                            <img
                                priority
                                src={postData.authorImageSource}
                                height={80}
                                width={80}
                            />
                        </div>
                        <div className=''>
                            <div className='font-medium'>{postData.author}</div>
                            <div className='text-lightGray text-xs'>{postData.authorDescription}</div>
                        </div>
                    </section>
                    <section className='flex flex-row justify-end w-full'>
                        <div className='mr-2'>
                            <Link
                                href={`${postData.authorLinkedInURL}`}>
                                <a>
                                    <img
                                        priority
                                        src='/images/icon-linkedIn.png'
                                        height={32}
                                        width={32}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className='mr-2'>
                            <Link
                                href={`${postData.authorInstagramURL}`}>
                                <a>
                                    <img
                                        priority
                                        src='/images/icon-Instagram.png'
                                        height={32}
                                        width={32}
                                    />
                                </a>

                            </Link>
                        </div>
                        <div>
                            <Link
                                href={`${postData.authorTwitterURL}`}>
                                <a>
                                    <img
                                        priority
                                        src='/images/icon-Twitter.png'
                                        height={32}
                                        width={32}
                                    />
                                </a>

                            </Link>
                        </div>
                    </section>

                </section>
                <section>
                    <div className='md:mb-6'>
                        <img
                            priority
                            src={postData.bannerImageSource}
                            height={401}
                            width={1626}
                            layout="responsive"
                        />
                    </div>
                </section>
                <div className='flex flex-row '>
                    <section className='mb-12'>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </section>
                    {/*<section className='w-1/2 ml-12 mt-8 text-xs lg:block sm:hidden'>*/}
                    {/*    <div>*/}
                    {/*        <div>Table of Contents</div>*/}
                    {/*        <div>{postData.headline1}</div>*/}
                    {/*        <div>{postData.headline2}</div>*/}
                    {/*        <div>{postData.headline3}</div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>
            </article>
        </Layout>
    )
}