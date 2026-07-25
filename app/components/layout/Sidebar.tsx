"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { NAV_ITEMS, BRAND_DETAILS, BOOK_DETAILS } from "@/app/lib/navigation";
import { BookOpen } from "lucide-react";

export function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <aside className={cn("flex flex-col h-full bg-emerald-950 text-white w-72 flex-shrink-0 border-r border-emerald-900", className)}>
            {/* Brand Block
            <div className="p-6 border-b border-emerald-900">
                <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-emerald-800 shadow-lg">
                        <img
                            src="/images/logo-round.png"
                            alt={BRAND_DETAILS.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-serif text-lg leading-tight font-semibold tracking-wide text-white mb-1">
                        {BRAND_DETAILS.name}
                    </h1>
                    <p className="text-xs text-emerald-200/70 uppercase tracking-wider font-medium">
                        {BRAND_DETAILS.tagline}
                    </p>
                </div>
            </div> */}

            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 custom-scrollbar">

                {/* Navigation Items */}
                <nav className="space-y-1">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    if (item.href === "/") {
                                        window.dispatchEvent(new CustomEvent("reset-hero-state"));
                                    }
                                }}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                                    isActive
                                        ? "bg-emerald-900 text-white shadow-inner"
                                        : "text-emerald-200/70 hover:text-white hover:bg-emerald-900/40"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-red-600 rounded-r-full" />
                                )}
                                <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-red-500" : "text-emerald-400 group-hover:text-emerald-200")} />
                                <span className="tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer / Contact Trigger */}
            <div className="p-4 border-t border-emerald-900 bg-emerald-950/50">
                <button className="w-full py-3 px-4 rounded-lg bg-emerald-900/50 text-emerald-100 text-xs font-bold uppercase tracking-widest border border-emerald-800 hover:bg-emerald-800 hover:text-white hover:border-emerald-700 transition-all shadow-sm">
                    Contact Office
                </button>
            </div>
        </aside>
    );
}
