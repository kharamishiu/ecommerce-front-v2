'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const dataCarousel = [
    {
        id: 1,
        title: "loremps  del tirri",
        link: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "loremps  del tirri",
        link: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        title: "loremps  del tirri",
        link: "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "loremps  del tirri",
        link: "https://plus.unsplash.com/premium_photo-1675873580278-f5a6ea2a6f0a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export const Carrousel = () => {


    return (
        <Carousel
            opts={{
                align: "center",
                containScroll: false
            }}
            plugins={[
                Autoplay({
                    delay: 6000,
                }),
            ]}
            className="w-full max-w-7xl mx-auto p-1"
        >
            <CarouselContent >
                {
                    dataCarousel.map((dat, idx) => (
                        <CarouselItem key={idx}>
                            <Card className="">
                                <CardContent className="flex items-center justify-center p-1 ">
                                    <div className="relative aspect-[16/6] w-full">
                                        <div className="absolute z-10 inset-0 flex items-start justify-start p-2">
                                            <h2 className="text-2xl sm:text-4xl
                                             text-blue-300
                                             bg-black bg-opacity-40 rounded px-4 py-2
                                            mt-4                                            
                                            ">
                                                {dat.title}
                                            </h2>
                                        </div>
                                        <Image
                                            src={dat.link}
                                            alt={`image-${idx}`}
                                            fill
                                            className="object-cover rounded-lg"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 33vw"
                                        />
                                    </ div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}


