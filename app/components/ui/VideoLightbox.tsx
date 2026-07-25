"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoLightboxProps {
    videoSrc: string;
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export function VideoLightbox({ videoSrc, isOpen, onClose, title }: VideoLightboxProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

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
                    aria-label="Close video"
                >
                    <X size={24} />
                </button>

                {/* Video Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <video
                        src={videoSrc}
                        controls
                        autoPlay
                        className="w-full h-full"
                    >
                        Your browser does not support the video tag.
                    </video>

                    {/* Title Overlay */}
                    <div className="absolute -bottom-12 left-0 right-0 text-center">
                        <p className="text-white text-lg font-serif">{title}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
