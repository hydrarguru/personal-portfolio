import { Education } from "@/types/types";



export const educations: Education[] = [
    {
        educationTitle: "IT-Högskolan",
        educationDescription: "IT-Högskolan is a two-year higher vocational education in web development. The education is aimed at those who want to work with web development and who have a great interest in programming and design.",
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
        endDate: "Jun 2025",
        image: '../images/ithogskolan.jpg'
    },
    {
        educationTitle: "FutureGames",
        educationDescription: "FutureGames is a higher vocational education in game development. The education is a two-year full-time education in game programming and game graphics. The education is aimed at those who want to work with game development and who have a great interest in programming and graphics.",
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
        endDate: "Nov 2020",
        image: '../images/futuregames.jpg'
    }
];