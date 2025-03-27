"use client"

import { useGetFeaturedProductos } from "@/api/useGetFeaturedProducts"; 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response"; 
import { Card, CardContent } from "./card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";



const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProductos();
    const router = useRouter();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:p-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={3} />}
                    {result !== null &&
                        result.map((product: ProductType) => {
                            const { id, productName, images, slug } = product; 

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none sm:shadow-md group-hover:shadow-lg">
                                            <CardContent className="relative flex flex-col items-center justify-center px-6 py-2">
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]?.url}`}
                                                    alt={productName}
                                                    className="object-cover w-32 h-32 mb-4"
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton 
                                                        onClick={() => router.push(`product/${slug}`)} 
                                                        icon={<Expand size={20}/>}
                                                        className="text-gray-600"
                                                        />
                                                        <IconButton onClick={() => console.log("Añadir al carrito")}
                                                         icon={<ShoppingCart size={20}/>}
                                                         className="text-gray-600"
                                                         />

                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between px-8 gap-4">
                                                <h3 className="text-lg font-semibold">
                                                    {productName}
                                                </h3>
                                                <div className="flex items-center gap-3 justify-between">
                                                    <p className="px-2 py-1 text-white bg-orange-900 rounded-full w-fit">
                                                        ${product.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;