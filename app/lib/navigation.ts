import {
    Building2,
    Users,
    Landmark,
    Mic2,
    GraduationCap,
    Home,
    Gavel,
    Image,
    Trophy,
    Video,
    BookOpen,
    School,
    Flame
} from 'lucide-react';

export const BRAND_DETAILS = {
    name: "Wonder Victor Kutor, Esq.",
    initials: "WVK",
    tagline: "Lawyer | Author | Public Speaker",
    logoPlaceholder: true // Use initials for now
};

export const BOOK_DETAILS = {
    title: "The Immigration Formulae",
    subtitle: "Rules, Packaging & Strategy",
    coverImage: "/images/book-cover-placeholder.jpg", // Placeholder path
    links: {
        view: "/book",
        launch: "/book#launch-details"
    }
};

export const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
        icon: Home
    },
    {
        label: "VRA",
        href: "/vra",
        icon: Building2
    },
    {
        label: "VRA Schools",
        href: "/vra-schools",
        icon: School
    },
    {
        label: "YEA",
        href: "/yea",
        icon: Users
    },
    {
        label: "Politics",
        href: "/politics",
        icon: Landmark
    },
    {
        label: "NDC Elections 2026",
        href: "/ndc-election-2026",
        icon: Flame
    },
    {
        label: "Conferences",
        href: "/conferences",
        icon: Mic2
    },
    {
        label: "Education",
        href: "/education",
        icon: GraduationCap
    },
    {
        label: "Family",
        href: "/family",
        icon: Home
    },
    {
        label: "SRC Presidency",
        href: "/src-presidency",
        icon: Gavel
    },
    {
        label: "Photos",
        href: "/photos",
        icon: Image
    },
    {
        label: "GFA",
        href: "/gfa",
        icon: Trophy
    },
    {
        label: "Videos",
        href: "/videos",
        icon: Video
    }
];

export const BOOK_SUB_SECTIONS = [
    { label: "Overview", href: "/book#overview" },
    { label: "Forewords", href: "/book#forewords" },
    { label: "Table of Contents", href: "/book#toc" },
    { label: "Launch Details", href: "/book#launch-details" },
];
