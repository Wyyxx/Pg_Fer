"use client";

import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Target, MapPin, Users, ScrollText, Award, Flag, Facebook } from 'lucide-react';

// Cambia el nombre de la función
export default function Home() {
    const [activeValue, setActiveValue] = useState<string | null>(null);
    const [showFloatingButton, setShowFloatingButton] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselImages = [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setShowFloatingButton(rect.top > window.innerHeight || rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const values = {
        'Excelencia': 'Buscamos la máxima calidad en cada aspecto de nuestra labor educativa.',
        'Responsabilidad': 'Fomentamos el compromiso con las obligaciones académicas y personales.',
        'Respeto': 'Cultivamos un ambiente de consideración mutua y diversidad.',
        'Integridad': 'Promovemos la honestidad y la ética en todas las acciones.',
        'Compromiso': 'Dedicamos nuestros esfuerzos a la formación de estudiantes preparados.'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Hero Section with Carousel */}
            <header className="relative h-screen">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url('${image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                ))}

                {/* Navigation */}
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative z-20">
                    <div className="flex items-center">
                        <GraduationCap className="h-16 w-16 text-white" />
                    </div>
                    <div className="hidden md:flex space-x-8 text-white">
                        <a href="#inicio" className="hover:text-blue-200">Inicio</a>
                        {/*<a href="#identidad" className="hover:text-blue-200">Identidad</a>
            <a href="#nosotros" className="hover:text-blue-200">Nosotros</a>
            <a href="#programas" className="hover:text-blue-200">Programas</a>*/}
                        <a href="#ubicacion" className="hover:text-blue-200">Ubicación</a>
                        <a href="#contacto" className="hover:text-blue-200">Contacto</a>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-20 text-white h-[calc(100vh-6rem)] flex items-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">Preparatoria Ortiz Mena</h1>
                        <p className="text-xl mb-8">Formando líderes del mañana con excelencia académica</p>
                        <a href="#contacto" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            Conoce más
                        </a>
                    </div>
                </div>
            </header>

            {/* Floating Facebook Button */}
            {showFloatingButton && (
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed right-6 bottom-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 hover:scale-110"
                >
                    <Facebook className="w-6 h-6" />
                </a>
            )}

            {/* Main Content Grid */}
            <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Column: Mission and Vision */}
                        <div className="space-y-12">
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="flex items-center mb-6">
                                    <ScrollText className="w-8 h-8 text-blue-600 mr-4" />
                                    <h3 className="text-2xl font-bold">Misión</h3>
                                </div>
                                <p className="text-gray-600">
                                    Formar estudiantes con excelencia académica y valores sólidos, preparados para enfrentar los retos del futuro.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="flex items-center mb-6">
                                    <Target className="w-8 h-8 text-blue-600 mr-4" />
                                    <h3 className="text-2xl font-bold">Visión</h3>
                                </div>
                                <p className="text-gray-600">
                                    Ser una institución educativa líder reconocida por su calidad académica y formación integral de estudiantes.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Who We Are */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 h-fit hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-6">
                                <Users className="w-8 h-8 text-blue-600 mr-4" />
                                <h3 className="text-2xl font-bold">¿Quiénes Somos?</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Somos una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes.
                                Nuestra preparatoria se distingue por formar jóvenes con valores sólidos y habilidades competitivas para su futuro profesional.
                            </p>
                            <p className="text-gray-600">
                                Con más de una década de experiencia en el sector educativo, nos hemos consolidado como una de las instituciones más prestigiosas
                                de la región, gracias a nuestro compromiso con la calidad educativa y la formación integral de nuestros estudiantes.
                            </p>
                        </div>
                    </div>

                    {/* Centered Values Section */}
                    <div className="mt-12 max-w-2xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-blue-600 mr-4" />
                                <h3 className="text-2xl font-bold">Valores</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(values).map(([value, description]) => (
                                    <div
                                        key={value}
                                        className="relative group"
                                        onMouseEnter={() => setActiveValue(value)}
                                        onMouseLeave={() => setActiveValue(null)}
                                    >
                                        <div className="text-center p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                                            <p className="font-semibold text-gray-700">{value}</p>
                                            {activeValue === value && (
                                                <div className="absolute z-10 bg-white shadow-lg rounded-lg p-4 mt-2 left-0 right-0">
                                                    <p className="text-gray-600 text-sm">{description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section id="ubicacion" className="py-20 bg-gradient-to-l from-blue-50 via-indigo-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Nuestras Ubicaciones</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Ubicación 1 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-64 relative">
                                <MapPin className="absolute inset-0 m-auto w-12 h-12 text-blue-600" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Campus Principal</h3>
                                <p className="text-gray-600 mb-4">Edificio Roka local 10, Boulevard Antonio Ortiz Mena</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-700 transition-colors"
                                >
                                    Abrir en Maps
                                </a>
                            </div>
                        </div>

                        {/* Ubicación 2 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-64 relative">
                                <MapPin className="absolute inset-0 m-auto w-12 h-12 text-blue-600" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Campus Norte</h3>
                                <p className="text-gray-600 mb-4">Av. de la Juventud 1200, Col. Centro</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-700 transition-colors"
                                >
                                    Abrir en Maps
                                </a>
                            </div>
                        </div>

                        {/* Ubicación 3 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-64 relative">
                                <MapPin className="absolute inset-0 m-auto w-12 h-12 text-blue-600" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Campus Sur</h3>
                                <p className="text-gray-600 mb-4">Periférico de la Juventud 3300</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-700 transition-colors"
                                >
                                    Abrir en Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                            <form className="space-y-6">
                                <div>
                                    <label className="block mb-2">Nombre</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg text-gray-900" />
                                </div>
                                <div>
                                    <label className="block mb-2">Correo Electrónico</label>
                                    <input type="email" className="w-full px-4 py-2 rounded-lg text-gray-900" />
                                </div>
                                <div>
                                    <label className="block mb-2">Mensaje</label>
                                    <textarea className="w-full px-4 py-2 rounded-lg text-gray-900" rows={4}></textarea>
                                </div>
                                <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>

                        {/* Facebook Section */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center justify-center text-center">
                            <Facebook className="w-20 h-20 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Síguenos en Facebook</h3>
                            <p className="mb-8">Mantente al día con nuestras últimas noticias, eventos y actividades</p>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                            >
                                <Facebook className="w-6 h-6 mr-2" />
                                Visitar Página
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 Preparatoria Ortiz Mena. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}