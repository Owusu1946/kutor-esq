"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { cn } from "@/app/lib/utils";

export function AppLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-slate-50 overflow-hidden">
            {/* Mobile Header - Visible only on small screens */}
            <MobileHeader
                onMenuClick={() => setIsMobileMenuOpen(true)}
                className="flex-shrink-0"
            />

            {/* Sidebar - Desktop: Fixed / Mobile: Drawer */}
            <div
                className={cn(
                    "fixed inset-0 z-40 lg:static lg:z-auto transition-transform duration-300 lg:transform-none lg:block",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Overlay for mobile */}
                <div
                    className={cn(
                        "absolute inset-0 bg-black/50 lg:hidden transition-opacity duration-300",
                        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Sidebar Content */}
                <div className="relative h-full w-72 bg-slate-900 shadow-xl lg:shadow-none">
                    {/* Close button for mobile could go here, but clicking overlay works too. 
              Let's add a visual close or just rely on the overlay/toggle. 
              For 'premium' feel, the overlay click is standard. */}
                    <Sidebar className="h-full w-full" />
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative scroll-smooth focus:scroll-auto bg-slate-50">
                {/* Floating minimal header */}
                <div className="absolute top-0 right-0 left-0 z-30 flex items-center justify-end px-6 py-6 pointer-events-none">
                    <div className="flex items-center gap-4 pointer-events-auto">
                        {/* <button className="px-6 py-2.5 bg-emerald-950 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-emerald-900 hover:shadow-xl transition-all hover:-translate-y-0.5 transform">
                            Contact Office
                        </button> */}
                    </div>
                </div>

                <div className="min-h-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
