import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const dataCategory = [
    {
        id: "1",
        nameCat: 'River',
        link: "https://plus.unsplash.com/premium_photo-1671363188581-d33b349e82ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "2",
        nameCat: 'Lake',
        link: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "3",
        nameCat: 'Forest',
        link: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "4",
        nameCat: 'Montain',
        link: "https://plus.unsplash.com/premium_photo-1675629118861-dc8aa2acea74?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
const OurCategories = () => {
    return (
        <div className='mx-auto max-w-6xl sm:px-4 py-6'>
            <h2 className='text-3xl uppercase text-center font-bold'>Our Categories</h2>
            <div className="grid gap-2 sm:grid-cols-4 mx-auto sm:overflow-hidden">

                {
                    dataCategory && (
                        dataCategory.map((cat, idx) => (
                            <Link
                                key={idx}
                                href={`category/${cat.nameCat}`}
                                className='mt-4 relative w-[16rem] sm:w-[22rem] h-[250px] sm:h-[500px] mx-auto bg-no-repeat bg-cover rounded-xl group overflow-hidden'
                            >
                                <Image
                                    alt='image category'
                                    fill
                                    className='object-cover transition duration-700 ease-in-out rounded-xl group-hover:scale-125 '
                                    src={cat.nameCat !== null ? `${cat.link}` : ''}
                                />
                                <p className="absolute transform -rotate-45 text-4xl backdrop-blur-md  py-4 text-center w-full bottom-1/3 sm:bottom-1/2  sm:right-10 text-white font-semibold">{cat.nameCat}</p>
                            </Link>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default OurCategories