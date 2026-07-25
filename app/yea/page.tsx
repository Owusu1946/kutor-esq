import Image from "next/image";

export default function YEAPage() {
    const captionedImages = [
        {
            src: "/yea/keta/photo_2026-02-13_14-40-51.jpg",
            caption: "Mr. Kutor, the District Director of YEA-Keta handing over selected Community Police Assistants (CPA's) to the Ghana Police Service- Keta in 2016.",
            alt: "Mr. Kutor handing over CPAs to Ghana Police Service"
        },
        {
            src: [
                "/yea/ceo/photo_2026-02-13_14-43-26.jpg",
                "/yea/ceo/photo_2_2026-02-13_14-41-05.jpg",
                "/yea/ceo/photo_3_2026-02-13_14-41-05.jpg",
                "/yea/ceo/photo_4_2026-02-13_14-41-05.jpg"
            ],
            caption: "Chief Executive of YEA having interactions with Staff of the Agency at the Headoffice.",
            alt: "Chief Executive of YEA interacting with staff"
        },
        {
            src: "/yea/hr/photo_2026-02-13_14-44-28.jpg",
            caption: "The HR Directorate of YEA and officers of the Public Service Commissions",
            alt: "HR Directorate of YEA and officers of the Public Service Commissions"
        },
        {
            src: "/yea/kumasi/photo_2026-02-13_14-46-15.jpg",
            caption: "HR Director visits Volta Region as part of a district tour exercise.",
            alt: "HR Director visiting Volta Region"
        },
        {
            src: "/yea/volta/photo_2026-02-13_14-46-18.jpg",
            caption: "HR Director visits Ashanti Region as part of a district tour exercise.",
            alt: "HR Director visiting Ashanti Region"
        },
        {
            src: [
                "/yea/training/photo_1_2026-02-20_13-23-41.jpg",
                "/yea/training/photo_2_2026-02-20_13-23-41.jpg"
            ],
            caption: "YEA Leadership Training in London, 2026.",
            alt: "YEA Leadership Training in London"
        }
    ];

    return (
        <div className="space-y-12 pb-20">
            {/* Header Section */}
            <section className="relative bg-emerald-950 text-white py-16 px-6 sm:px-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-2 flex items-center justify-center shadow-2xl border border-emerald-800/20">
                            <Image
                                src="/yea/Yea-logo.png"
                                alt="YEA Logo"
                                width={128}
                                height={128}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Youth Employment Agency (YEA)
                        </h1>
                        <div className="h-1.5 w-24 bg-red-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Leading strategic workforce development and institutional transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Writeup Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto">
                <div className="max-w-3xl prose prose-lg prose-emerald text-slate-600">
                    <p className="leading-relaxed mb-6">
                        Mr. Kutor is a lawyer and management consultant whose dynamic career spans law, public administraion, academia, and youth employment policy. He currently Serves as the Director of Human Resource at the Youth Employment Agency (YEA) of Ghana, where he leads strategic workforce development and institutional transformation efforts.
                    </p>
                    <p className="leading-relaxed">
                        He previously held the position of Deputy Director of Legal at YEA, having joined the Agency in 2016 as a Municipal Director stationed as the Keta Municipal Assembly.
                    </p>
                </div>
            </section>

            {/* Images Section */}
            <section className="px-6 sm:px-12 max-w-5xl mx-auto space-y-16">
                {captionedImages.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                        {Array.isArray(item.src) ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
                                {item.src.map((imgSrc, imgIdx) => (
                                    <div key={imgIdx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 group">
                                        <Image
                                            src={imgSrc}
                                            alt={`${item.alt} - Image ${imgIdx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="relative aspect-[16/9] w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border border-slate-100 group">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>
                        )}

                        <div className="flex gap-4 items-start max-w-3xl">
                            <div className="font-serif text-4xl text-emerald-100 font-bold -mt-2 select-none">
                                {idx + 1}
                            </div>
                            <p className="text-slate-700 font-medium italic leading-relaxed pt-1">
                                {item.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
