"use client";

import { useEffect, useState } from "react";

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Error en la API: ${res.statusText}`);
                }
                const json = await res.json();
                setResult(json.data);
            } catch (err: any) {
                console.error("Error al obtener productos destacados:", err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    
    return { loading, result, error };
}