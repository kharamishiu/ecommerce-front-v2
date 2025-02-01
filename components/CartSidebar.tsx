import { useEffect, useState } from 'react'
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import CartSheet from './CartSheet';


const CartSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [itemCount, setItemCount] = useState(0) // Este estado debería ser manejado globalmente en una app real


    // Simular la actualización del conteo de items
    useEffect(() => {
        const updateItemCount = () => {
            // Aquí deberías obtener el conteo real de items del carrito
            // Por ahora, usaremos un valor aleatorio entre 0 y 10
            const newCount = Math.floor(Math.random() * 6)
            setItemCount(newCount)
        }

        // Actualizar el conteo inicialmente
        updateItemCount()

        // Configurar un intervalo para actualizar el conteo cada 30 segundos
        const interval = setInterval(updateItemCount, 30000)

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval)
    }, [])

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