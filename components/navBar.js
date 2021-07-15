import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const navItems = [
    {
        id: 0,
        label: "Home",
        path: "/",
    },
    {
        id: 1,
        label: "Portfolio",
        path: "/portfolio",
    },
    {
        id: 2,
        label: "Insight",
        path: "/insight",
    },
    {
        id: 3,
        label: "About",
        path: "/about",
    }
];

export default function NavBar() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)
    const router = useRouter();
    const [posMoved, setPosMoved] = useState(false)
    const pageIndex = router.pathname === '/'

    useEffect(() => {
        function scrollMove(){
            const scrolled = document.scrollingElement.scrollTop
            if (pageIndex === true) {
                if (scrolled <= 100) {
                    setPosMoved(false)
                } else {
                    setPosMoved(true)
                }
            }
        }
        document.addEventListener("scroll", scrollMove);
        return () => {
            document.removeEventListener("scroll", scrollMove)
        }
    },[posMoved])

    useEffect( () => {
        const nav = document.querySelector('nav')
        if (router.pathname !== '/'){
            setPosMoved(true)
        }
    },[])


    return (
        <>
            <nav className={`${posMoved ? 'bg-white' : 'bg-primaryLight'} flex px-8 py-6 lg:items-center lg:flex-row flex-col`}>
                <section className="flex flex-row w-full">
                    <Link href='/'>
                        <a className='flex'>

                            <span className={`${posMoved ? 'text-secondary' : 'text-white'} text-xl font-body uppercase tracking-tight pl-3`}>
                                Blue Prospect Design
                            </span>
                        </a>
                    </Link>
                </section>
                <section className="absolute right-10">
                    <button
                        className="lg:hidden text-secondary hover:text-primary focus:appearance-none border border-transparent"
                        onClick={handleClick}>
                        <svg
                            className='w-6 h-6 '
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </section>
                <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:w-full lg:justify-end lg:mt-0 mt-4`}>
                    {navItems.map((items) => (
                        <div
                            key={items.id}
                            className="flex flex-col lg:my-0 my-2 hover:bg-hoverNav">
                            <Link
                                href={items.path}>
                                <a className={`${posMoved ? 'text-secondary' : 'text-white'} px-3 py-2 text-sm font-body uppercase  hover:text-white`}>{items.label}</a>
                            </Link>
                        </div>
                    ))}
                    <Link href='/contact'>
                        <button
                            className={`${posMoved ? 'border-secondary text-secondary' : 'text-white'} hover:bg-hoverNav text-white text-sm uppercase hover:text-gray-50 py-1 px-8 border hover:border-hoverNav lg:mt-0  lg:ml-6`}>
                            Contact
                        </button>
                    </Link>
                </section>
            </nav>
        </>
    );
};