import AboutVideo from "./aboutVideo";

export default function AboutHero() {
    return (
        <section className="">
            <div className="flex lg:flex-row flex-col flex-col-reverse justify-center items-center max-w-7xl mx-auto lg:px-0 px-12">
                <div className="lg:w-5/6 w-full">
                    <div className="lg:text-3xl text-2xl py-8 lg:pt-0">
                        &quot;In web design we have many elements like forms, typography, content, colors, and images.
                        The ability to craft these into an amazing user experience is artistry.&quot;
                    </div>
                    <AboutVideo/>
                </div>
                <div className=''>
                    <img
                        src={'/image/banner-rk.png'}
                        height={650}
                        width={1001}
                        alt={'roger katona - web designer'}
                    />
                    <div className='text-lg -mb-2 font-medium'>
                    Roger Katona
                </div>
                <div> Owner / Principal UI/UX Designer</div>
                </div>

            </div>

        </section>


    )
}