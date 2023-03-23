import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";
import useModal from "../lib/useModal";
import Modal from "./modal";


export default function Footer() {
    const {isShowing, toggle} = useModal();

    return (
        <footer className="flex flex-col justify-center md:items-center md:px-0 px-6 bg-lightBlue.700 text-white py-48 space-y-6">
            <section>
                <Link href='/'>
                    <span>
                        <div className="flex flex-row items-center ">
                            <Link
                                href='/'>
                                <span>
                                    <img
                                        src="/image/logo/blue-prospect-simple.png"
                                        width={200}
                                        alt='Blue Prospect Logo'
                                    />
                                </span>
                            </Link>
                        </div>
                    </span>
                </Link>
            </section>

            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
            </div>
            <div>
                <Link href=''>
                    <button
                        onClick={toggle}
                        className="hover:bg-rust.800 hover:text-white.100 hover:border-rust.800 text-xs text-gray.200 uppercase px-3 py-2  border border-gray.200 rounded-lg">
                        Contact Us
                    </button>
                </Link>
            </div>
            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </footer>
    )
}