import Image from "next/image";

export default function HighlightQuoteKalvera() {
    return (
        <section className="bg-primaryLight bg-opacity-5 w-full my-24">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto lg:py-24 p-12">
                <div className='flex flex-col flex-shrink-0 mr-24 hidden lg:block'>
                    <img
                        src="/image/quote-graphic.png"
                        height={198}
                        width={56}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col my-12">
                <span className="lg:text-3xl text-2xl">
                        "Blue Prospect Design did a web analysis for my company Kalvera.  We
                    knew our conversation rates were lower than expected, but didn&apos;t realize the primary cause was a frustrating registration process.  We spend many dollars on marketing, this was an incredible finding that increased our conversions by 22%!
                    </span>
                    <span className="font-bold text-sm mt-2">
                        Kalpana Sundar <br/>
                        <span className="font-light">
                            Physician, Entrepreneur, Author, Speaker, Adventurer
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






