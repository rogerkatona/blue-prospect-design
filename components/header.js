import NavBar from '../components/navBar'

export default function Header() {
    return (
        <header className="relative h-16">
            <div  className="fixed w-full z-20 ">
                <NavBar/>
            </div>
        </header>
    )
}