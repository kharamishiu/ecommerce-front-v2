'use client'

import Image from 'next/image'

// Definimos los tipos de layouts que pueden tener nuestras imágenes
type ImageLayout = {
    src: string
    alt: string
    className: string
}
// Función para generar un layout aleatorio

const layouts: ImageLayout[] = [
    {
        src: "https://images.unsplash.com/photo-1695158679112-e22d551834af?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Nature", className: "sm:col-span-2"
    },
    { src: "https://images.unsplash.com/photo-1534142499731-a32a99935397?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "City", className: "col-span-3 sm:col-span-2 md:col-span-3" },
    { src: "https://plus.unsplash.com/premium_photo-1667323782086-7a3ea4ae9680?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Portrait", className: "col-span-2 sm:row-span-1 sm:col-span-2 " },
    { src: "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Food", className: "col-span-2 sm:row-span-3 md:col-span-3" },
    { src: "https://images.unsplash.com/photo-1502140685919-43d9f109067b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Landscape", className: "col-span-4 md:col-span-2" },
    { src: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Technology", className: "row-span-2 md:col-span-2" },
    { src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Abstract", className: "col-span-3 md:col-span-4" },
    { src: "https://plus.unsplash.com/premium_photo-1673264933061-f1ea43b13032?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Travel", className: "col-span-3 md:col-span-1" },
]




const CollageImages = () => {

    return (
        <div className="w-full mx-auto p-4">
            <h2 className='text-2xl sm:text-3xl uppercase font-bold text-center mb-4'>Collage </h2>
            <div className="grid grid-cols-4 gap-2 md:grid-cols-5 lg:grid-cols-7 mx-auto">
                {layouts.map((layout, index) => (
                    <div key={index} className={layout.className}>
                        <Image
                            src={layout.src || "/placeholder.svg"}
                            alt={layout.alt}
                            width={800}
                            height={800}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CollageImages