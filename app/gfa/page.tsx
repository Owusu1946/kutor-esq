"use client";

import { useState } from "react";
import { Trophy, Users, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";

const gfaImages = [
    { src: "/gfa/photo_1_2026-03-02_11-20-25.jpg", alt: "GFA Appointment - Black Starlets Management Committee" },
    { src: "/gfa/photo_2_2026-03-02_11-20-25.jpg", alt: "GFA Committee Meeting" },
    { src: "/gfa/photo_3_2026-03-02_11-20-25.jpg", alt: "Black Starlets (U-17) Management Committee Team" },
    { src: "/gfa/photo_4_2026-03-02_11-20-25.jpg", alt: "GFA Institutional Presentation" },
    { src: "/gfa/photo_5_2026-03-02_11-20-25.jpg", alt: "GFA Engagement" }
];

export default function GFAPage() {
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
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20 rotate-3 overflow-hidden">
                            <Image
                                src="/gfa/logo.png"
                                alt="GFA Logo"
                                width={128}
                                height={128}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white tracking-tight">
                            Ghana Football <br className="hidden md:block" /> Association (GFA)
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-700 space-y-6">
                    <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-serif">
                        In September 2025, Mr. Kutor was appointed member of the Black Starlets (U-17) Management Committee by the Ghana Football Association (GFA).
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-600">
                        The Committee is chaired by Mr. Frederick Acheampong.
                    </p>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif font-bold text-emerald-950">
                            Management Committee Highlights
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl">
                            Moments from committee engagements and strategic sessions at the GFA.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100">
                        <span>5 Gallery Items</span>
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gfaImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border border-white cursor-pointer ${idx === 0 ? "sm:col-span-2 lg:col-span-2 lg:aspect-[21/9]" : ""
                                }`}
                            onClick={() => openLightbox(idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    <p className="text-white text-lg font-serif">
                                        {img.alt}
                                    </p>
                                    <div className="w-12 h-1 bg-red-600 mt-4 rounded-full" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Component */}
            <Lightbox
                images={gfaImages}
                isOpen={lightboxOpen}
                initialIndex={selectedImageIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}
