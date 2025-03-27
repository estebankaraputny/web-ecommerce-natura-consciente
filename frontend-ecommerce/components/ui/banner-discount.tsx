import Link from "next/link";
import { buttonVariants } from "./button";

const BannerDiscount= () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">
                Consigue hasta un 25% de descuento en productos seleccionados
            </h2>
            <h3 className="mt-3 font-semibold text-lg text-gray-500">
                20% de descuento con tu compra de $60.000 o 25% de descuento con tu compra de $100.000. Usa el código de CONSCIENTEWEB
            </h3> 
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Ver más</Link>
            </div>
        </div>
    );
}

export default BannerDiscount;