"use client";

import { useState } from "react";
import { Mic2, Globe, Building2, ExternalLink, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";

export default function ConferencesPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const amsImages = [
        { src: "/conferences/ams/photo_1_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Presentation Session" },
        { src: "/conferences/ams/photo_2_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Professional Networking" },
        { src: "/conferences/ams/photo_3_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Keynote Address" },
        { src: "/conferences/ams/photo_4_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Academic Discussion" },
        { src: "/conferences/ams/photo_5_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Group Photo" },
        { src: "/conferences/ams/photo_6_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Delegate Interaction" },
        { src: "/conferences/ams/photo_7_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Event Highlight" },
        { src: "/conferences/ams/photo_8_2026-03-02_13-25-54.jpg", alt: "AMS Conference - Institutional Exchange" }
    ];

    const otcImages = [
        { src: "/conferences/otc/photo_1_2026-03-02_13-39-41.jpg", alt: "OTC Conference - Energy Innovation Session" },
        { src: "/conferences/otc/photo_2_2026-03-02_13-39-41.jpg", alt: "OTC Conference - Networking Event" },
        { src: "/conferences/otc/photo_3_2026-03-02_13-39-41.jpg", alt: "OTC Conference - Institutional Representation" },
        { src: "/conferences/otc/photo_4_2026-03-02_13-39-41.jpg", alt: "OTC Conference - Technical Discussion" },
        { src: "/conferences/otc/photo_5_2026-03-02_13-39-41.jpg", alt: "OTC Conference - Event Highlight" }
    ];

    const yeaTrainingImages = [
        { src: "/yea/training/photo_1_2026-02-20_13-23-41.jpg", alt: "YEA Management Training in London" },
        { src: "/yea/training/photo_2_2026-02-20_13-23-41.jpg", alt: "YEA Management Training in London" }
    ];

    const vraTrainingImages = [
        { src: "/conferences/vra/image.png", alt: "VRA Board Training program in London" }
    ];

    const allImages = [...amsImages, ...otcImages, ...yeaTrainingImages, ...vraTrainingImages];

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
                            <Mic2 className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Conferences
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Global participation in international conferences and professional training programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6 italic border-l-4 border-emerald-600/20 pl-6 py-2 bg-slate-50 rounded-r-lg">
                        Mr. Kutor has participated in several major international conferences/training including the Academy of Marketing Science (AMS) Annual Conference in Canada, the Offshore Technology Conference (OTC) in the United States (US) and the Board training program in governance and financial oversight responsibilities in London, United Kingdom (UK).
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-24">

                {/* AMS Conference */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-serif font-bold text-emerald-950">
                                    Academy of Marketing Science (AMS)
                                </h2>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full h-fit">
                                    <Globe className="w-3 h-3" /> Canada
                                </span>
                            </div>
                            <div className="h-1.5 w-24 bg-emerald-600"></div>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                Participated in the Annual Conference of the Academy of Marketing Science, engaging with global leaders in marketing academia and practice.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 h-fit">
                            <ImageIcon className="w-5 h-5" />
                            <span>Conference Moments</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {amsImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer ${idx === 0 || idx === 1 ? "sm:col-span-1" : ""}`}
                                onClick={() => openLightbox(idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                    <p className="text-white text-xs font-medium">
                                        {img.alt}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* OTC Conference Section */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-serif font-bold text-emerald-950">
                                    Offshore Technology Conference (OTC)
                                </h2>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full h-fit">
                                    <Globe className="w-3 h-3" /> United States
                                </span>
                            </div>
                            <div className="h-1.5 w-24 bg-emerald-600"></div>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                Attended the world&apos;s foremost event for offshore resource development, focusing on the latest in energy technology and global policy.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 h-fit">
                            <Building2 className="w-5 h-5" />
                            <span>Global Energy Leaders</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otcImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer ${idx === 0 || idx === 3 ? "lg:col-span-2" : ""}`}
                                onClick={() => openLightbox(amsImages.length + idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-sm font-medium">
                                        {img.alt}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Board Training London */}
                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-4">
                                    Governance & Financial Oversight
                                </h2>
                                <div className="h-1.5 w-24 bg-emerald-600 mb-6"></div>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider rounded-full">
                                    <Globe className="w-3 h-3" /> London, UK
                                </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Completed advanced board training program focused on corporate governance and financial oversight responsibilities.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {yeaTrainingImages.map((img, idx) => (
                            <div key={`yea-${idx}`} className="space-y-4">
                                <div
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group border border-white cursor-pointer"
                                    onClick={() => openLightbox(amsImages.length + otcImages.length + idx)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <p className="text-slate-600 text-sm font-medium border-l-2 border-emerald-600/30 pl-3 leading-snug">
                                    {img.alt}
                                </p>
                            </div>
                        ))}
                        {vraTrainingImages.map((img, idx) => (
                            <div key={`vra-${idx}`} className="space-y-4">
                                <div
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group border border-white cursor-pointer"
                                    onClick={() => openLightbox(amsImages.length + otcImages.length + yeaTrainingImages.length + idx)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <p className="text-slate-600 text-sm font-medium border-l-2 border-emerald-600/30 pl-3 leading-snug">
                                    {img.alt}
                                </p>
                            </div>
                        ))}
                    </div>
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
