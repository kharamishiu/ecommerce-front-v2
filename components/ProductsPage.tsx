"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import Pagination from "./Pagination"
import { products } from "@/lib/data"

// Datos de ejemplo para los productos


export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

