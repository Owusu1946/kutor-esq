"use client";

import Image from "next/image";
import { Heart, Home, Users } from "lucide-react";

export default function FamilyPage() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-16 px-6 sm:px-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-emerald-800/30">
                            <Heart className="w-12 h-12 md:w-16 md:h-16 text-emerald-300" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white tracking-tight">
                            Family
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0 rounded-full shadow-lg shadow-red-900/20"></div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Text Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="prose prose-lg prose-emerald text-slate-700 max-w-none">
                            <div className="space-y-6">
                                <p className="text-2xl md:text-3xl font-serif text-emerald-950 leading-tight">
                                    Wonder Victor Kutor was born on 13th March 1991.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-200">
                                            <Users className="w-5 h-5 text-emerald-700" />
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold mb-1">Mother</p>
                                            <p className="text-slate-900 font-medium text-lg">Mrs. Grace Kutor</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-200">
                                            <Users className="w-5 h-5 text-emerald-700" />
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold mb-1">Father</p>
                                            <p className="text-slate-900 font-medium text-lg">Mr. Christopher A. Kutor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100/50 space-y-6">
                                    <div className="flex items-center gap-4 text-emerald-900">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                        <p className="text-xl">Siblings: 6</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-emerald-900">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                        <p className="text-xl">He is married and has a child.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 p-8 bg-slate-900 text-white rounded-3xl shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-700/50 relative z-10">
                                        <Home className="w-6 h-6 text-emerald-300" />
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-emerald-400 text-sm uppercase tracking-widest font-bold mb-2">Hometown</p>
                                        <p className="text-xl md:text-2xl font-serif leading-relaxed">
                                            Mr. Kutor hails from Tegbi in the Anloga District of the Volta Region of Ghana.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-100">
                            <Image
                                src="/family/photo_2026-03-02_13-58-50.jpg"
                                alt="Wonder Victor Kutor Family Photo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
