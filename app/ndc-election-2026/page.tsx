"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CAMPAIGN_IMAGES = [
    {
        src: "/ndc-elections/photo_1_2026-07-25_17-54-27.jpg",
        alt: "Wonder — We Are Ready. NDC National Democratic Congress campaign graphic.",
    },
    {
        src: "/ndc-elections/photo_2_2026-07-25_17-54-27.jpg",
        alt: "Know the Guidelines — NDC National Elections 2026 Endorsement requirements.",
    },
];

export default function NDCElectionPage() {
    // Countdown to December 19, 2026
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2026-12-19T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-[85vh] bg-white text-slate-900 flex flex-col justify-center overflow-hidden px-4 sm:px-8 py-12 sm:py-16">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto w-full space-y-10 sm:space-y-12">
                {/* Campaign images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {CAMPAIGN_IMAGES.map((image) => (
                        <div
                            key={image.src}
                            className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg border border-slate-100"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    ))}
                </div>

                {/* Countdown */}
                <div className="space-y-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Countdown to December 19, 2026
                    </p>
                    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
                        <div className="bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl shadow-sm">
                            <span className="block text-2xl sm:text-3xl font-bold font-mono text-emerald-700">
                                {timeLeft.days}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Days</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl shadow-sm">
                            <span className="block text-2xl sm:text-3xl font-bold font-mono text-slate-800">
                                {timeLeft.hours}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Hours</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl shadow-sm">
                            <span className="block text-2xl sm:text-3xl font-bold font-mono text-slate-800">
                                {timeLeft.minutes}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Min</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl shadow-sm">
                            <span className="block text-2xl sm:text-3xl font-bold font-mono text-rose-600">
                                {timeLeft.seconds}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase font-semibold">Sec</span>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-900 hover:bg-emerald-800 text-white rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Return Home
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
