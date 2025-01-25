import { Button } from "@/components/ui/button"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div className="flex justify-center items-center space-x-2 mt-16">
            <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} variant="outline">
                Anterior
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button key={page} onClick={() => onPageChange(page)} variant={currentPage === page ? "default" : "outline"}>
                    {page}
                </Button>
            ))}
            <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} variant="outline">
                Siguiente
            </Button>
        </div>
    )
}

