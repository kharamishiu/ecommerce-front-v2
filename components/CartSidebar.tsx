import { useState } from 'react'
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import CartSheet from './CartSheet';


const CartSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [itemCount, setItemCount] = useState(4) // Este estado debería ser manejado globalmente en una app real

    return (

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative bg-transparent border-none hover:bg-transparent">
                    <ShoppingCart className='w-6 h-6' color='white' />
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <CartSheet />
        </Sheet>
    )
}

export default CartSidebar