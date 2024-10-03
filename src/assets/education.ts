import { Education } from "@/types/types";

export const educations: Education[] = [
    {
        educationTitle: "IT-Högskolan",
        educationDescription: "it-högskolan beskrivning",
        curriculum: [
            "HTML & CSS",
            "Native JavaScript",
            "UX & UI-design",
            "JavaScript med ramverk(React + Vue)",
            "Agil utveckling",
            "Fullstackutveckling",
            "Kommunikation, gruppdynamik och projektstyrning",
            "CMS"
        ],
        associatedProjects: ['CoinCompass', 'Reader', 'OGLe', 'J.A.T. (Job Application Tracker)'],
        startDate: 'Aug 2023',
        endDate: "Jun 2025"
    },
    {
        educationTitle: "FutureGames",
        educationDescription: "futuregames beskrivning",
        curriculum: [
        "Game programming with C#",
        "3D mathematics for game development",
        "Data structures and algorithms in game development",
        "Design patterns for game development intelligence in game production",
        "Development tools in game projects",
        "Game programming with C++",
        "Game physics",
        "Artificial intelligence in game production",
        "3D and shader programming",
        "Computer technology for game development",
        "Network programming for games",
        "Market Analysis, CV and Portfolio",
        "Industry preparatory game programming"
        ],
        associatedProjects: ['Fennec Peak', 'Dayspring', 'Summit'],
        startDate: 'Aug 2018',
        endDate: "Nov 2020"
    }
];