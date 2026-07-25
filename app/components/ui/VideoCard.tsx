"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface VideoCardProps {
    title: string;
    videoSrc: string;
    thumbnailSrc?: string;
    duration: string;
    date: string;
    category?: string;
    onClick?: () => void;
}

export function VideoCard({ title, videoSrc, thumbnailSrc, duration, date, category, onClick }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Video preview play blocked:", err));
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative cursor-pointer block"
        >
            {/* Thumbnail Container */}
            <div className="relative aspect-video bg-emerald-950 rounded-xl overflow-hidden mb-3 border border-emerald-800/20 shadow-sm group-hover:shadow-emerald-900/20 group-hover:shadow-xl transition-all duration-500">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={thumbnailSrc}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay / Dynamic Thumbnail fallback */}
                <div className={`absolute inset-0 bg-emerald-950/20 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 text-emerald-900 ml-1 fill-emerald-900" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium rounded-md border border-white/10">
                    {duration}
                </div>

                {/* Preview Badge */}
                <div className={`absolute top-2 left-2 px-2 py-0.5 bg-emerald-500/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest rounded transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    Preview
                </div>
            </div>

            {/* Content */}
            <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{date}</span>
                    {category && (
                        <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold">
                            {category}
                        </span>
                    )}
                </div>
                <h3 className="font-medium text-emerald-950 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {title}
                </h3>
            </div>
        </div>
    );
}
