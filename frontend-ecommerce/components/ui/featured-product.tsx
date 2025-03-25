"use client"

import { useGetFeaturedProductos } from "@/api/useGetFeaturedProducts"; 
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response"; 
import { Card, CardContent } from "./card";


const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProductos();

    console.log("Resultados de la API", result);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:p-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={4} />}
                    {result !== null &&
                        result.map((product: ProductType) => {
                            const { id, productName, images } = product; 

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/4 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]?.url}`}
                                                alt={productName}
                                                className="object-cover w-32 h-32"
                                            />
                                                <p className="text-lg font-semibold text-gray-800">{productName}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;