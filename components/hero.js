
export default function Hero({ children, home }) {
    return (
        <section className="flex lg:h-screen90vh h-screen65vh bg-primaryLight flex-row justify-center items-center">
            <div className="lg:bg-center bg-no-repeat xl:px-0 md:px-12 px-6">
                <img
                    src="/image/logo-bp.png"
                />
            </div>
        </section>
    )
}