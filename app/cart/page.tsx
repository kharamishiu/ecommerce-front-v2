"use client"

import { useState } from "react"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Tipo para un producto en el carrito
type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

const Page = () => {
    // Estado para los items del carrito
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: "Camiseta", price: 19.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
        { id: 2, name: "Pantalón", price: 39.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
        { id: 3, name: "Zapatos", price: 59.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
    ])

    // Función para actualizar la cantidad de un producto
    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems((items) =>
            items.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item)),
        )
    }

    // Función para eliminar un producto del carrito
    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
    }

    // Cálculo del total
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <Card key={item.id} className="mb-4">
                            <CardContent className="p-4">
                                <div className="flex items-center">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded mr-4"
                                    />
                                    <div className="flex-grow">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Button variant="destructive" size="icon" className="ml-4" onClick={() => removeItem(item.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <Card>
                        <CardHeader>
                            <CardTitle>Resumen del Pedido</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Proceder al Pago</Button>
                        </CardFooter>
                    </Card>
                </>
            )}
        </div>
    )
}

export default Page();

