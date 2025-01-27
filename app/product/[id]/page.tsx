'use client'

import { Button } from '@/components/ui/button'
import { products } from '@/lib/data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useState, use } from 'react'


const Page = ({ params }: { params: Promise<{ id: string }> }) => {


    const resolvedParams = use(params)
    const product = products.find(p => p.id === Number.parseInt(resolvedParams.id))
    const [mainImage, setMainImage] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)

    if (!product) {
        notFound()
    }

    const addQty = () => {

        setQuantity((prev) => prev + 1)
    }
    const removeQty = () => {
        if (quantity === 1) return
        setQuantity((prev) => prev - 1)
    }


    return (
        <div className='max-auto py-4 container mb-8 px-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="col-span-3 sm:col-span-1">


                    <Image
                        src={
                            product.images && (

                                product.images[mainImage] || "/placeholder.svg"
                            )
                        }
                        alt={product.name}
                        width={500}
                        height={400}
                        priority
                        className='w-full object-cover rounded-lg shadow-lg'
                    />



                </div>
                <div className='col-span-3 sm:col-span-2'>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 mb-4">
                        {


                            product.stock && product.stock > 0 ? (
                                <>
                                    <Button
                                        onClick={removeQty}
                                        className='font-bold bg-gray-200 text-black hover:bg-gray-300 text-lg'>-</Button>
                                    <p className='text-lg font-medium'>{quantity}</p>
                                    <Button
                                        onClick={addQty}
                                        className='font-bold bg-gray-200 text-black hover:bg-gray-300 text-lg'>+</Button>
                                </>
                            ) : (

                                <p className='font-semibold text-orange-800'>No hay Stock</p>
                            )


                        }
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Añadir al carrito
                    </button>
                </div>

                <div className="my-4 flex space-x-2 sm:col-span-2">
                    {
                        product.images && (
                            product.images.map((img, idx) => (
                                <Button
                                    key={idx}
                                    onClick={() => setMainImage(idx)}
                                    className={`relative aspect-[4/3] w-24 h-20 border-2 ${idx === mainImage ? "border-blue-600" : "ring-1 ring-gray-200 hover:ring-2 hover:ring-blue-400"
                                        } rounde-md overflow-hidden`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} thumbnail ${idx + 1}`}
                                        fill
                                        sizes='80px'
                                        className='w-20 h-14 object-cover'
                                    />

                                </Button>

                            ))
                        )
                    }
                </div>


            </div >

        </div >
    )
}

export default Page