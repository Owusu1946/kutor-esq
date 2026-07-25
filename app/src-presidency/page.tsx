"use client";

import { useState } from "react";
import { Gavel, Trophy, Users, Globe, Mic2 } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "@/app/components/ui/Lightbox";

const texasImages = [
    { src: "/src-images/texas/photo_1_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Delegation Visit" },
    { src: "/src-images/texas/photo_2_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Group Photo" },
    { src: "/src-images/texas/photo_3_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Academic Exchange" },
    { src: "/src-images/texas/photo_4_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Campus Tour" },
    { src: "/src-images/texas/photo_5_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Legal Discussion" },
    { src: "/src-images/texas/photo_6_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Presentation" },
    { src: "/src-images/texas/photo_7_2026-03-02_10-51-18.jpg", alt: "SRC in Texas - Institutional Honor" }
];

const victoryImages = [
    { src: "/src-images/election-victory/photo_1_2026-03-02_10-55-03.jpg", alt: "Electoral Victory - Celebration" },
    { src: "/src-images/election-victory/photo_2_2026-03-02_10-55-03.jpg", alt: "Electoral Victory - Campaign Moment" }
];

const swearingInImages = [
    { src: "/src-images/swearing-in/image.png", alt: "Swearing-in Ceremony - Ghana School of Law" }
];

const lectureImages = [
    { src: "/src-images/public-lecture/photo_1_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Minister of Lands and Natural Resources" },
    { src: "/src-images/public-lecture/photo_2_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Presentation" },
    { src: "/src-images/public-lecture/photo_3_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Audience" },
    { src: "/src-images/public-lecture/photo_4_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Q&A Session" },
    { src: "/src-images/public-lecture/photo_5_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Institutional Exchange" },
    { src: "/src-images/public-lecture/photo_6_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Group Photo" },
    { src: "/src-images/public-lecture/photo_7_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Dignitaries" },
    { src: "/src-images/public-lecture/photo_8_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Event Highlight" },
    { src: "/src-images/public-lecture/photo_9_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Keynote Message" },
    { src: "/src-images/public-lecture/photo_10_2026-03-02_11-00-53.jpg", alt: "Public Lecture - Closing Ceremony" }
];

const srcSquareImages = [
    { src: "/src-images/src-square-comm/photo_1_2026-03-02_11-10-21.jpg", alt: "SRC Square Commissioning - Official Ribbon Cutting" },
    { src: "/src-images/src-square-comm/photo_2_2026-03-02_11-10-21.jpg", alt: "SRC Square Commissioning - Renovated Office" },
    { src: "/src-images/src-square-comm/photo_3_2026-03-02_11-10-21.jpg", alt: "SRC Square Commissioning - Delegation" },
    { src: "/src-images/src-square-comm/photo_4_2026-03-02_11-10-21.jpg", alt: "SRC Square Commissioning - Presidential Address" },
    { src: "/src-images/src-square-comm/photo_5_2026-03-02_11-10-21.jpg", alt: "SRC Square Commissioning - Institutional Honor" },
    { src: "/src-images/src-square-comm/photo_6_2026-03-02_11-10-21.jpg", alt: "SRC Square Commissioning - Group Photo" }
];

const chiefImamImages = [
    { src: "/src-images/src-chief-imam/photo_1_2026-03-02_11-51-55.jpg", alt: "SRC Visit to Chief Imam - Presentation" },
    { src: "/src-images/src-chief-imam/photo_2_2026-03-02_11-51-55.jpg", alt: "SRC Visit to Chief Imam - Group Photo" },
    { src: "/src-images/src-chief-imam/photo_3_2026-03-02_11-51-55.jpg", alt: "SRC Visit to Chief Imam - Interaction" }
];

const allPresidencyImages = [...victoryImages, ...swearingInImages, ...texasImages, ...lectureImages, ...srcSquareImages, ...chiefImamImages];

export default function SRCPresidencyPage() {
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
                            <Gavel className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            SRC Presidency
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Serving as President of the Student Representative Council (SRC) of the Ghana School of Law (GSL) for the 2021/2022 academic year.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor served as President of the Student Representative Council (SRC) of the Ghana School of Law (GSL) for the 2021/2022 academic year.
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-16">

                {/* Electoral Victory */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                                    Electoral Victory
                                </h2>
                                <div className="h-1.5 w-24 bg-emerald-600"></div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                Mr. Kutor won on all campuses of the Ghana School of Law ensuring a one-touch victory, reflecting a broad mandate and student trust.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                            <Trophy className="w-5 h-5" />
                            <span>One-Touch Victory</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {victoryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {img.alt}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Swearing-in Ceremony */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer md:order-last"
                        onClick={() => openLightbox(victoryImages.length)}
                    >
                        <Image
                            src={swearingInImages[0].src}
                            alt={swearingInImages[0].alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {swearingInImages[0].alt}
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                    </div>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                                    Swearing-in Ceremony
                                </h2>
                                <div className="h-1.5 w-24 bg-emerald-600"></div>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 self-start">
                                <Users className="w-5 h-5" />
                                <span>September 2, 2021</span>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Mr. Kutor together with other executives elect were sworn in on 2nd September, 2021 at the main campus, Makola. This marked the official commencement of his leadership as SRC President.
                        </p>
                    </div>
                </div>

                {/* SRC in Texas Section */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                                    SRC in Texas
                                </h2>
                                <div className="h-1.5 w-24 bg-emerald-600"></div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                Mr. Kutor led the student delegation of the GSL to visit Texas Law School, fostering international academic collaboration and institutional exchange.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                            <Globe className="w-5 h-5" />
                            <span>International Relations</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {texasImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer ${idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                                    }`}
                                onClick={() => openLightbox(victoryImages.length + swearingInImages.length + idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {img.alt}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Public Lecture Section */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                                    Public Lecture
                                </h2>
                                <div className="h-1.5 w-24 bg-emerald-600"></div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                The Kumasi Campus of the GSL hosted the Minister of Lands and Natural Resources, Hon. Samuel A. Jinapor, MP for a Public Lecture on Mining in Ghana, fostering dialogue on national development.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                            <Mic2 className="w-5 h-5" />
                            <span>December 2021</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lectureImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer ${idx === 3 || idx === 6 ? "lg:col-span-2" : ""}`}
                                onClick={() => openLightbox(victoryImages.length + swearingInImages.length + texasImages.length + idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {img.alt}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* SRC Square Commissioning Section */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                                    SRC Square Commissioning
                                </h2>
                                <div className="h-1.5 w-24 bg-emerald-600"></div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                Mr. Kutor commissioned the renovated SRC Square, delivering modern and state-of-the-art office facilities for the student body.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                            <Trophy className="w-5 h-5" />
                            <span>Renovated Offices</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {srcSquareImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer ${idx === 0 ? "lg:col-span-2" : ""}`}
                                onClick={() => openLightbox(victoryImages.length + swearingInImages.length + texasImages.length + lectureImages.length + idx)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {img.alt}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                    {/* Chief Imam Visit Section */}
                    <div className="space-y-8 pb-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">
                                        Chief Imam Visit
                                    </h2>
                                    <div className="h-1.5 w-24 bg-emerald-600"></div>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                    The SRC leadership paid a courtesy call on the National Chief Imam, Sheikh Osman Nuhu Sharubutu, to seek his blessings and foster interfaith harmony.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                                <Users className="w-5 h-5" />
                                <span>Courtesy Call</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {chiefImamImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-slate-100 cursor-pointer ${idx === 0 ? "lg:col-span-2" : ""}`}
                                    onClick={() => openLightbox(victoryImages.length + swearingInImages.length + texasImages.length + lectureImages.length + srcSquareImages.length + idx)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {img.alt}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Lightbox Component */}
            <Lightbox
                images={allPresidencyImages}
                isOpen={lightboxOpen}
                initialIndex={selectedImageIndex}
                onClose={() => setLightboxOpen(false)}
            />
        </div>
    );
}

