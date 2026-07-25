"use client";

import { useState, useEffect } from "react";
import { Vote, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NDCElectionPage() {
    // Standard state countdown to December 7, 2026
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2026-12-07T00:00:00").getTime();

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
        <div className="relative min-h-[85vh] bg-white text-slate-900 flex flex-col justify-center overflow-hidden px-6 sm:px-12 py-20">
            {/* Ambient Background Glows matching NDC Party Colors (optimized for light theme) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/[0.05] rounded-full blur-[120px] pointer-events-none animate-pulse" />
            
            {/* Soft grid background */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }}
            />

            {/* Campaign Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-emerald-800 shadow-sm">
                    <Vote className="w-3.5 h-3.5 text-emerald-700" />
                    <span>NDC Election 2026</span>
                </div>

                {/* Slogan Hero Title */}
                <div className="space-y-4">
                    <h1 className="text-6xl sm:text-8xl font-serif font-black tracking-tight leading-none">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-950 to-rose-600">
                            Wonder
                        </span>
                        <span className="block text-slate-900 mt-2 font-sans font-light tracking-[0.08em] uppercase text-4xl sm:text-6xl">
                            is Coming
                        </span>
                    </h1>
                </div>

                {/* Campaign message */}
                <p className="text-slate-600 text-lg sm:text-xl max-w-xl mx-auto font-light leading-relaxed">
                    Anticipating upcoming elections and building a path towards positive change and dedicated leadership.
                </p>

                {/* Clean graphic divider */}
                <div className="flex items-center justify-center gap-3">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-600/30" />
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-600/30" />
                </div>

                {/* Anticipation Countdown */}
                <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Countdown to December 2026
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

                {/* Navigation CTA */}
                <div className="pt-4">
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
