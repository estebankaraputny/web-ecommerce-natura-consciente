"use client";

import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "@/types/response";
import Link from "next/link";

const ChooseCategory = () => {
    const { result, loading, error }: ResponseType = useGetCategories();

    console.log("Resultado completo:", JSON.stringify(result, null, 2));

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-6 lg:px-8">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">
                Elige tu categoría favorita
            </h3>
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {!loading && result !== undefined && result.length > 0 ? (
                    result.map((category: any) => {
                        // Validar que las propiedades existan
                        const imageUrl = category.mainImage?.url
                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`
                            : null;

                        const categoryName = category.categoryName || "Categoría sin nombre";

                        return (
                            <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt={categoryName}
                                        className="max-w-[270px] h-100 transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                    />
                                ) : (
                                    <p className="text-gray-500">Imagen no disponible</p>
                                )}
                                <p className="text-center mt-2 font-semibold">{categoryName}</p>
                            </Link>
                        );
                    })
                ) : (
                    <p className="text-gray-500">No hay categorías disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ChooseCategory;