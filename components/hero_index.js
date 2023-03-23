import AnimatedTitle from "../lib/animatedTitle";
import { motion } from "framer-motion"


export default function HeroIndex({ children, home}) {
    return (
        <>
            <section className="flex lg:h-screen90vh h-screen80vh bg-lightBlue.500 flex-col justify-center items-center md:px-24 px-6">
                <div className="font-gloock md:text-7xl text-5xl text-center text-white.100 mr-0.5">
                     <AnimatedTitle
                         text={"Let's reach your audience!"}
                     />
                </div>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: .50, delay:1 }}
                >
                    <div className="font-gloock text-2xl text-center text-medBlue.100 md:pt-8 pt-2 ">
                        At Blue Prospect, we create a bespoke web presence as unique as you.
                    </div>
                </motion.div>

            </section>

            <section className='flex flex-col absolute md:bottom-8 bottom-0 md:w-full md:pr-4 pr-2 lg:block hidden'>
                <img
                    src="/image/hero-cityscape.png"
                    alt={'hero graphic - cityscape'}
                />
            </section>

        </>
    )
}