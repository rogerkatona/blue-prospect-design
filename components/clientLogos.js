import Image from "next/image";

export default function ClientLogos({ children, type }) {
    return (
        <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 items-center gap-10 justify-items-center m-24">
            <div>
                <img
                    src="image/logo/logo-fblue.png"
                    height={60}
                    width={125}
                    alt={'floridaBlue'}
                />
            </div>
            <div>
                <img
                    src="/image/logo/logo-mckesson.png"
                    height={26}
                    width={190}
                    alt={'mckesson'}
                />
            </div>
            <div>
                <img
                    src="/image/logo/logo-rsfx.png"
                    height={30}
                    width={276}
                    alt={'rsfx'}
                />
            </div>
            <div>
                <img
                    src="/image/logo/logo-simplymedical.png"
                    height={38}
                    width={200}
                    alt={'simplymedical'}
                />
            </div>
            <div>
                <img
                    src="/image/logo/logo-mobymax.png"
                    height={34}
                    width={130}
                    alt={'mobymax'}
                />
            </div>
            <div>
                <img
                    priority
                    src="/image/logo/logo-websense.png"
                    height={27}
                    width={156}
                    alt={'websense'}
                />
            </div>
        </section>
    )
}






