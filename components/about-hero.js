import AboutVideo from "./aboutVideo";

export default function AboutHero() {
    return (
        <section className="bg-primaryLight bg-opacity-5 py-36 xl:px-0 px-12">
            <div className="flex lg:flex-row flex-col flex-col-reverse justify-center items-center max-w-7xl mx-auto lg:px-0 px-12">
                <div className="w-full">
                    <div className="lg:text-3xl text-2xl py-12 lg:pt-0">
                        &quot;In web design we have many elements like forms, typography, content, colors, and images.
                        The ability to craft these into an amazing user experience is data-driven artistry.&quot;
                    </div>
                    <AboutVideo/>
                </div>
                <div className="md:pl-12">
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