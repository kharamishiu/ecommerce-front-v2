
export interface Product {
    id: number,
    name: string,
    price: number,
    stock?: number,
    description?: string,
    mainImage: string,
    hoverImage: string,
    images?: string[]//AGREGAR IMAGENES PARA PRUEBA EN LOS DATA
}

export const products = [
    {
        id: 1,
        name: "Camiseta",
        price: 19.99,
        stock: 3,
        description: "En palabras simples, una descripción de producto es una breve explicación escrita de las características, beneficios y cualidades de un producto o servicio. A menudo esta descripción suele incluir detalles como el tamaño, el peso, los materiales utilizados, el uso previsto y las ventajas que ofrece el producto",
        mainImage: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverImage: "https://plus.unsplash.com/premium_photo-1675873580278-f5a6ea2a6f0a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 2,
        name: "Pantalón",
        price: 39.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 3,
        name: "Zapatos",
        price: 59.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 4,
        name: "Gorra",
        price: 14.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 5,
        name: "Chaqueta",
        price: 79.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 6,
        name: "Bufanda",
        price: 24.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 7,
        name: "Reloj",
        price: 99.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: 8,
        name: "Bolso",
        price: 49.99,
        stock: 0,
        mainImage: "/placeholder.svg?height=200&width=200",
        hoverImage: "/placeholder.svg?height=200&width=200&text=Hover",
        images: [
            "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1710030733249-5d7c34509f61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },

]