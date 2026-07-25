"use client";

import { useState } from "react";
import { Image as ImageIcon, Sparkles, LayoutGrid } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";

const photos = [
    { src: "/photos/1.jpg", alt: "General Photo 10" },
    { src: "/photos/2.jpg", alt: "General Photo 11" },
    { src: "/photos/3.jpg", alt: "General Photo 12" },
    { src: "/photos/photo_1_2026-03-02_11-34-51.jpg", alt: "General Photo 1" },
    { src: "/photos/photo_2_2026-03-02_11-34-51.jpg", alt: "General Photo 2" },
    { src: "/photos/photo_3_2026-03-02_11-34-51.jpg", alt: "General Photo 3" },
    { src: "/photos/photo_4_2026-03-02_11-34-51.jpg", alt: "General Photo 4" },
    { src: "/photos/photo_5_2026-03-02_11-34-51.jpg", alt: "General Photo 5" },
    { src: "/photos/photo_6_2026-03-02_11-34-51.jpg", alt: "General Photo 6" },
    { src: "/photos/photo_7_2026-03-02_11-34-51.jpg", alt: "General Photo 7" },
    { src: "/photos/photo_8_2026-03-02_11-34-51.jpg", alt: "General Photo 8" },
    { src: "/photos/photo_9_2026-03-02_11-34-51.jpg", alt: "General Photo 9" }
];

export default function PhotosPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-16 px-6 sm:px-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/30">
                            <ImageIcon className="w-12 h-12 md:w-16 md:h-16 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white tracking-tight">
                            Photo Gallery
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0 rounded-full"></div>
                        <p className="text-emerald-100/90 text-base md:text-lg max-w-2xl leading-relaxed font-light">
                            A collection of moments reflecting the various activities, engagements, and milestones in the journey so far.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12 border-b border-slate-100 pb-6">
                    <LayoutGrid className="w-6 h-6 text-emerald-700" />
                    <h2 className="text-2xl font-serif font-bold text-emerald-950">All Photos</h2>
                    <span className="ml-auto text-slate-500 text-sm font-medium">{photos.length} Images</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group border border-slate-100 cursor-pointer bg-slate-50"
                            onClick={() => openLightbox(idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">Click to expand</p>
                            </div>
                            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Component */}
            <Lightbox
                images={photos}
                isOpen={lightboxOpen}
                initialIndex={selectedImageIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}
