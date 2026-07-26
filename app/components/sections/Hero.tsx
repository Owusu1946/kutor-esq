"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Hero() {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleReset = () => setIsExpanded(false);
        window.addEventListener("reset-hero-state", handleReset);
        return () => window.removeEventListener("reset-hero-state", handleReset);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-slate-50 overflow-hidden px-4">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            {/* Radial Gradient overlay for softness */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-slate-100/50 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-24 right-8 text-right z-20 hidden md:block"
            >
                <p className="text-emerald-900/60 uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                    Welcome to
                </p>
                <h1 className="text-2xl md:text-3xl font-serif text-emerald-950 leading-tight">
                    Wonder Victor Kutor, <span className="italic text-emerald-800">Esq.</span>
                </h1>
                <div className="w-16 h-0.5 bg-emerald-900/10 ml-auto rounded-full my-3" />
            </motion.div>

            {/* Mobile Text (visible only on small screens, centered) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:hidden text-center mb-12 z-20"
            >
                <p className="text-emerald-900/60 uppercase tracking-[0.2em] text-xs font-semibold mb-2">
                    Welcome to
                </p>
                <h1 className="text-3xl font-serif text-emerald-950 leading-tight">
                    Wonder Victor Kutor, <span className="italic text-emerald-800">Esq.</span>
                </h1>
            </motion.div>

            {/* Small Immigration Formulae control — top left */}
            <AnimatePresence>
                {!isExpanded && (
                    <motion.button
                        key="immigration-corner"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsExpanded(true)}
                        className="absolute top-4 left-4 md:top-6 md:left-8 z-20 px-3 py-1.5 text-[11px] md:text-xs font-medium tracking-wide text-emerald-900/70 border border-emerald-900/15 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:text-emerald-950 hover:border-emerald-900/25 shadow-sm transition-all cursor-pointer"
                    >
                        The Immigration Formulae
                    </motion.button>
                )}
            </AnimatePresence>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <div className="min-h-[5rem] flex items-center justify-center py-6 md:py-8">
                    <AnimatePresence mode="wait">
                        {!isExpanded ? (
                            <motion.div
                                key="primary-buttons-container"
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.2 } }}
                                className="flex items-center justify-center"
                            >
                                <Link href="/ndc-election-2026" passHref legacyBehavior>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative px-8 py-4 sm:px-10 sm:py-4 bg-red-600 hover:bg-red-500 text-white rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden text-center"
                                    >
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        NDC ELECTIONS 2026
                                    </motion.a>
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="secondary-buttons"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6"
                            >
                                <motion.a
                                    href="/files/About the Book.pdf"
                                    download="About the Book.pdf"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-emerald-950 border border-emerald-900/10 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-900/20 shadow-lg hover:shadow-xl transition-all"
                                >
                                    About Book
                                </motion.a>
                                <motion.a
                                    href="/files/Table of Contents - The Immigration Formulae.pdf"
                                    download="Table of Contents - The Immigration Formulae.pdf"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-emerald-950 border border-emerald-900/10 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-900/20 shadow-lg hover:shadow-xl transition-all"
                                >
                                    Table of Contents
                                </motion.a>
                                <motion.button
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-emerald-950 border border-emerald-900/10 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-900/20 shadow-lg hover:shadow-xl transition-all"
                                >
                                    Book Auction
                                </motion.button>
                                <motion.a
                                    href="/files/OUTLINE.pdf"
                                    download="OUTLINE.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-emerald-950 border border-emerald-900/10 rounded-full text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-900/20 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                >
                                    Program Line-Up
                                </motion.a>
                                <motion.a
                                    href="/files/FOREWORDS - THE IMMIGRATION FORMULAE.pdf"
                                    download="FOREWORDS - THE IMMIGRATION FORMULAE.pdf"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.25, type: "spring", stiffness: 200, damping: 20 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-emerald-950 text-white rounded-full text-sm font-semibold hover:bg-emerald-900 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                                >
                                    Forewords
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
