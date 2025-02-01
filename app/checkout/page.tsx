"use client"
/*
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Definir el esquema de validación
const formSchema = z.object({
    fullName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    address: z.string().min(5, { message: "La dirección debe tener al menos 5 caracteres." }),
    city: z.string().min(2, { message: "La ciudad debe tener al menos 2 caracteres." }),
    /* postalCode: z.string().min(5, { message: "El código postal debe tener al menos 5 caracteres." }),
     cardNumber: z.string().regex(/^\d{16}$/, { message: "El número de tarjeta debe tener 16 dígitos." }),
     expiryDate: z
         .string()
         .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "La fecha de expiración debe tener el formato MM/YY." }),
     cvv: z.string().regex(/^\d{3,4}$/, { message: "El CVV debe tener 3 o 4 dígitos." }),*/
//})

// Tipo para un producto en el carrito
type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
}

const Page = () => {
    // Estado para los items del carrito (en una aplicación real, esto vendría de un estado global)
    /*    const [cartItems] = useState<CartItem[]>([
            { id: 1, name: "Camiseta", price: 19.99, quantity: 2 },
            { id: 2, name: "Pantalón", price: 39.99, quantity: 1 },
            { id: 3, name: "Zapatos", price: 59.99, quantity: 1 },
        ])
    
        // Cálculo del total
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    
        // Configurar el formulario
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                fullName: "",
                email: "",
                address: "",
                city: "",
                postalCode: "",
                cardNumber: "",
                expiryDate: "",
                cvv: "",
            },
        })
    
        // Función para manejar el envío del formulario
        function onSubmit(values: z.infer<typeof formSchema>) {
            // Aquí iría la lógica para procesar el pago y crear el pedido
            console.log(values)
            alert("Pedido realizado con éxito!")
        }
    */
    return (
        <div className="container mx-auto px-4 py-8">
            {/* <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Información de Envío y Pago</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre Completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Juan Pérez" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="juan@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Dirección</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Calle Principal 123" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Ciudad</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Madrid" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full">
                                    Realizar Pedido
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Resumen del Pedido</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between mb-2">
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="border-t pt-2 mt-4">
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>*/}
        </div>
    )
}

export default Page();