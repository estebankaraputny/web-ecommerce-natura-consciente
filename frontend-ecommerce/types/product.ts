export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean; // Nota: corregí el typo de "isFeactured" a "isFeatured"
    category: {
        id: number;
        documentId: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
    };
    price: number;
    images: {
        id: number;
        url: string;
    }[];
};