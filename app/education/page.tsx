"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";

const ghanaLawImages = [
    { src: "/education/ghana-school-of-law/photo_1_2026-02-26_09-13-27.jpg", alt: "Ghana School of Law - Graduation Moment" },
    { src: "/education/ghana-school-of-law/photo_2026-02-26_09-16-09.jpg", alt: "Ghana School of Law - Academic Success" },
    { src: "/education/ghana-school-of-law/photo_2026-02-26_09-16-11.jpg", alt: "Ghana School of Law - Professional Milestone" },
    { src: "/education/ghana-school-of-law/photo_2026-02-26_09-16-12.jpg", alt: "Ghana School of Law - Call to the Bar" }
];

const floridaImages = [
    { src: "/education/uni-of-florida/photo_10_2026-02-26_09-13-27.jpg", alt: "University of Florida - Academic Journey" },
    { src: "/education/uni-of-florida/photo_2026-02-26_09-15-03.jpg", alt: "University of Florida - Graduation Day" },
    { src: "/education/uni-of-florida/photo_2026-02-26_09-15-19.jpg", alt: "University of Florida - Professional Growth" },
    { src: "/education/uni-of-florida/photo_2_2026-02-26_09-13-27.jpg", alt: "University of Florida - Master of Science" },
    { src: "/education/uni-of-florida/photo_3_2026-02-26_09-13-27.jpg", alt: "University of Florida - Campus Life" },
    { src: "/education/uni-of-florida/photo_5_2026-02-26_09-13-27.jpg", alt: "University of Florida - Study Abroad" },
    { src: "/education/uni-of-florida/photo_7_2026-02-26_09-13-27.jpg", alt: "University of Florida - International Education" },
    { src: "/education/uni-of-florida/photo_8_2026-02-26_09-13-27.jpg", alt: "University of Florida - Social Impact" },
    { src: "/education/uni-of-florida/photo_9_2026-02-26_09-13-27.jpg", alt: "University of Florida - Leadership" }
];

const allImages = [...ghanaLawImages, ...floridaImages];

export default function EducationPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-20 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Education
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Academic background and professional qualifications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor holds a Master of Science in Management from the University of Florida and a Master of Arts in Public Affairs from the University of Ghana. He earned his Bachelor of Laws (LLB) from the University of London and holds a Bachelor of Arts (First Class Honours) in Sociology from the University of Ghana. He obtained his Qualifying Certificate in Law from the Ghana School of Law.
                    </p>
                    <p className="leading-relaxed">
                        Mr. Kutor was called to the Ghana Bar on 5th May, 2023.
                    </p>
                </div>
            </section>

            {/* Gallery Sections */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto space-y-16">

                {/* Ghana School of Law Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                            Ghana School Of Law
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                    <p className="text-slate-600 italic">
                        Moments from the Ghana School of Law.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ghanaLawImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100 cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* University of Florida Section */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">
                            University of Florida
                        </h2>
                        <div className="h-1 w-20 bg-emerald-600/30"></div>
                    </div>
                    <p className="text-slate-600 italic">
                        Academic journey and graduation at the University of Florida.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {floridaImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group border border-slate-100 cursor-pointer"
                                onClick={() => openLightbox(ghanaLawImages.length + idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Lightbox Component */}
            <Lightbox
                images={allImages}
                isOpen={lightboxOpen}
                initialIndex={selectedImageIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}
