"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
    images: { src: string; alt: string }[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, currentIndex, onClose]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[110] p-2 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full hover:bg-white/20"
                    aria-label="Close lightbox"
                >
                    <X size={24} />
                </button>

                {/* Navigation Buttons - Desktop */}
                <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                    aria-label="Next image"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Image Container */}
                <motion.div
                    key={currentIndex}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                        if (info.offset.x > 100) handlePrev();
                        else if (info.offset.x < -100) handleNext();
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            fill
                            className="object-contain select-none shadow-2xl"
                            priority
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />
                    </div>

                    {/* Image Counter & Alt Text */}
                    <div className="absolute -bottom-16 left-0 right-0 text-center space-y-2">
                        <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
                            {currentIndex + 1} / {images.length}
                        </p>
                        <p className="text-white text-lg font-serif">
                            {images[currentIndex].alt}
                        </p>
                    </div>
                </motion.div>

                {/* Mobile Navigation Hint/Swipe Bar */}
                <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="p-3 bg-white/10 rounded-full text-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="p-3 bg-white/10 rounded-full text-white"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
