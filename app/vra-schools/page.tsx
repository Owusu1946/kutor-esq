"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";
import { School } from "lucide-react";

export default function VRASchoolsPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const schoolImages = [
        { src: "/vra-schools/photo_1_2026-07-03_03-08-09.jpg", alt: "VRA International Schools Activity 1" },
        { src: "/vra-schools/photo_2_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 2" },
        { src: "/vra-schools/photo_3_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 3" },
        { src: "/vra-schools/photo_4_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 4" },
        { src: "/vra-schools/photo_5_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 5" },
        { src: "/vra-schools/photo_6_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 6" },
        { src: "/vra-schools/photo_7_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 7" },
        { src: "/vra-schools/photo_8_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 8" },
        { src: "/vra-schools/photo_9_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 9" },
        { src: "/vra-schools/photo_10_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 10" },
        { src: "/vra-schools/photo_11_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 11" },
        { src: "/vra-schools/photo_12_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 12" },
        { src: "/vra-schools/photo_13_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 13" },
        { src: "/vra-schools/photo_14_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 14" },
        { src: "/vra-schools/photo_15_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 15" },
        { src: "/vra-schools/photo_16_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 16" },
        { src: "/vra-schools/photo_17_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 17" },
        { src: "/vra-schools/photo_18_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 18" },
        { src: "/vra-schools/photo_19_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 19" },
        { src: "/vra-schools/photo_20_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 20" },
        { src: "/vra-schools/photo_21_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 21" },
        { src: "/vra-schools/photo_22_2026-07-03_03-08-10.jpg", alt: "VRA International Schools Activity 22" },
    ]

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-16 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <Image
                                src="/yea/VRA_Logo.png"
                                alt="VRA Logo"
                                width={128}
                                height={128}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            VRA International Schools
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            VRA International Schools Ltd. (VISL), a subsidiary of the Volta River Authority.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-700 font-serif leading-relaxed">
                    <p className="text-xl md:text-2xl font-bold text-emerald-950 mb-4">
                        VISL- VRA International Schools Ltd., a subsidiary of VRA.
                    </p>
                    <p className="text-emerald-800/40 select-none text-xl tracking-widest mb-6">
                        .................................
                    </p>
                    <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                        Lawyer Wonder Victor Kutor was appointed the Board Chairman of the Board of the VISL by the Governing Board of the VRA in 2025.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
                <div className="flex items-center gap-3 border-t border-slate-100 pt-10">
                    <School className="w-6 h-6 text-emerald-700" />
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950">
                            Photo Gallery
                        </h2>
                        <div className="h-1 w-16 bg-emerald-600/30"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {schoolImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-slate-150"
                            onClick={() => openLightbox(idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                priority={idx < 8}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Lightbox
                images={schoolImages}
                isOpen={lightboxOpen}
                initialIndex={selectedImageIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}
