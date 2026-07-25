"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";
import { GraduationCap, Award, Shield, MapPin } from "lucide-react";

export default function VRAPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const swearingInImages = [
        { src: "/vra/swearing-in/photo_1_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 1" },
        { src: "/vra/swearing-in/photo_2_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 2" },
        { src: "/vra/swearing-in/photo_3_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 3" },
        { src: "/vra/swearing-in/photo_4_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 4" },
        { src: "/vra/swearing-in/photo_5_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 5" },
        { src: "/vra/swearing-in/photo_6_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 6" },
        { src: "/vra/swearing-in/photo_7_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 7" },
        { src: "/vra/swearing-in/photo_8_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 8" },
        { src: "/vra/swearing-in/photo_9_2026-02-13_14-21-35.jpg", alt: "Swearing-in Ceremony 9" },
    ];

    const visitationImages = [
        { src: "/vra/visitation/photo_1_2026-02-13_14-23-07.jpg", alt: "VRA Site Visitation 1" },
        { src: "/vra/visitation/photo_2_2026-02-13_14-23-07.jpg", alt: "VRA Site Visitation 2" },
        { src: "/vra/visitation/photo_3_2026-02-13_14-23-07.jpg", alt: "VRA Site Visitation 3" },
        { src: "/vra/visitation/photo_4_2026-02-13_14-23-07.jpg", alt: "VRA Site Visitation 4" },
    ];

    const scholarshipImages = [
        { src: "/vra/scholarship/photo_1_2026-03-02_11-45-32.jpg", alt: "VRA Scholarship Presentation 1" },
        { src: "/vra/scholarship/photo_2_2026-03-02_11-45-32.jpg", alt: "VRA Scholarship Presentation 2" },
        { src: "/vra/scholarship/photo_3_2026-03-02_11-45-32.jpg", alt: "VRA Scholarship Presentation 3" },
        { src: "/vra/scholarship/photo_4_2026-03-02_11-45-32.jpg", alt: "VRA Scholarship Presentation 4" },
        { src: "/vra/scholarship/photo_5_2026-03-02_11-45-32.jpg", alt: "VRA Scholarship Presentation 5" },
    ];

    const allImages = [...swearingInImages, ...visitationImages, ...scholarshipImages];

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
                            Volta River Authority (VRA)
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Leading with vision and integrity at the Volta River Authority.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor was appointed as a non-executive member of the Board of the
                        Volta River Authority (VRA) in June 2025 by the President of the
                        Republic of Ghana in consultation with the Council of State.
                    </p>
                    <p className="leading-relaxed mb-6">
                        The Board was inaugarated by the Honourable Minister of Energy and
                        Green Transition, Hon. Dr. John Abdulai Jinapor on 23rd June, 2025.
                    </p>
                    <p className="leading-relaxed">
                        In July 2025, the VRA Board appointed him as the Governance Champion
                        for the Authority. He was also subsequently appointed by the board as
                        the Board Chairman of the VRA International
                        Schools Ltd., a subsidiary of VRA.
                    </p>
                </div>
            </section>

            {/* Swearing-in Gallery */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-emerald-700" />
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950">
                            Swearing-in Ceremony
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {swearingInImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => openLightbox(idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Scholarship Presentation Gallery */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950">
                            VRA Scholarship Presentation
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {scholarshipImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[4/5] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => openLightbox(swearingInImages.length + visitationImages.length + idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Visitation Gallery */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-emerald-700" />
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950">
                            Site Visitation (2025)
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {visitationImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-[16/9] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => openLightbox(swearingInImages.length + idx)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Lightbox
                images={allImages}
                isOpen={lightboxOpen}
                initialIndex={selectedImageIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}
