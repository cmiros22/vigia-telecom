import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion"; // Importar Framer Motion
import 'swiper/swiper-bundle.css';

const slides = [
    { id: 1, title: "Instalacion fibra optica", content: "Nuestros técnicos certificados", image: "../images/swiper/Slider_01.png" },
    { id: 2, title: "Cable fibra optica", content: "La mejor calidad de cable", image: "../images/swiper/Slider_02.png" }
];

const CarouselParallax = () => {
    const [key, setKey] = useState(0); // Estado para forzar la re-renderización

    const handleSlideChange = () => {
        setKey(prevKey => prevKey + 1); // Cambiar la clave para reiniciar la animación
    };

    return (
        <Swiper
            pagination={{ clickable: true }}
            spaceBetween={50}
            autoplay={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={handleSlideChange} // Manejar el cambio de slide
            className="h-[90vh] relative" // Asegúrate de que el contenedor tenga una altura definida
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div key={key} className="flex flex-col items-center justify-center h-full relative">
                        <motion.img
                            src={slide.image} // Usar la URL de la imagen
                            alt={slide.title} // Texto alternativo
                            initial={{ opacity: 0 }} // Estado inicial
                            animate={{ opacity: 1 }} // Estado final
                            exit={{ opacity: 0 }} // Estado al salir
                            transition={{ duration: 0.9 }} // Duración de la animación
                            className="w-full h-full object-cover" // Cambiar a h-full y usar object-cover
                        />
                        <div className="absolute bottom-36 left-20">
                            <motion.h3
                                initial={{ opacity: 0, y: -20 }} // Estado inicial
                                animate={{ opacity: 1, y: 0 }} // Estado final
                                exit={{ opacity: 0, y: 20 }} // Estado al salir
                                transition={{ duration: 0.5 }} // Duración de la animación
                                className="text-4xl font-bold text-white"
                            >
                                {slide.title}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }} // Estado inicial
                                animate={{ opacity: 1, y: 0 }} // Estado final
                                exit={{ opacity: 0, y: 20 }} // Estado al salir
                                transition={{ duration: 0.5, delay: 0.5 }} // Duración de la animación
                                className="text-white"
                            >
                                {slide.content}
                            </motion.p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselParallax;