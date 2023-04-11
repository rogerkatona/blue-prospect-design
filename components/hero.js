import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="flex flex-row max-w-7xl mx-auto md:px-24 p-6 md:py-48 py-24 ">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="">
                    <div className="text-center">
                        <div className={`${filteredItem.background === 'dark'  ? 'text-white.100' : 'text-lightBlue.500'} font-bebasNeue md:text-7xl text-6xl uppercase`}>{filteredItem.label}</div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-tan.300' : 'text-lightBlue.500'}  font-medium text-center `}>{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}