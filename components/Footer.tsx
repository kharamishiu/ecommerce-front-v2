import React from 'react'
import { Facebook, Instagram, Twitter, CreditCard, ShoppingCartIcon as Paypal, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {

    return (
        <div className='flex flex-col  h-32 justify-between bg-orange-300 mx-auto'>

            <footer className="bg-gray-100 mt-12 ">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <Facebook className="w-6 h-6" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <Instagram className="w-6 h-6" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <Twitter className="w-6 h-6" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                        Productos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                        Sobre Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Mail className="w-5 h-5 mr-2 text-gray-600" />
                                    <a href="mailto:info@tutienda.com" className="text-gray-600 hover:text-gray-900">
                                        info@tutienda.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-5 h-5 mr-2 text-gray-600" />
                                    <a href="tel:+34912345678" className="text-gray-600 hover:text-gray-900">
                                        +34 912 345 678
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                                    <span className="text-gray-600">Calle Principal, 123, Madrid</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-full md:w-auto mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Métodos de pago</h3>
                                <div className="flex space-x-4">
                                    <CreditCard className="w-8 h-8 text-gray-600" />
                                    <Paypal className="w-8 h-8 text-gray-600" />
                                </div>
                            </div>
                            <div className="w-full md:w-auto text-center md:text-right">
                                <p className="text-sm text-gray-500">
                                    &copy; {new Date().getFullYear()} Tu Tienda. Todos los derechos reservados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Footer