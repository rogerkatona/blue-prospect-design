import Link from "next/link";


export default function Footer() {


    return (
        <footer className="flex justify-center p-24 bg-primary text-white">
            <div className='flex md:flex-row flex-col'>
                <Link href='/'>
                    <a className='px-3 py-2 text-sm font-body uppercase hover:bg-hoverNav hover:text-white'>
                        Home
                    </a>
                </Link>
                <Link href='/portfolio'>
                    <a className='px-3 py-2 text-sm font-body uppercase hover:bg-hoverNav hover:text-white'>
                        Portfolio
                    </a>
                </Link>
                <Link href='/insights'>
                    <a className='px-3 py-2 text-sm font-body uppercase hover:bg-hoverNav hover:text-white'>
                        Insights
                    </a>
                </Link>

                <Link href='/about'>
                    <a className='px-3 py-2 text-sm font-body uppercase hover:bg-hoverNav hover:text-white'>
                        About
                    </a>
                </Link>
                <Link href='/contact'>
                    <button
                        className='hover:bg-hoverNav text-white text-sm uppercase hover:text-gray-50 py-1 px-8 border hover:border-hoverNav '>
                        Contact
                    </button>
                </Link>
            </div>
        </footer>
    )
}