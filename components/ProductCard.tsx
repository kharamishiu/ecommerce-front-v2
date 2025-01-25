"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/data"
import Link from "next/link"

/*interface Product {
    id: number
    name: string
    price: number
    image: string
    hoverImage: string
}*/

export default function ProductCard({ product }: { product: Product }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card
            className="overflow-hidden flex flex-col h-full  shadow-md hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardContent className="p-0 relative flex-grow">
                <div className="aspect-square relative overflow-hidden">
                    <Link href={`/product/${product.id}`} >
                        <Image
                            src={isHovered ? product.hoverImage : product.mainImage}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transition-opacity duration-300"
                        />
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button className="w-full">add cart</Button>
            </CardFooter>
        </Card>

    )
}

