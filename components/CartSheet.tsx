import React, { useEffect, useState } from 'react'
import { SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { Button } from './ui/button'
import { X, Plus, Minus } from "lucide-react"
import Image from 'next/image'

// Tipo para un producto en el carrito
type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

const CartSheet = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    // Simular la carga de items del carrito
    useEffect(() => {
        setCartItems([
            { id: 1, name: "Camiseta", price: 19.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
            { id: 2, name: "Pantalón", price: 39.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
            { id: 3, name: "Zapatos", price: 59.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
        ])
    }, [])

    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems((items) =>
            items.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item)),
        )
    }

    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <SheetContent className="w-[350px] sm:w-[450px]">
            <SheetHeader>
                <SheetTitle>Tu Carrito</SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover rounded" fill />
                        <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                            <div className="flex items-center mt-1">
                                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="mx-2">{item.quantity}</span>
                                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>
            {
                cartItems.length > 0 ? (
                    <div className="mt-8">
                        <div className="flex justify-between items-center font-semibold">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <Button
                            className="w-full mt-4"
                            onClick={() => {
                                /* Aquí iría la lógica para ir al checkout */
                            }}
                        >
                            Proceder al Pago
                        </Button>
                    </div>
                ) : (
                    <p className="text-center mt-8">Tu carrito está vacío.</p>
                )
            }
        </SheetContent>
    )
}

export default CartSheet