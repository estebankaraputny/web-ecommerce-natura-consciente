import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import MenuList from "./menu-list";
import { Menu } from "lucide-react";

const ItemsMenuMobile = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <p className="block">Cremas</p>
                <p>Otros</p>
                <p>Perfumes</p>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;