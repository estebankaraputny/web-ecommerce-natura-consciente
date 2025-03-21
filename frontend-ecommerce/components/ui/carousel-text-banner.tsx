"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Card, CardContent } from "./card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title:"Envio a domicilio",
        description:"A todo el país",
        link: "#$"
    },
    {
        id: 2,
        title:"Descuentos exclusivos para vos",
        description:"Entra a la sección de descuentos",
        link: "#$"
    }, {
        id: 3,
        title:"Todos tus productos al alcance de un clic",
        description:"Encarga lo que más te guste.",
        link: "#$"
    },
    {
        id: 4,
        title:"Envio a domicilio",
        description:"Te amo mi camilita hermosa",
        link: "#$"
    }
]

const CarouselTextBanner = () => {
    const router = useRouter();

  return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 5000
                    })
                ]}
            >

                <CarouselContent>

                {dataCarouselTop.map(({ id, title, description, link }) => (
                    <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;