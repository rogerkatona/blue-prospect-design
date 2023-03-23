import Link from "next/link";
import useModal from "../lib/useModal";
import Modal from "./modal";


export default function BookACall_02() {
    const {isShowing, toggle} = useModal();
    return (
        <>
            <section className="flex flex-col lg:py-12 xl:px-0  py-12 px-6 lg:mx-auto lg:max-w-7xl">
                <div className="font-bebasNeue text-3xl text-gray.700 pb-4">
                    Did you know?
                </div>
                <div className="py-4">
                    <span className="text-xl text-gray.700 font-medium">
                        When hosting an event, the invited speaker can make all the difference.
                    </span>
                </div>
                <div className="">
                    <div className="text-gray.700 pt-4">
                        The right speaker will engage the audience and convince them the investment of their time will bring profit.  Dr. Sundar,  as an educational and motivational speaker, will exceed expectations and bring lasting benefits to the audience and sponsoring organization.
                    </div>
                </div>
                <div className="pt-8">
                    <Link href=''>
                        <button
                            onClick={toggle}
                            className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
                            Book A Call
                        </button>
                    </Link>

                </div>
            </section>
            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </>
    )
}






