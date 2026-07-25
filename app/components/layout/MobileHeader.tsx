import Link from "next/link";
import { Menu, Home } from "lucide-react";
import { BRAND_DETAILS } from "@/app/lib/navigation";
import { cn } from "@/app/lib/utils";

interface MobileHeaderProps {
    onMenuClick: () => void;
    className?: string;
}

export function MobileHeader({ onMenuClick, className }: MobileHeaderProps) {
    return (
        <header className={cn("flex items-center justify-between px-6 py-4 bg-emerald-950/95 backdrop-blur-md text-white border-b border-emerald-900 lg:hidden sticky top-0 z-50", className)}>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-emerald-800 shadow-sm">
                    <img
                        src="/images/logo-round.png"
                        alt={BRAND_DETAILS.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-serif font-bold text-sm tracking-tight leading-none mb-1">
                        Wonder Victor Kutor
                    </span>
                    <span className="text-[10px] text-emerald-200/60 uppercase tracking-widest font-medium">
                        Esq.
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Link
                    href="/"
                    onClick={() => window.dispatchEvent(new CustomEvent("reset-hero-state"))}
                    className="p-2 text-emerald-100/70 hover:text-white transition-all bg-emerald-900/40 rounded-lg border border-emerald-800/50"
                    aria-label="Go to Home"
                >
                    <Home className="w-5 h-5" />
                </Link>
                <button
                    onClick={onMenuClick}
                    className="p-2 text-emerald-100/70 hover:text-white transition-all bg-emerald-900/40 rounded-lg border border-emerald-800/50"
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
