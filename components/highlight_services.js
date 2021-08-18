import ServiceItem from "./serviceItem";
import serviceItems from "../data/serviceItems";


export default function HighlightServices() {
    return (
        <>
        <section className="py-24 xl:px-0 px-12">
            <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
                <div className="flex flex-col lg:mx-0 mx-10 lg:mt-0 mt-12 items-center justify-center text-center">
                    <div className='font-roboto text-4xl tracking-tighter py-6'>Blue Prospect Design Studio Provides...</div>
                    <div className="lg:text-3xl text-2xl pt-4">User experience (UX) audit services for existing digital products, user interface (UI), user experience, graphic design,
                        and development services for brand new and existing products.
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 md:pb-0 mt-12 ">
                        <ServiceItem serviceItems={serviceItems}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}






