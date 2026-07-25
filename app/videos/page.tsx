"use client";

import { useState } from "react";
import { VideoCard } from "@/app/components/ui/VideoCard";
import { VideoLightbox } from "@/app/components/ui/VideoLightbox";
import { Video, Sparkles } from "lucide-react";

const VIDEOS = [
    {
        id: 1,
        title: "University of Florida Graduation",
        src: "/videos/IMG_1327.MP4",
        thumbnail: "/videos/thumbnails/IMG_1327.jpg",
        duration: "0:24",
        date: "December 2024",
        category: "Graduation"
    },
    {
        id: 2,
        title: "Call to the Bar ceremony",
        src: "/videos/IMG_1328.MP4",
        thumbnail: "/videos/thumbnails/IMG_1328.jpg",
        duration: "1:15",
        date: "5th May, 2023",
        category: "BAR"
    },
    {
        id: 3,
        title: "University Of Ghana Graduation",
        src: "/videos/IMG_1329.MP4",
        thumbnail: "/videos/thumbnails/IMG_1329.jpg",
        duration: "0:37",
        date: "February 2025",
        category: "Graduation"
    },
    {
        id: 4,
        title: "Call to the Bar ceremony",
        src: "/videos/IMG_1330.MP4",
        thumbnail: "/videos/thumbnails/IMG_1330.jpg",
        duration: "0:26",
        date: "5th May, 2023",
        category: "BAR"
    }
];

export default function VideosPage() {
    const [selectedVideo, setSelectedVideo] = useState<{ src: string, title: string } | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-emerald-950 text-white py-16 px-6 sm:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-800/30">
                        <Video className="w-3 h-3" />
                        Professional Media
                    </span>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                        Videos
                    </h1>
                    <div className="h-1.5 w-24 bg-red-600 mb-6 rounded-full shadow-lg shadow-red-900/20"></div>
                    <p className="text-lg text-emerald-100 max-w-2xl font-light leading-relaxed">
                        Call to the Ghana Bar Videos and University of Florida Videos
                    </p>
                </div>
            </div>

            {/* Video Grid */}
            <div className="px-6 sm:px-12 py-16 max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-10 text-emerald-900">
                    <Sparkles className="w-5 h-5" />
                    <h2 className="text-xl font-serif font-bold">Featured Highlights</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {VIDEOS.map((video) => (
                        <VideoCard
                            key={video.id}
                            title={video.title}
                            videoSrc={video.src}
                            thumbnailSrc={video.thumbnail}
                            duration={video.duration}
                            date={video.date}
                            category={video.category}
                            onClick={() => setSelectedVideo({ src: video.src, title: video.title })}
                        />
                    ))}
                </div>
            </div>

            {selectedVideo && (
                <VideoLightbox
                    videoSrc={selectedVideo.src}
                    title={selectedVideo.title}
                    isOpen={!!selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </div>
    );
}
